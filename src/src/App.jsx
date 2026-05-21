import { useState } from 'react'
import Table from './components/Table'
import Calculator from './components/Calculator'

export default function App() {
  const [a1, setA1] = useState(0)
  const [a2, setA2] = useState(0)
  const [a3, setA3] = useState(0)
  const [a4, setA4] = useState(0)

  const total = a1 + a2 + a3 + a4

  return (
    <div className="container">
      <h1>Kassir</h1>

      <div className="tables-grid">
        <Table id={1} amount={a1} onAdd={v => setA1(a1 + v)} onClear={() => setA1(0)} />
        <Table id={2} amount={a2} onAdd={v => setA2(a2 + v)} onClear={() => setA2(0)} />
        <Table id={3} amount={a3} onAdd={v => setA3(a3 + v)} onClear={() => setA3(0)} />
        <Table id={4} amount={a4} onAdd={v => setA4(a4 + v)} onClear={() => setA4(0)} />
      </div>

      <div className="bottom-section">
        <div className="total-card">
          <h2>Jami</h2>
          <div className="total-amount">{total.toLocaleString('uz-UZ')} so'm</div>
        </div>

        <Calculator />
      </div>
    </div>
  )
}
