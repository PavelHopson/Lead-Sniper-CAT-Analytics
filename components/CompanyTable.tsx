import React from 'react';
import { Company } from '../types';
import { ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

interface CompanyTableProps {
  data: Company[];
}

const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(amount);
};

export const CompanyTable: React.FC<CompanyTableProps> = ({ data }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-300">
          <thead className="text-xs text-slate-400 uppercase bg-slate-900/50">
            <tr>
              <th className="px-6 py-4 font-medium">Название компании</th>
              <th className="px-6 py-4 font-medium">Выручка (RUB)</th>
              <th className="px-6 py-4 font-medium">CAT Инструмент</th>
              <th className="px-6 py-4 font-medium">Источник</th>
              <th className="px-6 py-4 font-medium">Доказательство (Evidence)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {data.map((company) => (
              <tr key={company.id} className="hover:bg-slate-700/30 transition-colors">
                <td className="px-6 py-4 font-medium text-white flex items-center gap-2">
                  {company.name}
                  <a href={`https://${company.site}`} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400">
                    <ExternalLink size={12} />
                  </a>
                </td>
                <td className="px-6 py-4 font-mono text-emerald-400">
                  {formatMoney(company.revenue)}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border
                    ${company.catProduct === 'Smartcat' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 
                      company.catProduct === 'MemoQ' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                      company.catProduct === 'Trados' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      'bg-slate-700 text-slate-400 border-slate-600'}`}>
                    {company.catProduct}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">{company.source}</td>
                <td className="px-6 py-4 max-w-xs truncate" title={company.catEvidence}>
                  {company.catEvidence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};