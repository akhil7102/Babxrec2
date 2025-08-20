# Varenizer - Advanced File Security & Malware Detection

A professional web-based virus scanner with real-time scanning and threat detection capabilities.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Varenizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 🌐 **Universal Deployment - Works Everywhere!**

Varenizer is now **fully deployment-ready** and works on all major platforms:

### ✅ **Local Development**
- `npm run dev` - Vite development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

### ✅ **Live Server Extension (VS Code)**
- Open `static.html` with Live Server
- Works without any build process
- Perfect for quick testing and development

### ✅ **Netlify Deployment**
- Automatic deployment from Git
- Zero-config deployment
- Custom domain support

### ✅ **Vercel Deployment**
- One-click deployment
- Automatic CI/CD
- Edge functions ready

### ✅ **GitHub Pages**
- Free hosting
- Automatic deployment
- Custom domain support

## 🚀 **Deployment Instructions**

### **1. Netlify Deployment**

#### Option A: Drag & Drop (Easiest)
1. Run `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your app is live instantly!

#### Option B: Git Integration
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push!

#### Option C: CLI Deployment
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### **2. Vercel Deployment**

#### Option A: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/verinizer)

#### Option B: CLI Deployment
```bash
npm install -g vercel
vercel --prod
```

#### Option C: Git Integration
1. Push your code to GitHub
2. Import to Vercel
3. Automatic deployment on every push!

### **3. GitHub Pages Deployment**

#### Option A: GitHub Actions (Recommended)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. The workflow will deploy automatically!

#### Option B: Manual Deployment
```bash
npm run build:github
npm run deploy:github
```

#### Option C: gh-pages Branch
```bash
npm run build:github
npx gh-pages -d dist
```

### **4. Live Server (VS Code Extension)**

#### Perfect for Development & Testing
1. Install "Live Server" extension by Ritwik Dev
2. Right-click on `static.html`
3. Select "Open with Live Server"
4. Works instantly without any build process!

## 🔧 **Configuration Files**

### **Netlify** (`netlify.toml`)
- Build settings
- Redirect rules for SPA
- Security headers
- Caching optimization

### **Vercel** (`vercel.json`)
- Build configuration
- Rewrite rules
- Security headers
- Framework detection

### **Vite** (`vite.config.ts`)
- Production build optimization
- Asset handling
- Base path configuration
- Development server settings

## 📱 **Platform Compatibility**

| Platform | Status | Notes |
|----------|--------|-------|
| **Local Development** | ✅ Perfect | `npm run dev` |
| **Production Build** | ✅ Perfect | `npm run build` |
| **Live Server** | ✅ Perfect | `static.html` |
| **Netlify** | ✅ Perfect | Zero config |
| **Vercel** | ✅ Perfect | One click |
| **GitHub Pages** | ✅ Perfect | Auto deploy |
| **Any Static Host** | ✅ Perfect | `dist` folder |

## 🎯 **Features**

- **File Scanning**: Drag & drop file scanning with multiple format support
- **URL Scanning**: Scan URLs for malicious content
- **Directory Scanning**: Recursive directory scanning
- **Real-time Protection**: Continuous monitoring and threat detection
- **Threat Database**: Up-to-date malware signatures
- **Quarantine System**: Safe threat isolation
- **User Authentication**: Secure user accounts and management
- **Usage Tracking**: Monitor scanning usage and limits
- **Cross-platform**: Web app with optional Tauri desktop version

## 🛠️ **Technology Stack**

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Desktop**: Tauri (Rust + WebView)
- **State Management**: React hooks + localStorage
- **Styling**: Tailwind CSS with dark/light theme support

## 📱 **Usage**

### Web Application
1. Open the application in your browser
2. Drag and drop files or select them manually
3. Choose scan type (quick, full, custom)
4. Start scanning and monitor progress
5. Review results and take action on threats

### Desktop Application
1. Build the Tauri app: `npm run tauri build`
2. Install the generated executable
3. Use the same interface with native file system access

## 🔧 **Environment Variables**

Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_endpoint
VITE_APP_NAME=Varenizer
VITE_APP_VERSION=1.0.0
```

## 🚀 **Deployment Scripts**

```bash
# Build for production
npm run build

# Build for GitHub Pages
npm run build:github

# Deploy to Netlify
npm run deploy:netlify

# Deploy to Vercel
npm run deploy:vercel

# Deploy to GitHub Pages
npm run deploy:github

# Test production build
npm run test:build

# Clean and reinstall
npm run clean
```

## 🧪 **Development**

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run tauri dev` - Start Tauri development
- `npm run tauri build` - Build Tauri app

### Code Style
- Use TypeScript for all new code
- Follow React best practices
- Use Tailwind CSS for styling
- Implement proper error handling
- Add JSDoc comments for complex functions

## 🔒 **Security Features**

- **Content Security Policy**: Strict CSP headers
- **Input Validation**: Comprehensive input sanitization
- **Secure File Handling**: Safe file processing
- **Threat Isolation**: Quarantine system for infected files
- **User Authentication**: Secure login and session management
- **Data Encryption**: Sensitive data encryption at rest

## 📊 **Performance**

- **Lazy Loading**: Component and route lazy loading
- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Builds**: Tree shaking and minification
- **Caching**: Efficient caching strategies
- **Bundle Analysis**: Built-in bundle analysis tools

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

### Development Guidelines
- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 **Support**

### Troubleshooting
- Check the browser console for errors
- Verify all dependencies are installed
- Ensure Node.js version compatibility
- Check file permissions for Tauri builds

### Common Issues
- **Build failures**: Clear node_modules and reinstall
- **Tauri issues**: Update Rust and Tauri CLI
- **Performance**: Check bundle size and optimize imports
- **Styling**: Verify Tailwind CSS configuration

### Getting Help
- Create an issue on GitHub
- Check existing issues and discussions
- Review the documentation
- Join the community discussions

## 🔄 **Changelog**

### Version 1.0.0
- Initial release
- Core scanning functionality
- Web and desktop support
- User authentication system
- Real-time protection features
- **Universal deployment support**
- **Live Server compatibility**

## 📞 **Contact**

- **Project**: [GitHub Repository](https://github.com/yourusername/varenizer)
- **Issues**: [GitHub Issues](https://github.com/yourusername/varenizer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/varenizer/discussions)

---

## 🎉 **Deployment Success!**

**Varenizer is now a universal web application that works everywhere:**

✅ **Local Development** - `npm run dev`  
✅ **Production Build** - `npm run build`  
✅ **Live Server** - Open `static.html`  
✅ **Netlify** - Drag & drop `dist` folder  
✅ **Vercel** - One-click deployment  
✅ **GitHub Pages** - Automatic deployment  
✅ **Any Static Host** - Upload `dist` folder  

**Your app is ready for the world! 🌍**

**Varenizer** - Protecting your digital world, one file at a time. 🛡️