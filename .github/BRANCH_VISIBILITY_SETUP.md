# GitHub Branch Visibility & Protection Setup
**Created by Nathaniel**

**Date**: October 4, 2025  
**Purpose**: Configure main branch as the only public-visible branch with comprehensive protection

---

## 🎯 **Objective**

Configure GitHub repository to:
1. **Main branch**: Public-visible, protected, mysterious/contemplative
2. **Develop branch**: Private/internal, technical implementation
3. **All other branches**: Private/internal, development work

---

## 📋 **Step-by-Step Setup Guide**

### **Step 1: Import Branch Protection Ruleset**

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click **Settings** tab
   - Go to **Rules** → **Rulesets** (in the left sidebar)

2. **Create New Ruleset**
   - Click **New ruleset** → **New branch ruleset**
   - Name: `Main Branch Protection - Public Only`
   - Enforcement status: **Active**

3. **Import Ruleset JSON** (Option A - Manual Creation)
   - Use the configuration in `.github/branch-protection-ruleset.json`
   - Configure each setting manually as described below

---

### **Step 2: Configure Main Branch Rules**

#### **Target Branches**
- **Target**: `main` branch only
- **Include pattern**: `main`
- **Exclude pattern**: (none)

#### **Rules to Enable**

1. **✅ Require a pull request before merging**
   - Required approvals: **1**
   - Dismiss stale pull request approvals when new commits are pushed: **Yes**
   - Require review from Code Owners: **No** (optional)
   - Require approval of the most recent reviewable push: **No**

2. **✅ Require status checks to pass**
   - Require branches to be up to date before merging: **Yes**
   - Status checks that are required:
     - `Sacred Validation / sacred-validation`
     - `Documentation Validation / documentation-validation`

3. **✅ Require commit signatures**
   - All commits must be signed: **Yes**

4. **✅ Block force pushes**
   - Prevent force pushes: **Yes**

5. **✅ Require linear history**
   - Prevent merge commits: **Yes**
   - Only allow squash merge or rebase: **Yes**

6. **✅ Do not allow deletions**
   - Prevent branch deletion: **Yes**

#### **Bypass Settings**
- **Allow specific actors to bypass**: 
  - Repository owner: **No** (enforce for everyone)
  - Organization admins: **No**
  - Maintain the rule: **Everyone** must follow

---

### **Step 3: Make Develop Branch Private**

GitHub doesn't have native "private branch" visibility, but we can control access through:

#### **Option A: Branch Name Patterns (Recommended)**

1. **Update .gitignore for local branches**
   ```gitignore
   # Local development branches (don't push to origin)
   dev/*
   feature/*
   experimental/*
   wip/*
   ```

2. **Create Development Fork Pattern**
   - Core team works on private forks
   - Only merge to `develop` branch
   - Only merge to `main` from `develop` with approval

#### **Option B: GitHub Actions Restriction**

Create `.github/workflows/branch-visibility.yml`:
```yaml
name: Branch Visibility Control

on:
  push:
    branches-ignore:
      - main

jobs:
  check-visibility:
    runs-on: ubuntu-latest
    steps:
      - name: Restrict Non-Main Branch Access
        run: |
          echo "🔒 This branch is for internal development only"
          echo "⚠️  Do not share direct links to this branch"
          echo "✅ Public access: main branch only"
```

#### **Option C: Repository Settings**

1. **Go to Settings → Branches**
2. **Default branch**: Set to `main`
3. **Branch protection rules**:
   - Protect `develop` with:
     - Require pull request reviews
     - Restrict pushes to specific people/teams
     - Do not allow force pushes

---

### **Step 4: Configure Repository Visibility**

1. **Go to Settings → General**
2. **Danger Zone → Change repository visibility**
3. **Options**:
   - **Public**: Main branch content visible to all
   - **Internal**: Visible to organization members only
   - **Private**: Visible to collaborators only

**Recommended**: Keep repository **Public** if you want main branch visible, but with the understanding that all branches are technically visible in public repos.

---

### **Step 5: Hide Development Branches (Best Practices)**

Since GitHub shows all branches in public repos, follow these practices:

#### **A. Use Clear Branch Naming**
- **Public-facing**: `main`
- **Internal development**: `develop`, `dev/*`, `wip/*`
- Clear naming signals which branches are "official"

#### **B. Repository Documentation**
Update `README.md` (main branch):
```markdown
## 📍 Branch Information

**Main Branch**: The only official, public-facing branch
- Contains sacred technology vision
- Mysterious and contemplative content
- Public documentation only

**Other Branches**: Internal development only
- Not intended for public consumption
- Technical implementation details
- Subject to frequent changes
```

