import React from 'react'
import "./afissant.css";
import { useState } from "react";

function Afitsant({ buyurtmalar, setBuyurtmalar }) {
  const [taom, setTaom] = useState("");
  const [stol, setStol] = useState("");

  const qoshish = () => {
    if (!taom || !stol) return;

    const yangi = {
      id: Date.now(),
      taom,
      stol,
      status: "kutilmoqda",
    };

    setBuyurtmalar([...buyurtmalar, yangi]);

    setTaom("");
    setStol("");
  };

  return (
    <div className="page">
      <h1 className="title">
        🧑‍💼 Afitsant Paneli
      </h1>

      <div className="form">
        <input
          type="text"
          placeholder="Taom nomi"
          value={taom}
          onChange={(e) => setTaom(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stol raqami"
          value={stol}
          onChange={(e) => setStol(e.target.value)}
        />

        <button onClick={qoshish}>
          ➕ Buyurtma yuborish
        </button>
      </div>

      <div className="cards">
        {buyurtmalar.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.taom}</h2>

            <p>🪑 Stol: {item.stol}</p>

            <p>
              Status:
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Afitsant;