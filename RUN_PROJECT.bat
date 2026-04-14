@echo off
echo ===================================================
echo   Travel Assistant Prototype Starter
echo ===================================================
echo.
echo Installing dependencies if needed... (This may take a minute)
call npm install

echo.
echo Starting the application...
echo Please wait for the browser to open.
echo.

start http://localhost:3000
call npm run dev
pause
