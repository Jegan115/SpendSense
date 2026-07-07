// Category definitions per transaction type.
// Keeping these separate keeps the form honest: an expense category
// should never leak into an income entry, and vice versa.
export const CATEGORIES = {
  income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Other Income'],
  expense: [
    'Food',
    'Transport',
    'Shopping',
    'Bills',
    'Entertainment',
    'Health',
    'Education',
    'Other',
  ],
}

// A gradient family running from brand teal to brand magenta, so the
// category chart always reads as "SpendSense" rather than a generic
// chart-library palette. Order matters: earlier categories land on the
// teal end, later ones drift toward magenta.
export const CATEGORY_COLORS = {
  Food: '#11ADA0',
  Transport: '#1E9AA0',
  Shopping: '#4F8B9C',
  Bills: '#7E7998',
  Entertainment: '#A56894',
  Health: '#C4548D',
  Education: '#D93E86',
  Other: '#8A8F94',
}

export function colorForCategory(category) {
  return CATEGORY_COLORS[category] || '#8A8F94'
}
