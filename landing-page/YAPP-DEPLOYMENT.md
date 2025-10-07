# 🚀 Deployment Guide for yapp.me.uk

## Your Hosting Details
- **Domain**: yapp.me.uk
- **Server**: server704.shared.spaceship.host
- **Username**: EideticPleroma@yapp.me.uk
- **Password**: A%D&QCyvZywZajsUu8qg
- **Path**: /home/zbczxinvtz/yapp.me.uk/
- **URL**: http://yapp.me.uk/

## 🚀 Quick Deployment (Recommended)

### Method 1: Automated Build + Manual Upload
1. Run the deployment script:
   ```bash
   .\deploy-manual.bat
   ```
2. This will build the project and open the `out` folder
3. Follow the on-screen instructions to upload via cPanel

### Method 2: Manual Build + Upload
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to cPanel File Manager
3. Navigate to `/home/zbczxinvtz/yapp.me.uk/`
4. Upload all files from `out` directory

## 📁 Files to Upload

Upload ALL files from the `out` directory:
- `index.html` (main page)
- `logo.jpg` (your logo)
- `favicon.ico` (site icon)
- `_next/` folder (all CSS, JS, fonts)
- All other files

## ✅ Verification

After upload, visit: **http://yapp.me.uk/**

Check that:
- Logo displays correctly
- All sections load properly
- Mobile view works
- No console errors

## 🔄 Making Updates

To update your site:
1. Edit files in `src` folder
2. Run `.\deploy-manual.bat`
3. Upload new files from `out` directory
4. Changes are live immediately!

## 🛠️ Troubleshooting

### Common Issues:
- **Logo not showing**: Make sure `logo.jpg` is uploaded
- **Styles not loading**: Check that `_next` folder is uploaded completely
- **404 errors**: Ensure `index.html` is in the root directory

### File Permissions:
- cPanel usually sets these automatically
- If issues persist, check file permissions in File Manager

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Contact Spaceship support if needed

---

**Your site is ready to go live!** 🎉
