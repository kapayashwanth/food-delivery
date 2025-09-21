@echo off
echo Testing FoodFlow Images...
echo.

echo Checking if all image files exist in public/assets/...
dir public\assets\*.jpg /b
echo.

echo Total image files found:
dir public\assets\*.jpg /b | find /c ".jpg"
echo.

echo Testing image accessibility...
echo Opening image test page...
start image-test.html

echo.
echo Image test completed!
echo Check the opened browser window to see if images are loading correctly.
echo.
echo If images are not showing in the browser:
echo 1. The images might need to be served from a web server
echo 2. Try opening the file directly in your browser
echo 3. For full testing, you need to run the React app with: npm run dev
echo.
pause
