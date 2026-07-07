import { useMemo } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { colorForCategory } from '../utils/categories'
import { formatCurrency } from '../utils/formatCurrency'

export default function CategoryChart({ transactions }) {
  const data = useMemo(() => {
    const totals = {}
    transactions
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        totals[t.category] = (totals[t.category] || 0) + Number(t.amount)
      })
    return Object.entries(totals)
      .map(([category, value]) => ({ name: category, value }))
      .sort((a, b) => b.value - a.value)
  }, [transactions])

  const hasData = data.length > 0

  return (
    <section className="chart-card" aria-label="Spending by category">
      <h2 className="form-title">Spending by category</h2>

      {hasData ? (
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={colorForCategory(entry.name)} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E4E1D8',
                  borderRadius: '10px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="empty-state">
          <p>No expenses logged yet. Once you add some, their breakdown shows up here.</p>
        </div>
      )}
    </section>
  )
}
