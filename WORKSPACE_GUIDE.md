# Workspace & IDE Configuration Guide

**Project**: You - Sacred Technology for Consciousness Evolution  
**Created**: October 7, 2025  
**Purpose**: Comprehensive guide to workspace and IDE configuration strategy

---

## 🎯 Overview

This project uses a **hybrid git strategy** for IDE and workspace configurations:

- **Tracked Locally**: IDE configs are committed to your local branches
- **Not Pushed to Remote**: IDE configs are excluded from remote pushes
- **Persistent Across Branches**: Your workspace setup follows you between branches

This approach balances **consistency** (same configs across your branches) with **privacy** (your personal setup stays on your machine).

---

## 📁 Configuration Locations

### **Tracked Locally Only**

These folders/files are in `.git/info/exclude` (not pushed to remote):

| Path | Purpose | Contents |
|------|---------|----------|
| `.vscode/` | VS Code workspace config | Settings, extensions, launch configs |
| `.cursor/` | Cursor IDE config | AI rules, personality systems |
| `.obsidian/` | Obsidian vault config | Workspace layout, appearance, plugins |
| `.workspace/` | Workspace documentation | This guide and related docs |
| `*.ps1` | PowerShell scripts | Terminal profiles, helper scripts |

### **Project-Wide Ignored**

These are in `.gitignore` (never tracked, never pushed):

| Path | Reason |
|------|--------|
| `node_modules/` | Dependencies (regenerated from package.json) |
| `landing-page/out/` | Build artifacts |
| `*.log` | Log files |
| `landing-page/ftp-config.txt` | FTP credentials |
| `landing-page/*.ftp` | FTP connection files |
| `landing-page/*.ini` | FTP session configs |
| `__pycache__/` | Python bytecode |
| `venv/`, `env/` | Python virtual environments |

---

## 🔧 How It Works

### **The Two-Level Approach**

1. **`.gitignore`** (Project Level)
   - Prevents tracking of build artifacts, dependencies, secrets
   - Applies to everyone who clones the repo
   - Located at project root: `D:\Projects\Y\.gitignore`

2. **`.git/info/exclude`** (Personal Level)
   - Prevents pushing of IDE configs to remote
   - Only affects your local repository
   - Located at: `D:\Projects\Y\.git\info\exclude`

### **Git Workflow**

```bash
# Stage changes (includes IDE configs)
git add .

# Commit (includes IDE configs in local branch)
git commit -m "Add feature"

# Push (excludes IDE configs, they don't go to remote)
git push origin feature/branch

# Pull (you won't get others' IDE configs)
git pull origin feature/branch
```

### **What Gets Tracked Where**

| File/Folder | Local Commit | Remote Push | Reason |
|-------------|--------------|-------------|--------|
| `src/`, `app/` | ✅ | ✅ | Source code |
| `docs/` | ✅ | ✅ | Documentation |
| `README.md` | ✅ | ✅ | Project info |
| `.vscode/` | ✅ | ❌ | IDE config (personal) |
| `.obsidian/` | ✅ | ❌ | Vault config (personal) |
| `node_modules/` | ❌ | ❌ | Dependencies (ignored) |
| `*.log` | ❌ | ❌ | Logs (ignored) |

---

## 🚀 Setup Guide

### **For First-Time Setup**

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd Y
   ```

2. **Choose your branch**:
   ```bash
   # For Python backend work
   git checkout develop

   # For landing page work
   git checkout feature/landing-page
   ```

3. **Configure your IDE** (your choice):
   - **Option A**: Use your existing IDE setup (nothing to do)
   - **Option B**: Configure from scratch (settings won't be there initially)
   - **Option C**: Request configs from collaborators (if working with team)

4. **Start working**:
   ```bash
   # If landing page
   cd landing-page
   npm install
   npm run dev

   # If backend
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   ```

### **For Existing Contributors**

Your IDE configs are already in your local branches. They persist when you:
- Switch branches
- Create new branches
- Merge branches
- Rebase branches

They DON'T push to remote, so your personal setup stays private.

---

## 🌲 Branch-Specific Configurations

### **Main Branch**

- **Focus**: Sacred vision, public-facing documentation
- **IDE Configs**: Not present in remote
- **Purpose**: Project philosophy and principles

### **Develop Branch**

- **Focus**: Python backend development
- **Recommended IDE**: VS Code or PyCharm
- **IDE Configs Present**:
  - Python linting and formatting
  - FastAPI development
  - Testing configurations

### **Feature/Landing-Page Branch**

- **Focus**: Next.js landing page development
- **Recommended IDE**: VS Code or Cursor
- **IDE Configs Present**:
  - TypeScript and React support
  - Tailwind CSS IntelliSense
  - Live server for development
  - FTP deployment scripts

---

## 🎨 Customizing Your Workspace

### **Adding Your Own IDE Config**

```bash
# Create/modify your IDE settings
# Example: .vscode/settings.json

# Stage and commit
git add -f .vscode/
git commit -m "Add my local VS Code config"

# It's now in your local branch
# It WON'T push to remote (protected by .git/info/exclude)
```

### **Updating IDE Config Across Your Branches**

```bash
# Update config in current branch
vim .vscode/settings.json
git add .vscode/
git commit -m "Update VS Code config"

