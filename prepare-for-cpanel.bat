@echo off
REM Windows Batch Script to Prepare Laravel Project for cPanel Deployment

echo ========================================
echo Preparing Laravel Project for cPanel
echo ========================================
echo.

REM Check if we're in Laravel root
if not exist "artisan" (
    echo ERROR: artisan file not found. Please run this script from Laravel root directory.
    pause
    exit /b 1
)

echo [1/4] Installing Node dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo [2/4] Building frontend assets...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo [3/4] Installing PHP dependencies (production)...
call composer install --optimize-autoloader --no-dev --no-interaction
if errorlevel 1 (
    echo ERROR: Composer install failed
    pause
    exit /b 1
)

echo.
echo [4/4] Creating deployment package...
echo.
echo Creating zip file (excluding unnecessary files)...

REM Create a temporary file list for 7-Zip or use PowerShell
powershell -Command "Compress-Archive -Path app,bootstrap,config,database,public,resources,routes,storage,vendor,artisan,composer.json,composer.lock,package.json,package-lock.json,vite.config.ts,tsconfig.json,phpunit.xml -DestinationPath diro-app-cpanel.zip -Force -Exclude 'node_modules','.git','storage\logs\*.log','.env'"

if errorlevel 1 (
    echo.
    echo WARNING: Could not create zip automatically.
    echo Please manually create a zip file excluding:
    echo   - node_modules/
    echo   - .git/
    echo   - storage/logs/*.log
    echo   - .env
    echo   - vendor/ (if you will install on server)
) else (
    echo.
    echo SUCCESS: Created diro-app-cpanel.zip
)

echo.
echo ========================================
echo Preparation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Upload the project to your cPanel account
echo 2. Follow the DEPLOYMENT_GUIDE.md instructions
echo 3. Make sure to create .env file on the server
echo 4. Update public_html/index.php paths
echo.
pause


