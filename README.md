<div align="center">

# Lead Sniper: CAT Analytics

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-3-22B5BF)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4?logo=google&logoColor=white)

**B2B-аналитическая система для исследования российского рынка переводческих услуг.**
Поиск и квалификация компаний с выручкой 100M+ руб., анализ проникновения CAT-инструментов (Trados, MemoQ, Smartcat, Memsource), AI-генерация инсайтов через Gemini 2.5 Flash.

</div>

---

## Возможности

- **Дашборд** -- KPI-карточки (общая выручка, кол-во лидов, проникновение CAT Tools), интерактивные графики Recharts
- **База данных** -- таблица компаний с ИНН, выручкой, сайтом, выявленным CAT-продуктом и источником данных
- **AI-инсайты** -- Gemini 2.5 Flash анализирует корреляцию между выручкой и используемым CAT-инструментом
- **Отчет** -- структурированный проектный отчет по результатам исследования
- **Консольные логи** -- симуляция процесса парсинга и сканирования (Rusprofile, HH.ru, Habr, VC.ru)

## Технологический стек

| Слой | Технология |
|------|-----------|
| UI | React 19, Lucide Icons |
| Типизация | TypeScript 5.8 |
| Графики | Recharts 3 |
| AI | Google Gemini 2.5 Flash (`@google/genai`) |
| Сборка | Vite 6 |
| Стили | Tailwind CSS |

## Структура проекта

```
├── App.tsx              # Корневой компонент, навигация, AI-анализ
├── types.ts             # Интерфейсы Company, ViewMode, StatMetric
├── constants.ts         # Mock-данные: 10 компаний, логи парсера
├── components/
│   ├── Analytics.tsx     # PieChart (доля CAT Tools) + BarChart (топ-5 по выручке)
│   ├── CompanyTable.tsx  # Таблица с данными компаний
│   ├── ConsoleLog.tsx    # Эмуляция терминальных логов
│   ├── ProjectReport.tsx # Проектный отчет
│   └── StatsCard.tsx     # KPI-карточка с иконкой и трендом
└── services/
    └── gemini.ts         # Интеграция с Gemini AI API
```

## Быстрый старт

```bash
# Клонировать
git clone https://github.com/PavelHopson/Lead-Sniper-CAT-Analytics.git
cd Lead-Sniper-CAT-Analytics

# Установить зависимости
npm install

# Настроить API-ключ
cp .env.example .env.local
# Вписать GEMINI_API_KEY в .env.local

# Запустить
npm run dev
```

## Лицензия

[MIT](LICENSE) -- 2025 PavelHopson
