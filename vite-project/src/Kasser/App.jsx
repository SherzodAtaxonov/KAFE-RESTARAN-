import { useState } from 'react'
import './App.css'

const menuItems = [
  { key: 'choy', name: 'Choy', price: 12000 },
  { key: 'osh', name: 'Osh', price: 35000 },
  { key: 'shashlik', name: 'Shashlik', price: 8000 },
  { key: 'non', name: 'Non', price: 4000 },
  { key: 'salat', name: 'Salat', price: 22000 },
]

const initialTables = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  orders: {},
}))

function formatPrice(value) {
  return `${value.toLocaleString('ru-RU')} so'm`
}

function App() {
  const [tables, setTables] = useState(initialTables)
  const [calcValue, setCalcValue] = useState('0')

  const addItem = (tableId, itemKey) => {
    setTables((prev) =>
      prev.map((table) => {
        if (table.id !== tableId) return table
        const currentQty = table.orders[itemKey] || 0
        return {
          ...table,
          orders: {
            ...table.orders,
            [itemKey]: currentQty + 1,
          },
        }
      }),
    )
  }

  const clearTable = (tableId) => {
    setTables((prev) =>
      prev.map((table) =>
        table.id === tableId ? { ...table, orders: {} } : table,
      ),
    )
  }

  const getTableTotal = (table) =>
    Object.entries(table.orders).reduce((sum, [key, qty]) => {
      const item = menuItems.find((menu) => menu.key === key)
      return item ? sum + item.price * qty : sum
    }, 0)

  const totalAll = tables.reduce(
    (sum, table) => sum + getTableTotal(table),
    0,
  )

  const handleCalc = (button) => {
    if (button === 'C') {
      setCalcValue('0')
      return
    }

    if (button === '=') {
      try {
        const expression = calcValue
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
        const result = Function(`return ${expression}`)()
        setCalcValue(String(result))
      } catch {
        setCalcValue('hatolik')
      }
      return
    }

    if (calcValue === '0' && button !== '.') {
      setCalcValue(button)
      return
    }

    if (calcValue === 'hatolik') {
      setCalcValue(button)
      return
    }

    setCalcValue((value) => value + button)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="badge">Kassir paneli</p>
        </div>
      </header>

      <main>
        <section className="tables-grid">
          {tables.map((table) => {
            const entries = Object.entries(table.orders)
            return (
              <article key={table.id} className="table-card">
                <div className="table-top">
                  <h2>Stol {table.id}</h2>
                  <button
                    type="button"
                    className="clear-button"
                    onClick={() => clearTable(table.id)}>
                    Tozalash
                  </button>
                </div>

                <div className="menu-buttons">
                  {menuItems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className="menu-button"
                      onClick={() => addItem(table.id, item.key)}>
                      + {item.name}
                    </button>
                  ))}
                </div>

                <div className="orders-list">
                  {entries.length === 0 ? (
                    <p className="empty-order">Buyurtma yo'q</p>
                  ) : (
                    entries.map(([key, qty]) => {
                      const item = menuItems.find((menu) => menu.key === key)
                      if (!item) return null
                      return (
                        <div key={key} className="order-row">
                          <span>{item.name} x{qty}</span>
                          <strong>{formatPrice(item.price * qty)}</strong>
                        </div>
                      )
                    })
                  )}
                </div>

                <div className="table-total">
                  <span>Jami:</span>
                  <strong>{formatPrice(getTableTotal(table))}</strong>
                </div>
              </article>
            )
          })}
        </section>

        <section className="summary-card">
          <h2>Umumiy summa ({tables.length} stol):</h2>
          <p className="summary-value">{formatPrice(totalAll)}</p>
        </section>

        <section className="calculator-card">
          <div className="calculator-header">
            <h2>Kalkulyator</h2>
          </div>
          <div className="calculator">
            <div className="calc-screen" role="status">
              {calcValue}
            </div>
            <div className="calc-grid">
              {['7', '8', '9', '×', '4', '5', '6', '÷', '1', '2', '3', '-', '0', '.', '=', '+'].map(
                (button) => (
                  <button
                    key={button}
                    type="button"
                    className={`calc-button ${button === '=' ? 'equals' : ''}`}
                    onClick={() => handleCalc(button)}>
                    {button}
                  </button>
                ),
              )}
            </div>
            <button type="button" className="calc-clear" onClick={() => handleCalc('C')}>(C)</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
