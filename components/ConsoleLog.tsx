import React from 'react';
import { MOCK_LOGS } from '../constants';
import { Terminal } from 'lucide-react';

export const ConsoleLog: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3 text-slate-500 border-b border-slate-800 pb-2">
        <Terminal size={14} />
        <span>crawler_output.log</span>
      </div>
      <div className="space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
        {MOCK_LOGS.map((log, i) => {
            const color = log.includes('SUCCESS') ? 'text-emerald-400' : 
                          log.includes('WARN') ? 'text-yellow-400' : 
                          log.includes('ERROR') ? 'text-red-400' : 'text-slate-400';
            return (
                <div key={i} className={`${color} break-all`}>
                    {log}
                </div>
            );
        })}
        <div className="animate-pulse text-blue-400">_</div>
      </div>
    </div>
  );
};