@echo off
setlocal
title ApexiveAI Smart QR - Frontend Setup
echo.
echo  ================================================
echo   ApexiveAI Smart QR - Frontend Setup
echo  ================================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found. Install Node.js 20.9 or newer.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm was not found.
  pause
  exit /b 1
)
cd /d "%~dp0frontend"
if not exist package.json (
  echo ERROR: frontend\package.json is missing.
  pause
  exit /b 1
)
if not exist .env.local copy .env.example .env.local >nul
echo Installing frontend dependencies...
call npm install
if errorlevel 1 (
  echo.
  echo Dependency installation failed. Check your internet connection and npm output.
  pause
  exit /b 1
)
echo.
echo Setup complete. Starting development server...
call npm run dev
