import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();
    console.log('Received message:', message);

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set');
    }

    // Enhanced context for food delivery app
    const systemPrompt = `You are FoodieBot, an AI assistant for a food delivery platform. Your role is to help customers with:

1. Restaurant recommendations based on cuisine, ratings, delivery time, and budget
2. Menu information, ingredients, allergens, and nutritional details
3. Order assistance and customization options
4. Delivery tracking and estimated times
5. General questions about food, restaurants, and the platform

Current available restaurants and context:
- Pizza Palace: Italian cuisine, 4.5 rating, 25-30 min delivery, ₹50 delivery fee
- Burger Barn: Fast food, burgers and sides, 4.2 rating, 20-25 min delivery, ₹40 delivery fee

Menu highlights:
- Pizzas: Margherita (₹599), Pepperoni (₹699), Veggie Supreme (₹799)
- Burgers: Classic Burger (₹499), Chicken Deluxe (₹649), Chicken BBQ (₹899)

All dishes are customizable with options for:
- Size variations (Regular/Large)
- Spice level (Mild/Medium/Hot)
- Extra toppings and add-ons
- Special dietary requirements

Be helpful, friendly, and concise. Always suggest relevant menu items and provide accurate information about delivery times and costs. If asked about specific nutritional information you don't have, suggest contacting the restaurant directly.

${context ? `Additional context: ${context}` : ''}

User's message: ${message}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini response:', data);

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response from Gemini API');
    }

    const botResponse = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ 
      response: botResponse,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      fallbackResponse: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact support for assistance."
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});