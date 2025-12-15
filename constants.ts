import { Company } from './types';

// Симуляция выходного файла "companies.csv" согласно ТЗ
export const MOCK_COMPANIES: Company[] = [
  {
    id: '1',
    inn: '7704726225',
    name: 'Janus Worldwide',
    revenue: 2100000000,
    site: 'janusww.com',
    catEvidence: 'Упоминание собственной платформы GT и интеграции с MemoQ на странице услуг.',
    catProduct: 'MemoQ',
    source: 'Rusprofile',
    employees: 350
  },
  {
    id: '2',
    inn: '7729606822',
    name: 'Logrus IT',
    revenue: 1200000000,
    site: 'logrusit.com',
    catEvidence: 'Вакансия LQA специалиста с требованием знания Trados Studio.',
    catProduct: 'Trados',
    source: 'HH.ru',
    employees: 180
  },
  {
    id: '3',
    inn: '7714343160',
    name: 'AWATERA',
    revenue: 1500000000,
    site: 'awatera.com',
    catEvidence: 'Прямое партнерство со Smartcat указано в футере сайта.',
    catProduct: 'Smartcat',
    source: 'Rusprofile',
    employees: 220
  },
  {
    id: '4',
    inn: '5406616057',
    name: 'Palex Group',
    revenue: 850000000,
    site: 'palexgroup.com',
    catEvidence: 'Статья в блоге о миграции процессов на Memsource (Phrase).',
    catProduct: 'Memsource',
    source: 'Habr',
    employees: 120
  },
  {
    id: '5',
    inn: '7810345678',
    name: 'EGO Translating',
    revenue: 2900000000,
    site: 'egotranslating.ru',
    catEvidence: 'Описание тех. стека включает серверные решения SDL Trados.',
    catProduct: 'Trados',
    source: 'Rusprofile',
    employees: 450
  },
  {
    id: '6',
    inn: '7701123456',
    name: 'TransLink',
    revenue: 1100000000,
    site: 't-link.ru',
    catEvidence: 'Документация по API интеграции для Smartcat.',
    catProduct: 'Smartcat',
    source: 'Spark',
    employees: 190
  },
  {
    id: '7',
    inn: '6671234567',
    name: 'Literra',
    revenue: 450000000,
    site: 'li-terra.com',
    catEvidence: 'Собственный портал, описанный как совместимый с современными TMS.',
    catProduct: 'Custom',
    source: 'Rusprofile',
    employees: 80
  },
  {
    id: '8',
    inn: '7705987654',
    name: 'Neotech',
    revenue: 600000000,
    site: 'neotech.ru',
    catEvidence: 'Требования к вендорам включают обязательное владение MemoQ.',
    catProduct: 'MemoQ',
    source: 'HH.ru',
    employees: 110
  },
  {
    id: '9',
    inn: '7802345678',
    name: 'Prof-Perevod',
    revenue: 320000000,
    site: 'prof-perevod.ru',
    catEvidence: 'Прямых упоминаний нет, вывод сделан на основе объема тех. документации.',
    catProduct: 'Unknown',
    source: 'Rusprofile',
    employees: 55
  },
  {
    id: '10',
    inn: '7734567890',
    name: 'Traktat',
    revenue: 550000000,
    site: 'traktat.com',
    catEvidence: 'Использование Smartcat для управления фрилансерами.',
    catProduct: 'Smartcat',
    source: 'VC.ru',
    employees: 95
  }
];

export const MOCK_LOGS = [
  "[10:00:01] INFO: Инициализация последовательности Lead Sniper...",
  "[10:00:02] INFO: Подключение к Rusprofile API (Симуляция).",
  "[10:00:03] INFO: Парсинг ОКВЭД 74.30 для региона RU...",
  "[10:00:08] SUCCESS: Получено 214 сущностей.",
  "[10:00:09] INFO: Фильтрация по выручке >= 100,000,000 RUB...",
  "[10:00:10] INFO: Осталось 84 кандидата.",
  "[10:00:11] INFO: Запуск глубокого сканирования на ключевые слова CAT...",
  "[10:00:15] INFO: Найдено 'MemoQ' в метаданных janusww.com.",
  "[10:00:18] INFO: Найден API эндпоинт 'Smartcat' на awatera.com.",
  "[10:00:22] WARN: Не удалось определить CAT инструмент для Company_X (Повтор с LLM)...",
  "[10:00:25] SUCCESS: LLM определила контекст 'Trados' в описании вакансии.",
  "[10:00:30] DONE: Данные нормализованы. Экспорт в companies.csv."
];