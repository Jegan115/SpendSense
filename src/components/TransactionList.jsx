import { useState, useMemo } from 'react'
import TransactionItem from './TransactionItem.jsx'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'income', label: 'Income' },
  { key: 'expense', label: 'Expense' },
]

export default function TransactionList({ transactions, onDelete }) {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    if (filter === 'all') return transactions
    return transactions.filter((t) => t.type === filter)
  }, [transactions, filter])

  return (
    <section className="transaction-list-section" aria-label="Transaction history">
      <div className="list-header">
        <h2 className="form-title">Transactions</h2>
        <div className="filter-chips" role="group" aria-label="Filter transactions">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-chip ${filter === f.key ? 'is-active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">
          {transactions.length === 0 ? (
            <p>No transactions yet. Add your first one above to see it here.</p>
          ) : (
            <p>Nothing in this filter yet. Switch filters or add a transaction.</p>
          )}
        </div>
      ) : (
        <ul className="transaction-list">
          {visible.map((t) => (
            <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  )
}
