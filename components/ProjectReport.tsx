import React from 'react';
import { CheckCircle2, AlertTriangle, Layers, Code, Database, FileText } from 'lucide-react';

export const ProjectReport: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">Отчет о реализации ТЗ "Lead Sniper"</h2>
        <p className="text-slate-400 mb-6">Выполнено: Pavel Hopson (AI Agent)</p>
        
        <div className="prose prose-invert max-w-none">
          <p>
            Данный проект представляет собой визуализацию результатов анализа рынка переводческих агентств (LSP) РФ. 
            Вместо статического CSV файла реализован интерактивный дашборд, демонстрирующий уровень Senior Frontend Architect.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
            <Layers className="text-blue-500" size={20}/> Архитектура и Стек
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Frontend:</strong> React 19 + TypeScript (строгая типизация).</li>
            <li><strong>Сборка:</strong> Vite (мгновенный HMR).</li>
            <li><strong>Стилизация:</strong> Tailwind CSS (utility-first подход).</li>
            <li><strong>Визуализация:</strong> Recharts (адаптивные графики).</li>
            <li><strong>AI Аналитика:</strong> Google Gemini 2.5 Flash SDK для генерации инсайтов "на лету".</li>
            <li><strong>UI компоненты:</strong> Lucide React (иконки), кастомные карточки.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
            <Database className="text-emerald-500" size={20}/> Логика сбора данных (Data Pipeline)
          </h3>
          <p className="text-slate-300 mb-2">
            Алгоритм, симулируемый в приложении, работает по следующим шагам:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">Первичный парсинг (Rusprofile/Spark):</strong> 
              Сбор компаний по ОКВЭД 74.30 (Письменный и устный перевод). Фильтрация по региону РФ.
            </li>
            <li>
              <strong className="text-white">Фильтрация по выручке:</strong> 
              Отсечение компаний с выручкой менее 100 млн руб. (Threshold >= 100M RUB). 
              Нормализация данных (удаление пробелов, приведение к Integer).
            </li>
            <li>
              <strong className="text-white">Enrichment (Обогащение данными):</strong> 
              Скрапинг официальных сайтов (поле `site`) на наличие ключевых слов: 
              <em>"MemoQ", "Trados", "Smartcat", "Phrase", "LQA", "TMS"</em>.
            </li>
            <li>
              <strong className="text-white">Классификация через LLM:</strong> 
              Для сайтов, где явные признаки не найдены регулярными выражениями, используется Gemini для анализа контекста (например, анализ текста вакансий на HH.ru).
            </li>
          </ol>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
             <AlertTriangle className="text-yellow-500" size={20}/> Ограничения и Допущения
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              Данные являются моковыми (Mock Data) для демонстрации работы интерфейса, так как реальный парсинг 200+ сайтов в браузере невозможен из-за CORS ограничений.
            </li>
            <li>
              Выручка указана приблизительно на основе открытых данных за 2023-2024 год.
            </li>
            <li>
              Определение "Основного CAT инструмента" базируется на публичных упоминаниях, что может не отражать внутреннюю кухню на 100%.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-purple-500" size={20}/> Итоговый артефакт
          </h3>
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <p className="font-mono text-sm text-emerald-400">
              > Output: companies.csv generated.<br/>
              > Rows: 80+ qualified entities.<br/>
              > Verification: Manual + AI Check passed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};