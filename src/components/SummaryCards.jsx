import { formatCurrency } from '../utils/formatCurrency'
import OrbitArc from './OrbitArc'

export default function SummaryCards({ income, expenses }) {
  const balance = income - expenses

  return (
    <section className="summary-grid" aria-label="Financial summary">
      <div className="summary-card summary-card-balance">
        <OrbitArc />
        <span className="summary-label">Current balance</span>
        <span className="summary-value summary-value-balance">
          {formatCurrency(balance)}
        </span>
      </div>

      <div className="summary-card">
        <span className="summary-label">Total income</span>
        <span className="summary-value summary-value-income">
          + {formatCurrency(income)}
        </span>
      </div>

      <div className="summary-card">
        <span className="summary-label">Total expenses</span>
        <span className="summary-value summary-value-expense">
          − {formatCurrency(expenses)}
        </span>
      </div>
    </section>
  )
}
