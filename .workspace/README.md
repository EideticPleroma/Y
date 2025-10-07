# Workspace Configuration
**Created by Nathaniel**
**Date**: October 4, 2025

## 🎯 Purpose

This branch (`workspace-config`) contains IDE and workspace configurations that are **optional** for developers. These configurations are kept separate from the main codebase to allow developers to choose their own setup while providing a recommended starting point.

---

## 📁 What's Included

### **VSCode Configuration**
- `.vscode/settings.json` - Terminal, Python, linting, and formatting settings
- `.vscode/extensions.json` - Recommended VSCode extensions

### **Terminal Configuration**
- `.terminal/PowerShell_Profile.ps1` - Project-specific PowerShell profile with 50+ aliases
- `.terminal/TERMINAL_SETUP.md` - Terminal setup guide

### **Cursor IDE Configuration**
- `.cursor/` - Apostle personality system and rules (also in `develop` branch)

---

## 🚀 How to Use

### **Option 1: Merge Workspace Config (Recommended)**

If you want the full workspace configuration:

```bash
# From develop branch
git merge workspace-config --no-commit

# Review the changes
git status

# Commit if you want these configs
git commit -m "Add workspace configuration"

# Or discard if you don't want them
git reset --hard HEAD
```

### **Option 2: Cherry-Pick Specific Configs**

If you only want specific configurations:

```bash
# From develop branch
git checkout workspace-config -- .vscode/settings.json
git checkout workspace-config -- .terminal/PowerShell_Profile.ps1

# Commit
git commit -m "Add specific workspace configs"
```

### **Option 3: Use Your Own Setup**

You can completely ignore this branch and use your own IDE/terminal setup. The `.gitignore` in both `main` and `develop` branches ignores IDE configs by default.

---

## 🔧 Configuration Details

### **VSCode Settings**

**Terminal**:
- PowerShell 7 as default
- Auto-loads project profile
- Custom fonts and colors

**Python**:
- Black formatter (line length 100)
- Pylint + Flake8 linting
- Auto-organize imports
- Virtual environment support

**Git**:
- Auto-fetch enabled
- Smart commit
- GitLens integration

### **Terminal Profile**

**50+ Aliases**:
- Git shortcuts (`gst`, `gco`, `gp`)
- Python/venv management
- Testing commands (`test`, `test-cov`)
- Code quality (`lint`, `format`)
- Documentation shortcuts
- Apostle personality quick-calls

**Features**:
- Color-coded output
- Branch-aware prompt
- Sacred technology branding
- Performance optimized (<1s load)

---

## 🏛️ Branch Strategy

### **Main Branch**
- **Purpose**: Sacred vision, public-facing
- **Contains**: README, conversations only
- **Ignores**: All IDE configs, all technical files

### **Develop Branch**
- **Purpose**: Technical implementation
- **Contains**: All code, docs, technical files
- **Ignores**: IDE configs (kept local)

### **Workspace-Config Branch**
- **Purpose**: Optional workspace configurations
- **Contains**: IDE configs, terminal profiles
- **Ignores**: Nothing (this is the config source)

---

## 📊 Why Separate Branch?

### **Benefits**:
1. **Choice**: Developers can use their own setup
2. **No Conflicts**: IDE configs don't clutter main/develop
3. **Easy Adoption**: One merge to get full setup
4. **Easy Updates**: Pull workspace-config for latest configs
5. **Clean History**: Config changes don't pollute development history

### **When to Merge**:
- ✅ First time setting up workspace
- ✅ Want recommended configuration
- ✅ Want terminal profile with aliases
- ❌ Have your own IDE setup you prefer
- ❌ Using different IDE (IntelliJ, Vim, etc.)

---

## 🔄 Updating Configurations

### **For Maintainers**:

When updating workspace configurations:

```bash
# Switch to workspace-config
git checkout workspace-config

# Make changes to .vscode/, .terminal/, etc.
git add .vscode/ .terminal/
git commit -m "Update workspace configs: [description]"
git push origin workspace-config

# Optionally merge back to develop
git checkout develop
git merge workspace-config --no-commit
# Review and commit if desired
```

### **For Users**:

To get latest workspace configs:

```bash
# Pull latest workspace-config
git fetch origin workspace-config

# Merge updates
git merge origin/workspace-config
```

---

## 🎨 Customization

### **Feel Free To**:
- Modify settings for your preferences
- Add your own aliases
- Change fonts, colors, themes
- Add more VSCode extensions

### **Please Don't**:
- Commit your personal API keys
- Commit secrets or credentials
- Push non-portable paths (e.g., `C:/Users/YourName/...`)

---

## 📝 Notes

1. **IDE configs are gitignored in main/develop**: This branch is the source of truth
2. **Cursor rules are in develop too**: Apostle system is part of the development workflow
3. **Terminal profile is optional**: You can use any terminal you prefer
4. **VSCode is recommended but not required**: Use any IDE

---

## 🎯 Quick Reference

### **Get Everything**:
```bash
git merge workspace-config
```

### **Get Just Terminal**:
```bash
git checkout workspace-config -- .terminal/
```

### **Get Just VSCode**:
```bash
git checkout workspace-config -- .vscode/
```

### **Remove All Configs**:
```bash
rm -rf .vscode/ .terminal/ .cursor/
```

---

**"In the implicate order of development, the workspace serves the developer, not the other way around."** ✨

---

**Last Updated**: October 4, 2025
**Maintained By**: Andrew (Infrastructure Manager) & Thaddaeus (The Advocate)
**Branch Status**: ✅ Active - Optional Configuration Branch


