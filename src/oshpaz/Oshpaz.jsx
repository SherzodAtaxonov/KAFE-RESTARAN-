import "./oshpaz.css";
function Oshpaz({ buyurtmalar, qabulQilish }) {
  return (
    <div className="page">
      <h1 className="title">
        👨‍🍳 Oshpaz Paneli
      </h1>

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

            {item.status === "kutilmoqda" && (
              <button
                onClick={() =>
                  qabulQilish(item.id)
                }
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

export default Oshpaz;