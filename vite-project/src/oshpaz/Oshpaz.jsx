import React from 'react'
import './oshpaz.css'

export default function Oshpaz({ buyurtmalar, qabulQilish, tayorQilish }) {
  return (
    <div className="oshpaz">
      <h1 className="sarlavha">Oshpaz Paneli</h1>

      <div className="kartalar">
        {buyurtmalar.map((item) => (
          <div className="karta" key={item.id}>
            <h2>{item.taom}</h2>

            <p>Stol: {item.stol}</p>
            <p>Tayorlanish vaqti: 15 min</p>

            <p>
              Holati:
              <span
                className={
                  item.status === "qabul qilindi"
                    ? "yashil"
                    : "sariq"
                }
              >
                {item.status}
              </span>
            </p>

            {item.status === "kutilmoqda" && (
              <button
                onClick={() => qabulQilish(item.id)}
              >
                Qabul qilish
              </button>
            )}

            {item.status === "qabul qilindi" && (
              <button
                onClick={() => tayorQilish(item.id)}
              >
                Tayor
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
