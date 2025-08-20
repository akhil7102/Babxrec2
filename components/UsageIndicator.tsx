import React from 'react';
import { Calendar, FileText, Globe, TrendingUp } from 'lucide-react';

interface UsageData {
  fileScans: number;
  urlScans: number;
  monthStart: string;
}

interface Limits {
  fileScans: number;
  urlScans: number;
}

interface UsageIndicatorProps {
  isDarkMode: boolean;
  usageData: UsageData;
  limits: Limits;
  daysUntilReset: number;
}

export const UsageIndicator: React.FC<UsageIndicatorProps> = ({
  isDarkMode,
  usageData,
  limits,
  daysUntilReset
}) => {
  const filePercentage = Math.min((usageData.fileScans / limits.fileScans) * 100, 100);
  const urlPercentage = Math.min((usageData.urlScans / limits.urlScans) * 100, 100);

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'from-red-500 to-red-600';
    if (percentage >= 75) return 'from-yellow-500 to-orange-500';
    return 'from-green-500 to-emerald-500';
  };

  const getProgressBg = (percentage: number) => {
    if (percentage >= 90) return isDarkMode ? 'bg-red-500/10' : 'bg-red-50';
    if (percentage >= 75) return isDarkMode ? 'bg-yellow-500/10' : 'bg-yellow-50';
    return isDarkMode ? 'bg-green-500/10' : 'bg-green-50';
  };

  return (
    <div className={`p-4 rounded-xl border backdrop-blur-sm ${isDarkMode 
      ? 'bg-slate-900/90 border-slate-700/50 shadow-2xl' 
      : 'bg-white/90 border-slate-200/60 shadow-xl'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`font-medium flex items-center gap-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
          <TrendingUp className="w-4 h-4" />
          Usage This Month
        </h3>
        <div className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <Calendar className="w-3 h-3" />
          {daysUntilReset} days left
        </div>
      </div>

      <div className="space-y-3">
        {/* File Scans */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <FileText className="w-3 h-3" />
              File Scans
            </div>
            <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {usageData.fileScans.toLocaleString()} / {limits.fileScans.toLocaleString()}
            </span>
          </div>
          <div className={`h-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(filePercentage)} transition-all duration-300`}
              style={{ width: `${filePercentage}%` }}
            />
          </div>
        </div>

        {/* URL Scans */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <Globe className="w-3 h-3" />
              URL Scans
            </div>
            <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {usageData.urlScans.toLocaleString()} / {limits.urlScans.toLocaleString()}
            </span>
          </div>
          <div className={`h-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(urlPercentage)} transition-all duration-300`}
              style={{ width: `${urlPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Plan indicator */}
      <div className={`mt-3 pt-2 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className={`text-xs text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
          Free Plan • Upgrade for unlimited scans
        </div>
      </div>
    </div>
  );
};