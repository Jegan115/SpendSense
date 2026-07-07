export const initialState = {
  transactions: [],
}

export function transactionReducer(state, action) {
  switch (action.type) {
    case 'LOAD_TRANSACTIONS': {
      return { ...state, transactions: action.payload }
    }
    case 'ADD_TRANSACTION': {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      }
    }
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      }
    }
    default:
      return state
  }
}
