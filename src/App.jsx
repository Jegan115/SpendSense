import { useReducer, useMemo, useEffect } from 'react'
import Header from './components/Header.jsx'
import SummaryCards from './components/SummaryCards.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from './components/TransactionList.jsx'
import CategoryChart from './components/CategoryChart.jsx'
import { transactionReducer, initialState } from './reducer/transactionReducer.js'
import { loadTransactions, usePersistTransactions } from './hooks/useLocalStorage.js'

export default function App() {
  const [state, dispatch] = useReducer(transactionReducer, initialState)

  // Load whatever was saved last time, once, right after mount.
  useEffect(() => {
    dispatch({ type: 'LOAD_TRANSACTIONS', payload: loadTransactions() })
  }, [])

  usePersistTransactions(state.transactions)

  const { income, expenses } = useMemo(() => {
    return state.transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') acc.income += Number(t.amount)
        else acc.expenses += Number(t.amount)
        return acc
      },
      { income: 0, expenses: 0 },
    )
  }, [state.transactions])

  function handleAdd(transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  function handleDelete(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <SummaryCards income={income} expenses={expenses} />

        <div className="workspace-grid">
          <TransactionForm onAdd={handleAdd} />
          <CategoryChart transactions={state.transactions} />
        </div>

        <TransactionList transactions={state.transactions} onDelete={handleDelete} />
      </main>

      <footer className="app-footer">
        <p>SpendSense — your data stays on this device.</p>
      </footer>
    </div>
  )
}
