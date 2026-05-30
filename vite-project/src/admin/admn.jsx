import { useState } from 'react'
import './admin.css'
import Admin from './Admin'
import Afitsant from '../afitsant/Afitsant'
import Kasser from '../Kasser/Kasser'
import Oshpaz from '../oshpaz/Oshpaz'

function Admn() {
  const [panel, setPanel] = useState(null)
  const [theme, setTheme] = useState('light')
  const [managedRole, setManagedRole] = useState(null)
  const [orderCount, setOrderCount] = useState(0)
  const [averageSale, setAverageSale] = useState(0)
  const [expensePerOrder, setExpensePerOrder] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('naqd')
  const [buyurtmalar, setBuyurtmalar] = useState([])

  const income = orderCount * averageSale
  const expense = orderCount * expensePerOrder
  const netBalance = income - expense

  const qabulQilish = (id) => {
    const yangi = buyurtmalar.map((item) =>
      item.id === id ? { ...item, status: 'qabul qilindi' } : item
    )
    setBuyurtmalar(yangi)
  }

  const tayorQilish = (id) => {
    const yangi = buyurtmalar.map((item) =>
      item.id === id ? { ...item, status: 'tayor' } : item
    )
    setBuyurtmalar(yangi)
  }

  const renderPanel = () => {
    switch (panel) {
      case 'admin':
        return (
          <Admin
            managedRole={managedRole}
            setManagedRole={setManagedRole}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
            averageSale={averageSale}
            setAverageSale={setAverageSale}
            expensePerOrder={expensePerOrder}
            setExpensePerOrder={setExpensePerOrder}
            paymentMethod={paymentMethod}
            income={income}
            expense={expense}
            netBalance={netBalance}
          />
        )
      case 'afitsant':
        return <Afitsant buyurtmalar={buyurtmalar} setBuyurtmalar={setBuyurtmalar} />
      case 'kasser':
        return (
          <Kasser
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
            averageSale={averageSale}
            setAverageSale={setAverageSale}
            expensePerOrder={expensePerOrder}
            setExpensePerOrder={setExpensePerOrder}
          />
        )
      case 'oshpaz':
        return <Oshpaz buyurtmalar={buyurtmalar} qabulQilish={qabulQilish} tayorQilish={tayorQilish} />
      default:
        return null
    }
  }

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`app-container theme-${theme}`}>
      <div className="top-bar">
        <div>
          <h1>Kafe avtomatlashtirish</h1>
          <p className="app-subtitle">Admin, kassir va xodimlarni bir joydan boshqaring</p>
        </div>
        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      <div className="summary-grid">
        <div className="summary-card summary-card-primary">
          <span>Tanlangan rol</span>
          <strong>{managedRole ? managedRole : 'Rol yo‘q'}</strong>
        </div>
        <div className="summary-card summary-card-accent">
          <span>Ofitsiant buyurtmalari</span>
          <strong>{orderCount} dona</strong>
        </div>
        <div className="summary-card summary-card-secondary">
          <span>Kirim</span>
          <strong>{income} so‘m</strong>
        </div>
        <div className="summary-card summary-card-tertiary">
          <span>Chiqim</span>
          <strong>{expense} so‘m</strong>
        </div>
        <div className="summary-card summary-card-accent">
          <span>To‘lov turi</span>
          <strong>{paymentMethod === 'naqd' ? 'Naqd' : paymentMethod === 'plastik' ? 'Plastik' : paymentMethod === 'qr' ? 'QR' : 'Terminal'}</strong>
        </div>
        <div className="summary-card summary-card-primary">
          <span>Net balans</span>
          <strong>{netBalance} so‘m</strong>
        </div>
      </div>

      <div className="button-row">
        <button className={panel === 'admin' ? 'active-panel' : ''} onClick={() => setPanel('admin')}>
          Admin
        </button>
        <button className={panel === 'afitsant' ? 'active-panel' : ''} onClick={() => setPanel('afitsant')}>
          Afitsant
        </button>
        <button className={panel === 'kasser' ? 'active-panel' : ''} onClick={() => setPanel('kasser')}>
          Kasser
        </button>
        <button className={panel === 'oshpaz' ? 'active-panel' : ''} onClick={() => setPanel('oshpaz')}>
          Oshpaz
        </button>
      </div>

      <div className="panel-card">{renderPanel()}</div>
    </div>
  )
}

export default Admn
