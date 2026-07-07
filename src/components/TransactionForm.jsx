import { useState } from 'react'
import { CATEGORIES } from '../utils/categories'

const today = () => new Date().toISOString().slice(0, 10)

const emptyForm = {
  description: '',
  amount: '',
  type: 'expense',
  category: CATEGORIES.expense[0],
  date: today(),
}

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function handleTypeChange(nextType) {
    setForm((prev) => ({
      ...prev,
      type: nextType,
      category: CATEGORIES[nextType][0],
    }))
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedDescription = form.description.trim()
    const parsedAmount = Number(form.amount)

    if (!trimmedDescription) {
      setError('Add a description so you remember what this was for.')
      return
    }
    if (!form.amount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Enter an amount greater than zero.')
      return
    }
    if (!form.date) {
      setError('Pick a date for this transaction.')
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      description: trimmedDescription,
      amount: parsedAmount,
      type: form.type,
      category: form.category,
      date: form.date,
    })

    setError('')
    setForm({ ...emptyForm, type: form.type, category: CATEGORIES[form.type][0] })
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">Add a transaction</h2>

      <div className="type-toggle" role="radiogroup" aria-label="Transaction type">
        <button
          type="button"
          role="radio"
          aria-checked={form.type === 'expense'}
          className={`type-toggle-btn ${form.type === 'expense' ? 'is-active is-expense' : ''}`}
          onClick={() => handleTypeChange('expense')}
        >
          Expense
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={form.type === 'income'}
          className={`type-toggle-btn ${form.type === 'income' ? 'is-active is-income' : ''}`}
          onClick={() => handleTypeChange('income')}
        >
          Income
        </button>
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="e.g. Groceries at the market"
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          maxLength={80}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="amount">Amount (₹)</label>
          <input
            id="amount"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={form.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={form.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          {CATEGORIES[form.type].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="submit-btn">
        Add transaction
      </button>
    </form>
  )
}
