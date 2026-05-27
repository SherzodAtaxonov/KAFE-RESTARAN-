import React from 'react'

const roles = [
  { id: 'ofitsiant', label: 'Ofitsiant' },
  { id: 'kasser', label: 'Kasser' },
  { id: 'oshpaz', label: 'Oshpaz' },
]

function Admin({
  managedRole,
  setManagedRole,
  orderCount,
  setOrderCount,
  averageSale,
  setAverageSale,
  expensePerOrder,
  setExpensePerOrder,
  paymentMethod,
  income,
  expense,
  netBalance,
}) {
  const selectedRole = roles.find((role) => role.id === managedRole)?.label || 'Hech qanday rol tanlanmagan'
  const selectedPayment = paymentMethod === 'naqd' ? 'Naqd' : paymentMethod === 'plastik' ? 'Plastik' : paymentMethod === 'qr' ? 'QR' : 'Terminal'

  return (
    <div className="admin-card">
      <div className="admin-header-row">
        <div>
          <h1 className="admin-title">Admin Panel</h1>
          <p className="admin-subtitle">Kafe uchun umumiy kirim-chiqim, ofitsiant va kassir hisobotlari.</p>
        </div>
      </div>

      <div className="admin-overview-grid">
        <div className="admin-metric-card">
          <span>Ofitsiant buyurtmalari</span>
          <strong>{orderCount} dona</strong>
        </div>
        <div className="admin-metric-card">
          <span>Jami kirim</span>
          <strong>{income} so'm</strong>
        </div>
        <div className="admin-metric-card">
          <span>Jami chiqim</span>
          <strong>{expense} so'm</strong>
        </div>
        <div className="admin-metric-card admin-metric-profit">
          <span>Net balans</span>
          <strong>{netBalance} so'm</strong>
        </div>
      </div>

      <section className="admin-section">
        <h2 className="admin-section-title">Xodimlarni boshqarish</h2>
        <div className="admin-roles">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              className={`admin-role-button ${managedRole === role.id ? 'active' : ''}`}
              onClick={() => setManagedRole(role.id)}
            >
              {role.label}
            </button>
          ))}
        </div>
        <div className="admin-summary">
          <strong>Tanlangan rol:</strong>{' '}
          {selectedRole}
        </div>
      </section>

      <section className="admin-section">
        <h2 className="admin-section-title">Buyurtma va moliyaviy ma'lumot</h2>
        <div className="admin-input-row">
          <label className="admin-input-label">
            Buyurtma soni
            <input
              type="number"
              value={orderCount}
              min="0"
              onChange={(event) => setOrderCount(Number(event.target.value))}
              className="admin-input"
            />
          </label>
          <label className="admin-input-label">
            O'rtacha chek
            <input
              type="number"
              value={averageSale}
              min="0"
              onChange={(event) => setAverageSale(Number(event.target.value))}
              className="admin-input"
            />
          </label>
          <label className="admin-input-label">
            Xarajat / buyurtma
            <input
              type="number"
              value={expensePerOrder}
              min="0"
              onChange={(event) => setExpensePerOrder(Number(event.target.value))}
              className="admin-input"
            />
          </label>
        </div>
        <div className="admin-summary admin-summary-grid">
          <div><strong>Avtomatik kirim:</strong> {income} so'm</div>
          <div><strong>Avtomatik chiqim:</strong> {expense} so'm</div>
          <div><strong>Net balans:</strong> {netBalance} so'm</div>
          <div><strong>To‘lov turi:</strong> {selectedPayment}</div>
        </div>
      </section>

      <section>
        <h2 className="admin-section-title">Admin nazorati</h2>
        <p className="admin-note">
          Bu panel umumiy moliyaviy tahlil va ofitsiantning buyurtma balansini ko‘rsatadi. Kassa va xodim ma'lumotlari real vaqt oynada yangilanadi.
        </p>
      </section>
    </div>
  )
}

export default Admin
