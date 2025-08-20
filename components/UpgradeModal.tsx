import React from 'react';
import { X, Crown, Zap, Shield, Star } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  limitType: 'file' | 'url';
  currentUsage: number;
  limit: number;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  limitType,
  currentUsage,
  limit
}) => {
  if (!isOpen) return null;

  const handleUpgrade = (plan: string) => {
    // Redirect to Discord for upgrades
    window.open('https://discord.gg/eDBmRg7Vns', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-2xl mx-4 ${isDarkMode 
        ? 'bg-slate-900 border-slate-700' 
        : 'bg-white border-slate-200'
      } rounded-2xl border shadow-2xl overflow-hidden`}>
        
        {/* Header */}
        <div className={`p-6 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Upgrade Required
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  You've reached your {limitType} scan limit ({currentUsage}/{limit})
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${isDarkMode 
                ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' 
                : 'hover:bg-slate-100 text-slate-500 hover:text-slate-700'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Pro Plan */}
            <div className={`p-4 rounded-xl border-2 border-cyan-500/20 ${isDarkMode 
              ? 'bg-slate-800/50' 
              : 'bg-cyan-50/50'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-cyan-500" />
                <h3 className={`font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Pro Plan
                </h3>
                <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                    $1
                  </span>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    /month
                  </span>
                </div>
              </div>
              <ul className={`space-y-2 mb-4 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  10,000 file scans/month
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  5,000 URL scans/month
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  Priority scanning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  Email support
                </li>
              </ul>
              <button
                onClick={() => handleUpgrade('pro')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Upgrade to Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className={`p-4 rounded-xl border-2 border-green-500/20 ${isDarkMode 
              ? 'bg-slate-800/50' 
              : 'bg-green-50/50'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-green-500" />
                <h3 className={`font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  Enterprise
                </h3>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                    $3
                  </span>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    /month
                  </span>
                </div>
              </div>
              <ul className={`space-y-2 mb-4 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Unlimited file scans
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Unlimited URL scans
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Advanced threat detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Priority support
                </li>
              </ul>
              <button
                onClick={() => handleUpgrade('enterprise')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                Upgrade to Enterprise
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} text-center`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Join our Discord community for support and updates
              </span>
            </div>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Click upgrade to join our Discord server and get your premium access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};