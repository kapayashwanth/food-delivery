@echo off
echo Building project for Netlify deployment...

REM Check if Node.js is available
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js not found. Please install Node.js first.
    echo Download from: https://nodejs.org/en/download/
    pause
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
npm install

REM Build the project
echo Building project...
npm run build

echo Build complete! The dist folder is ready for deployment.
pause
