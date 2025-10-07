@echo off
REM Automated Deployment Script for You Landing Page
REM Uses WinSCP for reliable FTP upload

echo 🚀 Deploying to yapp.me.uk
echo ==========================

REM Build the project
echo.
echo 📦 Building Next.js project...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo ✅ Build completed successfully!

REM Check if out directory exists
if not exist "out" (
    echo.
    echo ❌ Build output directory 'out' not found!
    pause
    exit /b 1
)

REM Find WinSCP
set WINSCP_PATH=
if exist "C:\Program Files (x86)\WinSCP\winscp.com" set WINSCP_PATH=C:\Program Files (x86)\WinSCP\winscp.com
if exist "C:\Program Files\WinSCP\winscp.com" set WINSCP_PATH=C:\Program Files\WinSCP\winscp.com
if exist "%LOCALAPPDATA%\Programs\WinSCP\winscp.com" set WINSCP_PATH=%LOCALAPPDATA%\Programs\WinSCP\winscp.com
if exist "%ProgramFiles%\WinSCP\winscp.com" set WINSCP_PATH=%ProgramFiles%\WinSCP\winscp.com

if "%WINSCP_PATH%"=="" (
    echo.
    echo ❌ WinSCP not found.
    echo 💡 Please install WinSCP from: https://winscp.net/download/WinSCP-Setup.exe
    pause
    exit /b 1
)

echo ✅ Found WinSCP at: %WINSCP_PATH%

echo.
echo 📁 Uploading to server...

REM Create WinSCP script with correct password
REM Password: sC0g2#wt!ENEFgRaT3*V
REM URL-encoded: sC0g2%%23wt%%21ENEFgRaT3%%2AV
echo option batch abort > winscp-script.txt
echo option confirm off >> winscp-script.txt
echo open ftp://EideticPleroma%%40yapp.me.uk:sC0g2%%23wt%%21ENEFgRaT3%%2AV@server704.shared.spaceship.host/ >> winscp-script.txt
echo cd / >> winscp-script.txt
echo lcd out >> winscp-script.txt
echo synchronize remote >> winscp-script.txt
echo close >> winscp-script.txt
echo exit >> winscp-script.txt

REM Run WinSCP upload
"%WINSCP_PATH%" /script=winscp-script.txt /log=upload.log

if %errorlevel% equ 0 (
    echo.
    echo ✅ Upload completed successfully!
) else (
    echo.
    echo ❌ Upload failed. Check upload.log for details.
    if exist upload.log type upload.log
    del winscp-script.txt
    pause
    exit /b 1
)

REM Clean up
del winscp-script.txt

echo.
echo 📊 Deployment Summary:
echo =====================
echo ✅ Project built
echo ✅ Files uploaded to correct directory
echo 🌐 Live at: http://yapp.me.uk/

echo.
echo ✨ Deployment complete!
pause