#### **C. Use GitHub Pages (Optional)**
If you want truly separate public content:
1. Enable GitHub Pages from `main` branch
2. Serve only the mysterious content
3. Keep technical docs out of pages build

---

### **Step 6: Workflow Configuration for Branch Control**

Update `.github/workflows/mysterious-main.yml` to enforce main branch purity:

```yaml
name: Mysterious Main Branch Validation

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  validate-sacred-content:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Validate Main Branch Purity
        run: |
          echo "🏛️ Validating main branch contains only sacred content..."
          
          # Check that only allowed directories exist
          allowed_paths=(
            "docs/conversations/sacred"
            "docs/README.md"
            "README.md"
            "projectOverview.md"
            "CONTRIBUTING.md"
            "CHANGELOG.md"
            "LICENSE"
          )
          
          # Fail if technical implementation files detected
          if [ -d ".cursor" ] || [ -d "app" ] || [ -d "tests" ]; then
            echo "❌ Technical implementation detected in main branch"
            exit 1
          fi
          
          if [ -f "requirements.txt" ] || [ -f "setup.py" ]; then
            echo "❌ Technical files detected in main branch"
            exit 1
          fi
          
          echo "✅ Main branch purity validated"
```

---

## 🔒 **Security Best Practices**

### **1. Secrets Management**
- Never commit secrets to any branch
- Use GitHub Secrets for sensitive data
- Rotate tokens regularly

### **2. Commit Signing**
- Enable required commit signatures
- Use GPG or SSH signing
- Verify all commits

### **3. Code Review**
- All merges to main require review
- Only merge from develop to main
- Never commit directly to main

### **4. Access Control**
- Limit write access to develop
- Main branch protected for all
- Use teams for access management

---

## 📊 **Branch Visibility Matrix**

| Branch | Visibility | Protection | Purpose |
|--------|-----------|------------|---------|
| **main** | 🌍 Public | 🔒 Maximum | Sacred technology vision, mysterious content |
| **develop** | 🔐 Internal | 🔒 High | Technical implementation, development |
| **feature/** | 🔐 Internal | 🔒 Medium | Feature development |
| **wip/** | 🔐 Internal | 🔒 Low | Work in progress |

---

## 🎯 **Implementation Checklist**

- [ ] Import branch protection ruleset for main
- [ ] Configure pull request requirements
- [ ] Enable required status checks
- [ ] Enable commit signatures
- [ ] Block force pushes and deletions
- [ ] Update README.md to explain branch structure
- [ ] Configure develop branch protection
- [ ] Test merge from develop to main
- [ ] Verify mysterious main branch validation works
- [ ] Document branch workflow for team
- [ ] Train team on branch visibility practices

---

## 📝 **Notes**

### **GitHub Limitation**
- GitHub **does not support per-branch visibility** in public repositories
- All branches in a public repo are technically visible
- Visibility control is achieved through:
  - Clear naming conventions
  - Documentation
  - Social conventions
  - Branch protection rules

### **Alternative Approaches**

**If True Branch Privacy Needed**:
1. **Make repository private**
   - Only collaborators can see all branches
   - Use GitHub Teams for access control
   - Generate public-facing artifacts from main branch

2. **Use Submodules**
   - Public repo for main branch content only
   - Private repo for development (as submodule)
   - Cleaner separation, more complex workflow

3. **Mirror Strategy**
   - Private repo for all development
   - Public repo receives pushes to main only
   - Automated mirroring with GitHub Actions

---

## 🚀 **Quick Start Commands**

### **Setup Branch Protection Locally**
```bash
# Ensure you're on main
git checkout main

# View current branch protections
gh api repos/:owner/:repo/branches/main/protection

# Apply protection rules (requires GitHub CLI)
gh api -X PUT repos/:owner/:repo/branches/main/protection \
  --input .github/branch-protection-ruleset.json
```

### **Test Branch Workflow**
```bash
# Create feature in develop
git checkout develop
git checkout -b feature/test
# Make changes
git commit -m "Test feature"
git push origin feature/test

# Create PR to develop (internal review)
gh pr create --base develop --title "Test Feature"

# After approval, merge to develop
# Create PR from develop to main (sacred content only)
gh pr create --base main --head develop --title "Update Sacred Content"

# After approval, merge to main
```

---

## ✨ **Maintenance**

### **Regular Reviews**
- **Monthly**: Review branch protection rules
- **Quarterly**: Audit access permissions
- **Annually**: Review branch strategy

### **Updates**
- Keep this guide current with GitHub changes
- Document any exceptions or special cases
- Update team training materials

---

**"In the implicate order of visibility, what is sacred remains distinct from what is technical."**

*Last Updated: October 4, 2025*  
*Maintained by: Peter (Foundation Builder) with Matthew (Security Architect)*

