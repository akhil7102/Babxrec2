import React, { useState, useEffect } from 'react';

// Simple virus scanner component
function VirusScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isScanning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 2, 100));
      }, 100);
    } else if (progress >= 100 && isScanning) {
      setTimeout(() => {
        setIsScanning(false);
        setProgress(0);
        setResults({
          totalFiles: files.length,
          threatsFound: Math.floor(Math.random() * files.length),
          cleanFiles: files.length - Math.floor(Math.random() * files.length)
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isScanning, progress, files.length]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []);
    setFiles(uploadedFiles);
    setResults(null);
  };

  const startScan = () => {
    if (files.length > 0) {
      setIsScanning(true);
      setProgress(0);
      setResults(null);
    }
  };

  const newScan = () => {
    setFiles([]);
    setResults(null);
    setProgress(0);
    setIsScanning(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className={`${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} min-h-screen`}>
        {/* Header */}
        <header className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Varenizer
                </h1>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' 
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
            <p className="mt-2 text-sm opacity-75">
              Advanced File Security & Malware Detection
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* File Upload Area */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl p-8 border-2 border-dashed ${
            isDarkMode ? 'border-slate-600' : 'border-slate-300'
          } text-center mb-8`}>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Upload Files for Scanning</h2>
            <p className="mb-6 opacity-75">Drag and drop files here or click to browse</p>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className={`inline-block px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white'
                  : 'bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-white'
              }`}
            >
              Choose Files
            </label>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl p-6 mb-8`}>
              <h3 className="text-lg font-semibold mb-4">Selected Files ({files.length})</h3>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                    isDarkMode ? 'bg-slate-700' : 'bg-white'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm opacity-75">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scan Controls */}
          {files.length > 0 && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl p-6 mb-8`}>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={startScan}
                  disabled={isScanning}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isScanning
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105'
                  } ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
                      : 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white'
                  }`}
                >
                  {isScanning ? 'Scanning...' : 'Start Scan'}
                </button>
                <button
                  onClick={newScan}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-slate-600 hover:bg-slate-500 text-white'
                      : 'bg-slate-500 hover:bg-slate-600 text-white'
                  }`}
                >
                  New Scan
                </button>
              </div>
            </div>
          )}

          {/* Scan Progress */}
          {isScanning && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl p-6 mb-8`}>
              <h3 className="text-lg font-semibold mb-4">Scanning in Progress...</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center text-sm opacity-75">{progress}% Complete</p>
            </div>
          )}

          {/* Scan Results */}
          {results && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl p-6`}>
              <h3 className="text-lg font-semibold mb-4">Scan Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} p-4 rounded-lg text-center`}>
                  <div className="text-2xl font-bold text-blue-500">{results.totalFiles}</div>
                  <div className="text-sm opacity-75">Files Scanned</div>
                </div>
                <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} p-4 rounded-lg text-center`}>
                  <div className="text-2xl font-bold text-red-500">{results.threatsFound}</div>
                  <div className="text-sm opacity-75">Threats Detected</div>
                </div>
                <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} p-4 rounded-lg text-center`}>
                  <div className="text-2xl font-bold text-green-500">{results.cleanFiles}</div>
                  <div className="text-sm opacity-75">Clean Files</div>
                </div>
              </div>
              {results.threatsFound > 0 ? (
                <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-800 font-medium">⚠️ Threats detected! Please review and take action.</p>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-medium">✅ All files are clean! No threats detected.</p>
                </div>
              )}
            </div>
          )}

          {/* Features Section */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl p-8 mt-8`}>
            <h2 className="text-2xl font-bold text-center mb-6">Why Choose Varenizer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Advanced Detection</h3>
                <p className="text-sm opacity-75">State-of-the-art malware detection algorithms</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm opacity-75">Quick scanning with real-time progress updates</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Secure & Private</h3>
                <p className="text-sm opacity-75">Your files are processed securely and privately</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} mt-16 py-8`}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="opacity-75">
              © 2024 Varenizer. Advanced File Security & Malware Detection.
            </p>
            <p className="text-sm mt-2 opacity-50">
              Protecting your digital world, one file at a time.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default VirusScanner;
