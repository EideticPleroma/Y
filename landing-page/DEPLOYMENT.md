# 🚀 Deployment Guide for You Landing Page

This guide will help you deploy your landing page to Spaceship hosting with cPanel.

## 📋 Prerequisites

- Spaceship hosting account with cPanel access
- Your domain name
- FTP credentials (if using FTP client)

## 🔍 Finding Your FTP Details

### Method 1: cPanel Dashboard
1. Log into your Spaceship hosting account
2. Go to **cPanel** dashboard
3. Look for **"FTP Accounts"** section
4. Note down:
   - **Server**: Usually `ftp.yourdomain.com` or `yourdomain.com`
   - **Username**: Your cPanel username
   - **Password**: Your cPanel password
   - **Port**: Usually `21` (FTP) or `22` (SFTP)

### Method 2: File Manager
1. In cPanel, go to **"File Manager"**
2. Navigate to `public_html` folder
3. This is where your website files should go

## 🚀 Deployment Methods

### Method 1: Quick Deploy (Recommended)
1. Run the quick deployment script:
   ```bash
   .\quick-deploy.bat
   ```
2. This will build the project and open the `out` folder
3. Copy ALL files from `out` folder to your cPanel `public_html` folder

### Method 2: Manual Build + Upload
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload all files from `out` directory to `public_html` in cPanel File Manager

### Method 3: FTP Upload (Advanced)
1. Get your FTP credentials from cPanel
2. Use an FTP client like FileZilla or WinSCP
3. Connect to your server
4. Upload all files from `out` directory to `public_html`

## 📁 File Structure

After upload, your `public_html` should contain:
```
public_html/
├── index.html          # Main page
├── logo.jpg           # Your logo
├── favicon.ico        # Site icon
├── _next/             # Next.js assets
│   ├── static/        # CSS, JS, fonts
│   └── ...
└── [other files]      # Additional assets
```

## ✅ Verification

1. Visit your domain: `https://yourdomain.com`
2. Check that the logo displays correctly
3. Verify all sections load properly
4. Test on mobile devices

## 🔄 Updating Your Site

To make updates:
1. Edit your code in the `src` folder
2. Run `.\quick-deploy.bat`
3. Upload the new files from `out` directory
4. Your changes will be live immediately

## 🛠️ Troubleshooting

### Common Issues:
- **Logo not showing**: Make sure `logo.jpg` is uploaded
- **Styles not loading**: Check that `_next` folder is uploaded completely
- **404 errors**: Ensure `index.html` is in the root of `public_html`

### File Permissions:
- Most files should be `644`
- Folders should be `755`
- cPanel usually sets these automatically

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Check file permissions in cPanel
4. Contact Spaceship support if needed

---

**Happy Deploying!** 🎉
