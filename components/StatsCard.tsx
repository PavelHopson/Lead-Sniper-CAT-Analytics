import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  color?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, trend, color = "text-blue-500" }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className={`p-2 bg-slate-700/50 rounded-lg ${color}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-end space-x-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        {trend && <span className="text-sm text-emerald-400 mb-1">{trend}</span>}
      </div>
    </div>
  );
};