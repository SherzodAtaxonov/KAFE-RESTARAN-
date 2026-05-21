import React from "react";

function Oshpaz({ buyurtmalar, qabulQilish }) {
  return (
    <div>
      <h1>Oshpaz</h1>
      <ul>
        {buyurtmalar.map((item) => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <div>Stol: {item.stol}</div>
            <div>Taom: {item.taom}</div>
            <div>Status: {item.status}</div>
            <button onClick={() => qabulQilish(item.id)}>
              Qabul qilish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Oshpaz;