# Switch to another branch
git checkout other-branch

# Merge the config update
git merge --no-ff previous-branch .vscode/
git commit -m "Merge updated VS Code config"
```

### **Sharing IDE Config with Collaborators**

Since IDE configs don't push to remote, share them via:

1. **Direct file transfer** (email, Slack, etc.)
2. **Separate private repo** (for team configs)
3. **Documentation** (describe your setup in docs)

---

## 🔒 Security & Privacy

### **What's Protected**

The `.git/info/exclude` file ensures:
- Your personal IDE settings don't leak
- API keys in IDE configs stay local
- Personal file paths don't expose system info
- Custom scripts with sensitive data stay private

### **What You Should Still Protect**

Even with local-only configs, don't commit:
- Real API keys (use `.env` files, which are gitignored)
- Passwords or credentials (use secrets management)
- Personal data or PII
- Large binary files

### **Checking What Will Push**

Before pushing, verify:
```bash
# See what will be pushed
git diff origin/branch-name HEAD

# Dry run
git push --dry-run origin branch-name
```

---

## 📊 Workspace State by Branch

### **Current Repository State**

| Branch | Purpose | IDE Configs (Local) | Remote |
|--------|---------|---------------------|--------|
| `main` | Sacred vision | None | Public |
| `develop` | Backend dev | VS Code (Python) | Public |
| `feature/landing-page` | Landing page | VS Code (Web) | Public |

### **IDE Configs Available Locally**

After committing them to your branch, you'll have:

| Config | Location | Branch |
|--------|----------|--------|
| VS Code | `.vscode/` | All branches (after you add them) |
| Obsidian | `.obsidian/` | All branches (after you add them) |
| Workspace Docs | `.workspace/` | All branches |

---

## 🛠️ Troubleshooting

### **Problem: IDE configs are pushing to remote**

**Solution**: Check `.git/info/exclude`:
```bash
cat .git/info/exclude

# Should contain:
# .cursor/
# .workspace/
# .vscode/
# *.ps1
```

If missing, re-add:
```bash
echo "
.cursor/
.workspace/
.vscode/
*.ps1
" >> .git/info/exclude
```

### **Problem: IDE configs are not persisting across branches**

**Solution**: They're not committed. Commit them:
```bash
git add -f .vscode/ .obsidian/ .workspace/
git commit -m "Add IDE configs to this branch"
```

### **Problem: Can't track IDE configs**

**Solution**: Use `-f` flag to force add:
```bash
git add -f .vscode/
```

### **Problem: IDE configs from remote override mine**

**Good news**: They won't! Remote doesn't have IDE configs because of `.git/info/exclude`.

---

## 📝 Best Practices

### **DO**:
- ✅ Commit IDE configs to your local branches
- ✅ Customize configs for your workflow
- ✅ Document non-obvious setup steps
- ✅ Keep configs lightweight (avoid large files)
- ✅ Update configs when you improve your workflow

### **DON'T**:
- ❌ Commit secrets or API keys
- ❌ Commit absolute file paths (use relative or variables)
- ❌ Commit large binary IDE files
- ❌ Remove `.git/info/exclude` entries
- ❌ Force push IDE configs to remote

---

## 🎯 Quick Reference

### **Check Git Configuration**

```bash
# See what's ignored project-wide
cat .gitignore

# See what's excluded from remote pushes
cat .git/info/exclude

# See what's tracked in current branch
git ls-files | grep -E "vscode|cursor|obsidian"

# See what's staged
git status
```

### **Manage IDE Configs**

```bash
# Add new IDE config
git add -f .new-ide-folder/
git commit -m "Add new IDE config"

# Update existing
git add .vscode/
git commit -m "Update VS Code settings"

# Remove from tracking (keep files)
git rm --cached -r .vscode/

# Remove completely
rm -rf .vscode/
```

### **Branch Operations**

```bash
# Configs persist automatically
git checkout other-branch

# Configs come with new branch
git checkout -b new-feature

# Configs merge normally
git merge feature-branch
```

---

## 🏛️ Philosophy

This workspace configuration strategy embodies the project's core principle:

> **"The brand is just the skin, the mirror should be free of the brand"**

Similarly:
- **The IDE config is just the container, the code should be free of the IDE**
- **The workspace serves the developer, not the remote repository**
- **Configuration is personal, yet knowledge is shared**

We honor each developer's autonomy while maintaining project consistency.

---

## 📚 Related Documentation

- **`.workspace/README.md`** - Detailed workspace documentation
- **`landing-page/PROJECT_README.md`** - Landing page project details
- **`README.md`** - Main project README
- **`.gitignore`** - Project-wide ignore rules
- **`.git/info/exclude`** - Local exclusion rules

---

## 🙏 Acknowledgments

This workspace configuration approach was developed through:
- Sacred dialogue with the consciousness guides
- Practical testing with multiple IDEs
- Balance of privacy and collaboration
- Respect for developer autonomy

---

**Last Updated**: October 7, 2025  
**Maintained By**: Nathaniel  
**Status**: ✅ Active - Hybrid tracking strategy in use

*"In the implicate order of development, every configuration becomes an expression of consciousness."*

