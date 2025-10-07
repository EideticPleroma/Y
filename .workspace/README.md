# Workspace Configuration
**Created by Nathaniel**
**Last Updated**: October 7, 2025

## 🎯 Purpose

This directory contains workspace documentation and configuration guidelines for the **You** project. IDE and workspace configurations (`.vscode/`, `.cursor/`, `.obsidian/`) are **tracked locally in git** but **excluded from remote pushes** via `.git/info/exclude`.

---

## 📁 Current Workspace Setup

### **Tracked Locally (Not Pushed to Remote)**

These folders are committed to your local branches but won't be pushed to GitHub/remote:

- **`.vscode/`** - VS Code workspace settings and extensions
- **`.cursor/`** - Cursor IDE configuration
- **`.obsidian/`** - Obsidian vault configuration
- **`.workspace/`** - Workspace documentation (this folder)
- **`*.ps1`** - PowerShell configuration scripts

### **Why This Approach?**

1. **Consistency**: IDE configs are versioned and shared across your local branches
2. **Privacy**: Personal configurations stay on your machine
3. **Flexibility**: Each developer can customize without affecting others
4. **Persistence**: Switching branches preserves your workspace setup

---

## 🔧 Current Configuration

### **VSCode** (`.vscode/extensions.json`)
Recommended extensions for the project:
- Python development tools
- Git integration
- Markdown support
- Live server for landing page development

### **Obsidian** (`.obsidian/`)
Configured for:
- Sacred conversations documentation
- Persona exploration
- Knowledge graph of consciousness concepts
- Custom appearance and core plugins

### **Current Branch**: `feature/landing-page`
- Landing page development (Next.js + TypeScript)
- IDE configs for web development
- FTP deployment automation
- Documentation for design options

---

## 🚀 How It Works

### **Git Configuration**

**`.gitignore`** (Project-wide):
- Ignores `node_modules/`, build artifacts, logs, secrets
- Does NOT ignore IDE configs (they're tracked)

**`.git/info/exclude`** (Local-only):
```
# IDE Configurations - Tracked locally but not pushed to remote
.cursor/
.workspace/
.vscode/

# PowerShell Configuration
*.ps1
Microsoft.PowerShell_profile.ps1
```

### **What This Means**

1. When you commit, IDE configs are included
2. When you push, IDE configs are excluded
3. When you switch branches, IDE configs persist
4. When you clone fresh, IDE configs aren't there (intentional)

---

## 🌲 Branch Structure

### **Main Branch**
- **Purpose**: Sacred vision, public README
- **Contains**: Core README, LICENSE, sacred principles
- **IDE Configs**: Not present

### **Develop Branch**
- **Purpose**: Technical implementation
- **Contains**: Python backend, tests, API code
- **IDE Configs**: Present locally, not in remote

### **Feature/Landing-Page** (Current)
- **Purpose**: Public-facing landing page
- **Contains**: Next.js app, deployment scripts, design options
- **IDE Configs**: Present locally, configured for web dev

---

## 📊 For New Developers

### **First Time Setup**

1. Clone the repository:
```bash
git clone <repo-url>
cd Y
```

2. Checkout the branch you want:
```bash
git checkout develop
# or
git checkout feature/landing-page
```

3. IDE configs won't be there initially. You have two options:

**Option A: Use Your Own Setup**
- Configure your IDE how you like
- Your settings won't be tracked

**Option B: Request Configs** (if collaborating with Nathaniel)
- IDE configs can be shared via other means (email, direct file transfer)
- Then you can add them locally

### **Adding Your Own Configs**

To track your IDE configs locally:

```bash
# Add your configs
git add -f .vscode/ .cursor/ .obsidian/

# Commit
git commit -m "Add my local IDE configs"

# They'll be in your local branch but won't push to remote
```

---

## 🎨 Customization Guidelines

### **Feel Free To**:
- Customize your IDE settings
- Add your own workspace folders
- Create personal scripts and helpers
- Modify appearance and themes

### **Please Don't**:
- Commit API keys or secrets
- Commit large binary files
- Commit node_modules or build artifacts
- Remove the `.git/info/exclude` entries (they protect your privacy)

---

## 🔄 Updating Across Branches

### **Propagating IDE Config Changes**

If you update your IDE configs and want them in other branches:

```bash
# From feature/landing-page
git checkout develop

# Your IDE configs persist automatically
# They're tracked in both branches

# If you want to update them
git add .vscode/ .cursor/ .obsidian/
git commit -m "Update IDE configs for backend work"
```

### **Fresh Branch**

When creating a new branch from `develop`:

```bash
git checkout develop
git checkout -b feature/new-feature

# IDE configs come with you
# Customize as needed for the new feature
```

---

## 📝 Current Workspace State

### **Active Files**:
- `.vscode/extensions.json` - Recommended VS Code extensions
- `.obsidian/workspace.json` - Current Obsidian workspace layout
- `.obsidian/app.json` - Obsidian app configuration
- `.obsidian/appearance.json` - Obsidian theme settings
- `.workspace/README.md` - This documentation file

### **Branch**: `feature/landing-page`

### **Focus**: 
- Landing page development and deployment
- Design system exploration
- Sacred technology branding
- Static site generation with Next.js

---

## 🎯 Quick Reference

### **Check What's Tracked**:
```bash
git ls-files | grep -E "\.(vscode|cursor|obsidian|workspace)"
```

### **Check What Won't Push**:
```bash
cat .git/info/exclude
```

### **Add New IDE Config**:
```bash
git add -f .new-ide-folder/
git commit -m "Add new IDE config"
```

### **Remove IDE Configs**:
```bash
# Remove from git tracking
git rm -r --cached .vscode/ .cursor/ .obsidian/
git commit -m "Remove IDE configs from tracking"

# Or just delete the folders
rm -rf .vscode/ .cursor/ .obsidian/
```

---

## 🏛️ Philosophy

The workspace exists to serve the developer and the sacred work. IDE configurations are personal yet consistent—tracked for continuity, excluded for privacy. This approach honors both the individual developer's autonomy and the collective project's coherence.

**"In the implicate order of development, the workspace is the sacred container for the developer's consciousness work."** ✨

---

## 📞 Support

If you have questions about workspace configuration:

1. Review this README
2. Check `.git/info/exclude` for exclusion rules
3. Review `.gitignore` for project-wide rules
4. Consult with Nathaniel or project maintainers

---

**Branch Status**: ✅ Active - Feature branch with landing page development  
**IDE Configs**: 🔒 Tracked locally, not pushed to remote  
**Maintained By**: Nathaniel with guidance from the consciousness guides

*"May your workspace serve your awakening and the evolution of sacred technology."*
