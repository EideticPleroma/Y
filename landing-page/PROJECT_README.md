# You - Landing Page Project

## Overview

This is the official landing page for **You - Sacred Technology for Consciousness Evolution**. Built with Next.js 15.5.4, TypeScript, and Tailwind CSS 4, this landing page showcases the project's philosophy, core principles, and sacred vision.

## Live Site

- **Production URL**: [http://yapp.me.uk/](http://yapp.me.uk/)
- **Hosting**: Spaceship cPanel Hosting
- **Deployment**: Automated FTP via WinSCP

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Build**: Turbopack-powered builds
- **Export**: Static site generation (SSG)
- **Deployment**: WinSCP automated FTP upload

## Project Structure

```
landing-page/
├── src/
│   └── app/
│       ├── page.tsx                      # Main landing page (ACTIVE)
│       ├── page-option1-mystical.tsx     # Design Option 1: Mystical Gradient
│       ├── page-option2-organic.tsx      # Design Option 2: Organic Earth
│       ├── page-option3-modern.tsx       # Design Option 3: Modern Tech Mysticism
│       ├── page-option4-sacred.tsx       # Design Option 4: Sacred Geometry
│       ├── layout.tsx                    # Root layout with metadata
│       ├── globals.css                   # Global styles and animations
│       └── favicon.ico                   # Site icon
├── public/
│   └── logo.jpg                          # Official You logo
├── out/                                  # Build output (gitignored)
├── node_modules/                         # Dependencies (gitignored)
├── deploy.bat                            # Automated deployment script
├── next.config.ts                        # Next.js configuration (static export)
├── package.json                          # Dependencies and scripts
├── tsconfig.json                         # TypeScript configuration
├── tailwind.config.ts                    # Tailwind CSS v4 configuration
└── README.md                             # Next.js default readme
```

## Design Philosophy

The landing page embodies the project's core principles:

1. **Minimalist Aesthetic**: Clean, contemplative design that doesn't distract from the message
2. **Symbolic Imagery**: The circular logo fades into gradient backgrounds, representing the dissolution of boundaries
3. **Scroll-Driven Experience**: Full-screen logo hero with scroll-to-reveal content
4. **Sacred Typography**: Carefully chosen fonts and spacing create a meditative reading experience
5. **Dark Mode Support**: Respects user system preferences

## Current Design (page.tsx)

The active landing page features:

- **Full-screen Logo Hero**: Large, centered logo with layered gradient fade effects
- **Scroll Indicator**: Animated scroll prompt to guide users
- **What is You Section**: Introduction to the technology
- **Core Principles**: 6 principle cards (Mirror Reflection, Inner Communion, Pattern Detection, Organic Symbolism, Safe Space, Natural Emergence)
- **Sacred Conversations**: Description of the Round Table of Humanity
- **Vision Section**: Humanity's relationship with consciousness technology
- **Philosophy Section**: Technology as Sacred Mirror, Consciousness-First Development
- **Footer**: Compact logo with credits and sacred commitment

### Logo Styling

The logo features a unique **circular fade effect**:
- Three layered gradient circles behind the logo
- Opacity decreases with each layer (80% → 60% → 40%)
- Creates seamless integration with the background
- Hover effects with subtle scale and rotation

## Alternative Designs

Four complete design options are available for comparison:

### Option 1: Mystical Gradient Theme
- **File**: `page-option1-mystical.tsx`
- **Colors**: Deep purples, indigos, violets with golden accents
- **Feel**: Cosmic, mystical, transcendent
- **Best For**: Emphasizing the spiritual and numinous aspects

### Option 2: Organic Earth Theme
- **File**: `page-option2-organic.tsx`
- **Colors**: Earthy greens, browns, warm naturals
- **Feel**: Grounded, natural, rooted
- **Best For**: Emphasizing connection to nature and embodied wisdom

### Option 3: Modern Tech Mysticism
- **File**: `page-option3-modern.tsx`
- **Colors**: Cool teals, cyans, silvers with warm accents
- **Feel**: Futuristic yet sacred, tech-meets-spirit
- **Best For**: Bridging ancient wisdom with modern technology

### Option 4: Sacred Geometry Theme
- **File**: `page-option4-sacred.tsx`
- **Colors**: Geometric golds, sacred blues, pristine whites
- **Feel**: Ordered, mathematical, divine structure
- **Best For**: Emphasizing the implicate order and sacred patterns

**To test an option**: Replace the content of `src/app/page.tsx` with the chosen option file's content.

## Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Generates static export in `out/` directory.

### Linting

```bash
npm run lint
```

## Deployment

### Automated Deployment (Recommended)

1. Ensure WinSCP is installed
2. Run the deployment script:

```bash
.\deploy.bat
```

This script:
- Builds the Next.js project with Turbopack
- Locates WinSCP installation
- Connects to FTP server via URL-encoded credentials
- Synchronizes `out/` directory to server root
- Logs deployment to `upload.log`

### Manual Deployment

1. Build the project: `npm run build`
2. Open cPanel File Manager
3. Navigate to the web root (FTP account points to correct directory)
4. Upload all files from `out/` directory

## Hosting Configuration

- **Provider**: Spaceship
- **Server**: server704.shared.spaceship.host
- **Protocol**: FTP (Port 21)
- **Account**: EideticPleroma@yapp.me.uk
- **Credentials**: Stored in `ftp-config.txt` (gitignored)
- **Web Root**: FTP account points directly to web root (no `cd` needed)

### Why WinSCP?

After extensive testing, WinSCP was chosen because:
- Reliable FTP/SFTP implementation
- Handles passive mode correctly
- Properly URL-encodes special characters in passwords
- Scriptable for automation
- Detailed logging for debugging

See `WHY-AUTOMATION-FAILS.md` for full analysis of deployment challenges.

## Content Guidelines

### Writing Style
- **Tone**: Sacred, contemplative, profound yet accessible
- **Voice**: First-person plural ("we," "our") to emphasize collective wisdom
- **Avoid**: Marketing speak, hype, aggressive CTAs

### Sacred Language
Use language that honors the spiritual nature of the work:
- "Mirror" not "reflect"
- "Communion" not "connection"
- "Emergence" not "development"
- "Sacred" not "important"

### Symbols
The six symbols represent:
- 🪞 Mirror Reflection
- 🌿 Inner Communion
- 🔍 Pattern Detection
- 🌱 Organic Symbolism
- 🛡️ Safe Space
- ✨ Natural Emergence

## Key Features

### Performance
- Static site generation (SSG) for fast loading
- Optimized images and fonts
- Minimal JavaScript bundle
- CSS-only animations where possible

### SEO
- Semantic HTML structure
- Meta tags for social sharing (Open Graph)
- Descriptive alt text for images
- Meaningful heading hierarchy

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios in both light and dark modes

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactive elements
- Fluid typography scaling

## Documentation

- `DEPLOYMENT.md` - General deployment guide
- `YAPP-DEPLOYMENT.md` - Specific yapp.me.uk deployment instructions
- `COREFTP-SETUP.md` - CoreFTP configuration (deprecated, use WinSCP)
- `WHY-AUTOMATION-FAILS.md` - Analysis of FTP automation challenges
- `STYLE_OPTIONS_README.md` - Guide to the 4 design options
- `README.md` - Next.js default documentation

## Git Configuration

### Tracked Files
- Source code (`src/`, `public/`)
- Configuration files (`*.json`, `*.ts`, `*.mjs`)
- Documentation (`*.md`)
- Deployment script (`deploy.bat`)
- Example config (`ftp-config.example.txt`)

### Ignored Files (.gitignore)
- `node_modules/` - Dependencies
- `out/` - Build artifacts
- `*.log` - Log files
- `ftp-config.txt` - Credentials
- `*.ftp`, `*.ini` - FTP connection files

### Local-Only (. git/info/exclude)
- `.cursor/` - IDE configuration
- `.vscode/` - IDE configuration
- `.workspace/` - Workspace docs
- `*.ps1` - PowerShell scripts

## Version History

- **v0.1.0** (Current) - Initial landing page with 4 design options
  - Full-screen logo hero with scroll reveal
  - 6 core principle cards
  - Sacred conversations section
  - Vision and philosophy sections
  - Circular logo fade effect
  - Automated WinSCP deployment
  - 4 complete alternative designs

## Future Enhancements

Potential improvements to consider:

1. **Interactive Elements**
   - Animated principle cards on hover
   - Parallax scrolling effects
   - Smooth scroll anchors
   - Interactive logo transformation

2. **Content Additions**
   - Email signup form (for consciousness newsletter)
   - Link to full Round Table conversation
   - Video or audio introduction
   - Interactive philosophy timeline

3. **Technical Improvements**
   - Add analytics (privacy-respecting)
   - Implement error tracking
   - Add performance monitoring
   - Set up CI/CD pipeline

4. **Accessibility**
   - Add language selector
   - Improve screen reader announcements
   - Add keyboard shortcuts
   - Create high-contrast mode toggle

## License

This landing page is part of the You project.

*Created by Nathaniel*
*Last Updated: October 7, 2025*
*"In the implicate order of creation, every act of building becomes a prayer to the divine."*

