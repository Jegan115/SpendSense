import { formatCurrency, formatDate } from '../utils/formatCurrency'
import { colorForCategory } from '../utils/categories'

export default function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === 'income'
  const dotColor = isIncome ? '#11ADA0' : colorForCategory(transaction.category)

  return (
    <li className="transaction-item">
      <span className="transaction-dot" style={{ backgroundColor: dotColor }} aria-hidden="true" />

      <div className="transaction-main">
        <span className="transaction-description">{transaction.description}</span>
        <span className="transaction-meta">
          {transaction.category} · {formatDate(transaction.date)}
        </span>
      </div>

      <span className={`transaction-amount ${isIncome ? 'is-income' : 'is-expense'}`}>
        {isIncome ? '+' : '−'} {formatCurrency(transaction.amount)}
      </span>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(transaction.id)}
        aria-label={`Delete ${transaction.description}`}
      >
        ✕
      </button>
    </li>
  )
}
