import { useEffect, useRef } from 'react'

const STORAGE_KEY = 'spendsense.transactions'

// Reads whatever was saved last session. Called once, synchronously,
// so the very first render already has the right data (no flash of
// an empty list before localStorage kicks in).
export function loadTransactions() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (err) {
    console.warn('SpendSense: could not read saved transactions.', err)
    return []
  }
}

// Persists the transaction list on every change, skipping the very
// first render so we don't immediately re-write what we just loaded.
export function usePersistTransactions(transactions) {
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
    } catch (err) {
      console.warn('SpendSense: could not save transactions.', err)
    }
  }, [transactions])
}
