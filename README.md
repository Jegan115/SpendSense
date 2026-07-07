# SpendSense

**Financial intelligence. Smart spending.**

A simple, polished expense tracker built with React + Vite. Add income and expenses, watch your balance update live, and see where your money goes with a category breakdown chart. Everything is saved to your browser's local storage, so your data is there the next time you open the app.

## Features

- Add income or expense transactions with description, amount, category, and date
- Live balance, total income, and total expense summary cards
- Category breakdown chart (expenses only) built with Recharts
- Filter transactions by All / Income / Expense
- Delete any transaction
- Data persists in `localStorage` — no backend required
- Fully responsive, from desktop down to mobile
- Custom design system built around the SpendSense brand colors (teal → magenta)

## Tech stack

- React 18
- Vite 5
- Recharts (category pie chart)
- Plain CSS with custom properties (no UI framework, no Tailwind)

## Getting started

You'll need [Node.js](https://nodejs.org/) 18 or newer installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the URL it prints (usually http://localhost:5173)
```

To build a production version:

```bash
npm run build
npm run preview
```

## Project structure

```
SpendSense/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.png
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── logo-icon.png
    ├── components/
    │   ├── Header.jsx
    │   ├── OrbitArc.jsx
    │   ├── SummaryCards.jsx
    │   ├── TransactionForm.jsx
    │   ├── TransactionList.jsx
    │   ├── TransactionItem.jsx
    │   └── CategoryChart.jsx
    ├── reducer/
    │   └── transactionReducer.js
    ├── hooks/
    │   └── useLocalStorage.js
    └── utils/
        ├── categories.js
        └── formatCurrency.js
```

## Design notes

The palette is pulled straight from the SpendSense logo: bright teal (`#11ADA0`) running into vivid magenta (`#DC1D86`), set on a warm cream background (`#F7F4EE`) that matches the logo's own presentation. Headings use **Sora**, body text uses **Inter**, and all monetary figures use **JetBrains Mono** so numbers stay easy to scan and compare.

The one signature flourish is the slow-rotating orbit arc behind the balance figure — a quiet nod to the swoosh in the logo mark itself.

## Notes

- Currency is formatted as INR (₹). To change it, edit `src/utils/formatCurrency.js`.
- To reset all data, clear your browser's local storage for this site (or open dev tools → Application → Local Storage → delete the `spendsense.transactions` key).
