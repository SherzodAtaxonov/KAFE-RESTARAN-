import React from 'react'

function Kasser({
  paymentMethod,
  setPaymentMethod,
  orderCount,
  setOrderCount,
  averageSale,
  setAverageSale,
  expensePerOrder,
  setExpensePerOrder,
}) {
  return (
    <div className="kasser-card">
      <div className="kasser-header-row">
        <div>
          <h1 className="kasser-title">Kasser Panel</h1>
          <p className="kasser-subtitle">Buyurtmalarni qabul qilish va to'lovlarni boshqarish.</p>
        </div>
      </div>

      <section className="kasser-section">
        <h2 className="kasser-section-title">To'lov turi</h2>
        <div className="kasser-panel-grid">
          <div>
            <label className="kasser-radio-label">
              <input
                type="radio"
                name="payment"
                value="naqd"
                checked={paymentMethod === 'naqd'}
                onChange={() => setPaymentMethod('naqd')}
              />
              Naqd
            </label>
            <label className="kasser-radio-label">
              <input
                type="radio"
                name="payment"
                value="plastik"
                checked={paymentMethod === 'plastik'}
                onChange={() => setPaymentMethod('plastik')}
              />
              Plastik
            </label>
            <label className="kasser-radio-label">
              <input
                type="radio"
                name="payment"
                value="qr"
                checked={paymentMethod === 'qr'}
                onChange={() => setPaymentMethod('qr')}
              />
              QR
            </label>
            <label className="kasser-radio-label">
              <input
                type="radio"
                name="payment"
                value="terminal"
                checked={paymentMethod === 'terminal'}
                onChange={() => setPaymentMethod('terminal')}
              />
              Terminal
            </label>
          </div>
        </div>
      </section>

      <section className="kasser-section">
        <h2 className="kasser-section-title">Buyurtma ma'lumotlari</h2>
        <div className="kasser-input-row">
          <label className="kasser-input-label">
            Buyurtma soni
            <input
              type="number"
              value={orderCount}
              min="0"
              onChange={(event) => setOrderCount(Number(event.target.value))}
              className="kasser-input"
            />
          </label>
          <label className="kasser-input-label">
            O'rtacha chek
            <input
              type="number"
              value={averageSale}
              min="0"
              onChange={(event) => setAverageSale(Number(event.target.value))}
              className="kasser-input"
            />
          </label>
          <label className="kasser-input-label">
            Xarajat / buyurtma
            <input
              type="number"
              value={expensePerOrder}
              min="0"
              onChange={(event) => setExpensePerOrder(Number(event.target.value))}
              className="kasser-input"
            />
          </label>
        </div>
      </section>

      <section className="kasser-section">
        <h2 className="kasser-section-title">Kasser nazorati</h2>
        <p className="admin-note">
          Bu panel kassir to'lovlari va buyurtma ma'lumotlarini boshqarish uchun mo'ljallangan.
        </p>
      </section>
    </div>
  )
}

export default Kasser
