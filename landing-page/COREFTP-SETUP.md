# 🔧 CoreFTP Setup Guide for yapp.me.uk

## 📥 Installing CoreFTP

1. Download CoreFTP from your cPanel (if not already done)
2. Install and launch CoreFTP
3. You should see the main CoreFTP interface

## 🔗 Setting Up Your Connection

### Method 1: Quick Setup
1. Click **"New Site"** or **"+"** button
2. Fill in the connection details:

```
Site Name: You Landing Page - yapp.me.uk
Host/IP: server704.shared.spaceship.host
Username: EideticPleroma@yapp.me.uk
Password: A%D&QCyvZywZajsUu8qg
Port: 21
Protocol: FTP
```

3. Click **"Connect"**

### Method 2: Advanced Setup
1. Go to **Site Manager** (F4)
2. Click **"New Site"**
3. Configure the connection:

**General Tab:**
- Site Name: `You Landing Page - yapp.me.uk`
- Host/IP: `server704.shared.spaceship.host`
- Username: `EideticPleroma@yapp.me.uk`
- Password: `A%D&QCyvZywZajsUu8qg`
- Port: `21`

**Advanced Tab:**
- Protocol: `FTP`
- Passive Mode: `Yes`
- Secure: `No`

4. Click **"Connect"**

## 📁 Uploading Your Files

### Step 1: Connect to Server
1. Select your connection from the site list
2. Click **"Connect"**
3. Wait for connection to establish

### Step 2: Navigate to Correct Directory
1. In the **Remote** panel (right side), navigate to:
   ```
   /home/zbczxinvtz/yapp.me.uk/
   ```
2. This should be your website's root directory

### Step 3: Upload Files
1. In the **Local** panel (left side), navigate to your project's `out` folder:
   ```
   D:\Projects\Y\landing-page\out
   ```
2. Select **ALL files and folders** in the `out` directory
3. Right-click and select **"Upload"** or drag and drop to the remote panel
4. Wait for upload to complete

### Step 4: Verify Upload
Make sure these files are in the root directory:
- `index.html` ✅
- `logo.jpg` ✅
- `favicon.ico` ✅
- `_next/` folder ✅
- All other files ✅

## 🚀 Quick Deployment Process

### Automated Build + CoreFTP Upload
1. Run the deployment script:
   ```bash
   .\coreftp-deploy.bat
   ```
2. This builds the project and shows connection details
3. Open CoreFTP and connect using the provided details
4. Upload all files from the `out` directory

### Manual Process
1. Build: `npm run build`
2. Open CoreFTP
3. Connect to your server
4. Navigate to `/home/zbczxinvtz/yapp.me.uk/`
5. Upload all files from `out` directory

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
2. Run `.\coreftp-deploy.bat`
3. Upload new files via CoreFTP
4. Changes are live immediately!

## 🛠️ Troubleshooting

### Connection Issues:
- Check username/password
- Verify server address
- Try passive mode
- Check firewall settings

### Upload Issues:
- Make sure you're in the correct directory
- Check file permissions
- Try uploading one file at a time

### Site Not Loading:
- Verify `index.html` is in root directory
- Check that all files uploaded completely
- Clear browser cache

## 📞 Support

If you need help:
1. Check CoreFTP connection log
2. Verify all files are uploaded
3. Contact Spaceship support if needed

---

**Your site is ready to go live with CoreFTP!** 🎉
