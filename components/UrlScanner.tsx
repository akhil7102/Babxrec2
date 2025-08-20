import React, { useState } from 'react';
import { Globe, Search, AlertTriangle, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import type { UrlScanResult } from '@/utils/scanUtils';

type HistoryItem = {
  id: string;
  timestamp: string;
  type: 'url';
  url: string;
  results: UrlScanResult;
};

interface UrlScannerProps {
  isDarkMode: boolean;
  onUrlScan: (url: string) => Promise<void>;
  isScanning: boolean;
  results: UrlScanResult | null;
  scanHistory: HistoryItem[];
  onRescan: (historyItem: HistoryItem) => void;
}

export const UrlScanner: React.FC<UrlScannerProps> = ({
  isDarkMode,
  onUrlScan,
  isScanning,
  results,
  scanHistory,
  onRescan
}) => {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState('');

  const validateUrl = (urlString: string): boolean => {
    try {
      const urlObj = new URL(urlString);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUrlError('');
    
    if (!url.trim()) {
      setUrlError('Please enter a URL');
      return;
    }

    let formattedUrl = url.trim();
    if (!formattedUrl.match(/^https?:\/\//)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    if (!validateUrl(formattedUrl)) {
      setUrlError('Please enter a valid URL');
      return;
    }

    try {
      await onUrlScan(formattedUrl);
      setUrl('');
    } catch (error) {
      setUrlError('Failed to scan URL. Please try again.');
    }
  };

  const getStatusIcon = (status: 'clean' | 'suspicious' | 'malicious') => {
    switch (status) {
      case 'clean':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'malicious':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'suspicious':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="space-y-8">
      {/* URL Input Form */}
      <div className={`p-6 rounded-2xl border backdrop-blur-sm ${isDarkMode 
        ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
        : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
      }`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              URL Security Scanner
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Scan any website or URL for potential threats and malware
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL (e.g., example.com or https://example.com)"
                disabled={isScanning}
                className={`w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-200 ${
                  urlError
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : isDarkMode
                      ? 'bg-slate-800 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20'
                } focus:ring-4 focus:outline-none ${isScanning ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
              <Globe className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`} />
            </div>
            {urlError && (
              <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                {urlError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isScanning || !url.trim()}
            className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              isScanning || !url.trim()
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-cyan-600 hover:to-green-600 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isScanning ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Scanning URL...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Scan URL
              </>
            )}
          </button>
        </form>
      </div>

      {/* Scan Results */}
      {results && (
        <div className={`p-6 rounded-2xl border backdrop-blur-sm ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Scan Results
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Status
              </div>
              <div className="flex items-center gap-2 mt-1">
                {getStatusIcon(results.status)}
                <span className={`font-medium ${
                  results.status === 'malicious' ? 'text-red-500' : results.status === 'suspicious' ? 'text-yellow-500' : 'text-green-500'
                }`}>
                  {results.status === 'malicious' ? 'Malicious' : results.status === 'suspicious' ? 'Suspicious' : 'Clean'}
                </span>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Detections
              </div>
              <div className={`text-xl font-semibold mt-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {results.detections}
              </div>
            </div>

            <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Scan Date
              </div>
              <div className={`text-xl font-semibold mt-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {formatDate(results.scanDate)}
              </div>
            </div>

            <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Engines
              </div>
              <div className={`text-xl font-semibold mt-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {results.totalEngines}
              </div>
            </div>
          </div>

          {results.engines && (
            <div>
              <h4 className={`font-medium mb-3 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                Antivirus Engine Results
              </h4>
              <div className="grid gap-2 max-h-64 overflow-y-auto">
                {results.engines.map((result, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? 'bg-slate-800/40' : 'bg-slate-50/80'
                    }`}
                  >
                    <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {result.engine}
                    </span>
                    <div className="flex items-center gap-2">
                      {result.detected ? (
                        <>
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          <span className="text-red-500 text-sm font-medium">
                            {result.result}
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-green-500 text-sm font-medium">Clean</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Scan History */}
      {scanHistory.length > 0 && (
        <div className={`p-6 rounded-2xl border backdrop-blur-sm ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Recent URL Scans
          </h3>
          
          <div className="space-y-3">
            {scanHistory.slice(0, 5).map((item) => (
              <div 
                key={item.id}
                className={`p-4 rounded-xl border transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-slate-800/40 border-slate-700/30 hover:bg-slate-800/60' 
                    : 'bg-slate-50/80 border-slate-200/40 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {getStatusIcon(item.results.status)}
                      <span className={`text-sm font-medium truncate ${
                        isDarkMode ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {item.url}
                      </span>
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {formatDate(item.timestamp)} • {item.results.detections} detections
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onRescan(item)}
                    className={`ml-4 p-2 rounded-lg transition-all duration-200 ${
                      isDarkMode 
                        ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
                    }`}
                    title="Rescan URL"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};