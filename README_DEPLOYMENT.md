# 🚀 cPanel Deployment Documentation

This directory contains all the documentation and helper scripts needed to deploy your Laravel + React + Vite + Inertia.js application to cPanel.

## 📚 Documentation Files

### 1. **CPANEL_QUICKSTART.md** ⭐ START HERE
   - Quick step-by-step guide for deploying to cPanel
   - Perfect for first-time deployment
   - Includes all essential steps

### 2. **DEPLOYMENT_GUIDE.md**
   - Comprehensive deployment guide
   - Detailed explanations of each step
   - Troubleshooting section
   - Security checklist

### 3. **DEPLOYMENT_CHECKLIST.md**
   - Printable checklist format
   - Track your progress
   - Ensure nothing is missed
   - Command reference included

### 4. **cpanel-deployment-steps.txt**
   - Quick reference guide
   - Copy-paste commands
   - Minimal formatting for easy reading

## 🛠️ Helper Scripts

### 1. **prepare-for-cpanel.bat** (Windows)
   - Prepares your project locally before upload
   - Builds frontend assets
   - Installs production dependencies
   - Creates deployment package

### 2. **deploy-cpanel.sh** (Linux/Mac/SSH)
   - Automated deployment script
   - Runs on your cPanel server via SSH
   - Handles optimization and caching
   - Use if you have SSH access

### 3. **update-public-index.php**
   - Updates `public_html/index.php` paths automatically
   - Saves manual editing
   - Upload to server and run once

## 🎯 Quick Start

1. **Read CPANEL_QUICKSTART.md** for step-by-step instructions

2. **Prepare locally:**
   ```bash
   # Windows
   prepare-for-cpanel.bat
   
   # Or manually:
   npm install
   npm run build
   composer install --optimize-autoloader --no-dev
   ```

3. **Upload to cPanel:**
   - Upload project to home directory
   - Copy public files to public_html
   - Update public_html/index.php paths

4. **Configure:**
   - Create database in cPanel
   - Create .env file
   - Set permissions
   - Run migrations

5. **Optimize:**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   php artisan storage:link
   ```

6. **Test:**
   - Visit your domain
   - Test all features
   - Check error logs

## 📋 Deployment Overview

### Directory Structure

```
/home/username/
├── diro-app/              ← Laravel root (outside public_html)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── public/            ← Copy contents to public_html
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── vendor/
│   ├── .env               ← Create this
│   └── artisan
└── public_html/           ← Web root (public files here)
    ├── index.php          ← Update paths
    ├── .htaccess
    ├── build/             ← Vite assets
    └── ...
```

### Key Configuration

1. **Update `public_html/index.php`:**
   - Change paths to point to `../diro-app/`
   - Use `update-public-index.php` helper script

2. **Create `.env` file:**
   - Set `APP_ENV=production`
   - Set `APP_DEBUG=false`
   - Configure database credentials
   - Generate `APP_KEY`

3. **Set Permissions:**
   - `storage/` → 755
   - `bootstrap/cache/` → 755

## 🔧 Required cPanel Features

- PHP 8.2 or higher
- MySQL database
- File Manager access
- SSH access (recommended, not required)
- mod_rewrite enabled (usually enabled by default)

## ⚠️ Common Issues

### 500 Internal Server Error
- Check `.env` file exists
- Verify `APP_KEY` is set
- Check file permissions
- Review error logs

### Assets Not Loading
- Verify `public/build/` exists
- Check file paths
- Clear browser cache

### Database Connection Error
- Verify database credentials
- Check database user permissions
- Verify database host

## 📞 Need Help?

1. Check **DEPLOYMENT_GUIDE.md** for detailed troubleshooting
2. Review error logs: `storage/logs/laravel.log`
3. Check cPanel error logs
4. Verify all checklist items in **DEPLOYMENT_CHECKLIST.md**

## 🔒 Security Reminders

- ✅ Never commit `.env` file
- ✅ Set `APP_DEBUG=false` in production
- ✅ Use strong database passwords
- ✅ Set correct file permissions
- ✅ Keep dependencies updated

## 📝 Next Steps After Deployment

1. Set up regular backups
2. Monitor error logs
3. Set up SSL certificate (if not already)
4. Configure email settings
5. Set up monitoring (optional)

## 🎉 Success!

Once deployed, your Laravel + React application will be live on cPanel!

---

**Last Updated:** 2025
**Project:** Laravel + React + Vite + Inertia.js
**Target:** cPanel Hosting

