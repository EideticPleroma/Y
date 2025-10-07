# Why Automated FTP Upload Fails

## The Problem

Every automated upload attempt is **hanging/timing out**. Here's why:

## Root Causes

### 1. **CoreFTP Command-Line Limitations**
- CoreFTP is primarily a GUI application
- The command-line interface (`coreftp.exe -s script.txt`) exists but is **not reliable** for batch operations
- It hangs on passive mode connections
- No proper timeout handling in batch mode

### 2. **PowerShell FTP WebRequest Issues**
- PowerShell's built-in `FtpWebRequest` class has known issues with:
  - **Passive mode** (required by most shared hosting)
  - **Firewall traversal**
  - **Multiple file uploads** (hangs after a few files)
  - **Directory creation** (can't create directories reliably)

### 3. **Server Configuration**
- Spaceship hosting requires **passive mode FTP**
- The server may have connection rate limiting
- The path `/home/zbczxinvtz/yapp.me.uk/` doesn't exist (should be `/public_html`)

## What We Need for Automation

### Option 1: **WinSCP** (Best Solution)
```bash
# WinSCP has excellent command-line support
winscp.com /script=upload-script.txt
```

**Why WinSCP works:**
- Robust command-line interface
- Handles passive mode properly
- Reliable with shared hosting
- Free and widely used

**Install:** https://winscp.net/download/WinSCP-Setup.exe

### Option 2: **lftp** (Linux-style tool for Windows)
```bash
# lftp is the gold standard for FTP automation
lftp -c "open ftp://user:pass@server; mirror -R local remote"
```

**Install via:** Cygwin or WSL

### Option 3: **Proper CoreFTP Pro License**
CoreFTP Lite (free) has limited CLI support. CoreFTP Pro has better automation.

### Option 4: **Git-based Deployment**
Instead of FTP, use:
- GitHub Actions with FTP deployment
- Direct Git push to hosting (if supported)

## The Fix You Need to Implement

### Quick Fix (5 minutes):
1. Download and install **WinSCP**: https://winscp.net/download/WinSCP-Setup.exe
2. I'll create a new automation script using WinSCP
3. One command: `.\deploy.bat` will build and upload automatically

### Alternative Fix (Manual but Reliable):
1. Use CoreFTP GUI with the connection file: `yapp-me-uk-connection.ftp`
2. Import the connection in CoreFTP
3. Drag and drop files from `out` folder
4. Takes 2 minutes per deploy

## Your Current Setup

**What works:**
- ✅ Build process (`npm run build`)
- ✅ FTP credentials are correct
- ✅ CoreFTP GUI connections work
- ✅ Connection file is configured properly

**What doesn't work:**
- ❌ CoreFTP command-line automation (hangs)
- ❌ PowerShell FTP (times out)
- ❌ Batch FTP scripts (unreliable)

## Recommended Action

**Install WinSCP and I'll create a working automation script in 2 minutes.**

WinSCP is the industry standard for automated FTP/SFTP uploads on Windows and will solve all these issues immediately.

---

**Current Status:**
- All broken deployment scripts have been removed
- Clean slate ready for proper automation
- Your FTP credentials are saved in: `ftp-config.txt`
- Connection file ready: `yapp-me-uk-connection.ftp`

