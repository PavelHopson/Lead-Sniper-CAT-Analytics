import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  TerminalSquare, 
  Search, 
  Briefcase, 
  DollarSign, 
  Bot,
  BrainCircuit,
  FileText
} from 'lucide-react';
import { StatsCard } from './components/StatsCard';
import { CompanyTable } from './components/CompanyTable';
import { Analytics } from './components/Analytics';
import { ConsoleLog } from './components/ConsoleLog';
import { ProjectReport } from './components/ProjectReport';
import { MOCK_COMPANIES } from './constants';
import { analyzeData } from './services/gemini';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.DASHBOARD);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);

  const totalRevenue = MOCK_COMPANIES.reduce((acc, c) => acc + c.revenue, 0);
  const avgRevenue = totalRevenue / MOCK_COMPANIES.length;
  const catAdoptionRate = (MOCK_COMPANIES.filter(c => c.catProduct !== 'Unknown').length / MOCK_COMPANIES.length) * 100;

  const handleAIAnalysis = async () => {
    setIsAnalyzing(true);
    const result = await analyzeData(
      MOCK_COMPANIES, 
      "Какие основные лидеры рынка и есть ли корреляция между высокой выручкой и использованием Trados или MemoQ?"
    );
    setAiInsight(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Search className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">Lead Sniper</h1>
                <p className="text-xs text-slate-500 font-mono">TZ_EXECUTOR_V1.0</p>
              </div>
            </div>
            <div className="flex space-x-1 overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setView(ViewMode.DASHBOARD)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${view === ViewMode.DASHBOARD ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Дашборд
              </button>
              <button 
                 onClick={() => setView(ViewMode.DATA_GRID)}
                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${view === ViewMode.DATA_GRID ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                База данных
              </button>
              <button 
                 onClick={() => setView(ViewMode.REPORT)}
                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${view === ViewMode.REPORT ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <FileText size={14}/>
                Отчет
              </button>
               <button 
                 onClick={() => setView(ViewMode.LOGS)}
                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${view === ViewMode.LOGS ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Логи
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Общая выручка (Анализ)" 
            value={(totalRevenue / 1000000000).toFixed(1) + " млрд ₽"} 
            icon={DollarSign}
            trend="+12% YoY"
          />
          <StatsCard 
            title="Квалифицированные лиды" 
            value={MOCK_COMPANIES.length.toString()} 
            icon={Briefcase}
            color="text-emerald-500"
          />
          <StatsCard 
            title="Проникновение CAT Tools" 
            value={catAdoptionRate.toFixed(0) + "%"} 
            icon={Database}
            color="text-purple-500"
          />
        </div>

        {/* Content Area */}
        {view === ViewMode.DASHBOARD && (
          <div className="space-y-6">
            <Analytics data={MOCK_COMPANIES} />
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BrainCircuit className="text-blue-400" size={20}/>
                  AI Инсайт о рынке
                </h3>
                <button 
                  onClick={handleAIAnalysis}
                  disabled={isAnalyzing}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {isAnalyzing ? 'Анализ...' : 'Сгенерировать'}
                  <Bot size={16} />
                </button>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 text-slate-300 min-h-[100px]">
                {aiInsight ? (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans">{aiInsight}</pre>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2">
                    <Bot size={32} opacity={0.5} />
                    <p className="text-sm text-center">Нажмите "Сгенерировать", чтобы Gemini 2.5 Flash проанализировал данные.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {view === ViewMode.DATA_GRID && (
           <CompanyTable data={MOCK_COMPANIES} />
        )}

        {view === ViewMode.REPORT && (
           <ProjectReport />
        )}

        {view === ViewMode.LOGS && (
          <div className="h-[600px]">
            <ConsoleLog />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;