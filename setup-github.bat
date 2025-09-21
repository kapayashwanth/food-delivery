@echo off
echo Setting up FoodFlow for GitHub upload...
echo.

echo Step 1: Checking Git installation...
git --version
if %errorlevel% neq 0 (
    echo Git not found. Please install Git from https://git-scm.com/download/win
    echo Then restart this script.
    pause
    exit /b 1
)

echo.
echo Step 2: Initializing Git repository...
git init

echo.
echo Step 3: Adding remote repository...
git remote add origin https://github.com/kapayashwanth/food-delivery.git

echo.
echo Step 4: Adding all files...
git add .

echo.
echo Step 5: Committing changes...
git commit -m "Enhanced FoodFlow: View Item feature, multiple images, production ready"

echo.
echo Step 6: Pushing to GitHub...
git push -u origin main

echo.
echo ✅ Upload complete! Your enhanced FoodFlow project is now on GitHub.
echo.
echo 🌐 Repository: https://github.com/kapayashwanth/food-delivery
echo 🚀 Ready for Netlify deployment!
echo.
pause
