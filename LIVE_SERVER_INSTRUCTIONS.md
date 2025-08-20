# 🚀 Live Server Instructions for Varenizer

## ⚠️ **IMPORTANT: Use the Correct File!**

**DO NOT** open `index.html` or any files from the `src/` folder with Live Server. This will cause MIME type errors.

## ✅ **Correct Way to Use Live Server**

### **Step 1: Install Live Server Extension**
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Live Server" by Ritwik Dev
4. Install the extension

### **Step 2: Open the Right File**
1. **Right-click on `static.html`** (NOT `index.html`)
2. Select **"Open with Live Server"**
3. Your browser will open automatically
4. The app will work perfectly!

## 🔍 **Why This Happens**

- **`index.html`** - Contains React/TypeScript imports that need a build process
- **`static.html`** - Self-contained HTML file with embedded React code
- **Live Server** - Simple HTTP server that can't process TypeScript/React files

## 📁 **File Structure for Different Use Cases**

| Use Case | File to Open | How to Run |
|----------|--------------|------------|
| **Live Server (VS Code)** | `static.html` | Right-click → "Open with Live Server" |
| **Development Server** | `src/main.tsx` | `npm run dev` |
| **Production Build** | `dist/index.html` | `npm run build && npm run preview` |
| **Deployment** | `dist/` folder | Upload to Netlify/Vercel/GitHub Pages |

## 🚨 **Common Errors & Solutions**

### **Error: "Failed to load module script"**
- **Cause**: Opening `index.html` with Live Server
- **Solution**: Use `static.html` instead

### **Error: "404 for manifest.json"**
- **Cause**: Live Server can't find assets
- **Solution**: Use `static.html` (has embedded favicon)

### **Error: "MIME type application/octet-stream"**
- **Cause**: Live Server serving TypeScript files
- **Solution**: Use `static.html` (pure HTML)

## 🎯 **Quick Test**

1. **Right-click `static.html`**
2. **"Open with Live Server"**
3. **App loads instantly** ✅
4. **File upload works** ✅
5. **Scanning works** ✅
6. **Theme switching works** ✅

## 🌐 **Alternative: Use Development Server**

If you prefer the full React development experience:

```bash
npm run dev
```

This will open the app at `http://localhost:5173` with hot reload.

## 📱 **Live Server Benefits**

- ✅ **Instant loading** - No build process
- ✅ **Perfect for testing** - Quick iterations
- ✅ **No dependencies** - Works offline
- ✅ **VS Code integration** - Seamless workflow

---

## 🎉 **Summary**

**For Live Server: Use `static.html`**  
**For Development: Use `npm run dev`**  
**For Production: Use `npm run build`**

**Your app works perfectly with Live Server when you use the right file!** 🚀
