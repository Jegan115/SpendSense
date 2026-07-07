# SpendSense

**Financial intelligence. Smart spending.**

A simple, polished expense tracker built with React and Vite. Log income and expenses, watch your balance update instantly, and see where your money goes with a category breakdown chart. All data is saved locally in your browser, so it's still there next time you open the app.

---

## Features

- Add income or expense transactions with description, amount, category, and date
- Live summary cards for balance, total income, and total expenses
- Expense breakdown chart by category (built with Recharts)
- Filter transactions by All / Income / Expense
- Delete any transaction
- Data persists via `localStorage` — no backend needed
- Fully responsive, desktop to mobile
- Custom design system built around the SpendSense brand colors

---

## Tech Stack

| Layer      | Tool                          |
|------------|--------------------------------|
| Framework  | React 18                       |
| Build tool | Vite 5                         |
| Charts     | Recharts                       |
| Styling    | Plain CSS with custom properties (no Tailwind, no UI kit) |

---

## Getting Started

**Requirements:** [Node.js](https://nodejs.org/) 18 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the URL it prints (usually http://localhost:5173)
```

**Build for production:**

```bash
npm run build
npm run preview
```

> If you ever see dependency warnings on install, delete `node_modules` and `package-lock.json` and run `npm install` again — this resets everything to the exact tested versions in `package.json`.

---

## Project Structure

```
SpendSense/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.png
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

---

## Design

The palette comes directly from the SpendSense logo — bright teal (`#11ADA0`) blending into vivid magenta (`#DC1D86`), on a warm cream background (`#F7F4EE`) matching the logo's own presentation.

- **Headings:** Sora
- **Body text:** Inter
- **Numbers & amounts:** JetBrains Mono, for easy scanning and comparison

The one signature visual flourish is a slow-rotating orbit arc behind the balance figure — a quiet nod to the swoosh in the logo mark.

---

## Notes

- Currency is formatted as INR (₹). To change it, edit `src/utils/formatCurrency.js`.
- To reset all data, clear local storage for this site in your browser's dev tools (Application → Local Storage → delete the `spendsense.transactions` key).
