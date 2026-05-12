import React from 'react'

export default function Oshpaz({ buyurtmalar, qabulQilish }) {
  return (
    <div className="oshpaz">
      <h1 className="title">👨‍🍳 Oshpaz Paneli</h1>

      <div className="cards">
        {buyurtmalar.map((item) => (
          <div className="card" key={item.id}>
            <h2>🍽 {item.taom}</h2>

            <p>🪑 Stol: {item.stol}</p>

            <p>
              Holati:
              <span
                className={
                  item.status === "qabul qilindi"
                    ? "green"
                    : "orange"
                }
              >
                {item.status}
              </span>
            </p>

            {item.status === "kutilmoqda" && (
              <button
                onClick={() => qabulQilish(item.id)}
              >
                ✅ Qabul qilish
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}