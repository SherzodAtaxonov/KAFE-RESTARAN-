import { useState } from "react";
import "./App.css";

import Afitsant from "./afitsant/Afitsant";
import Oshpaz from "./oshpaz/Oshpaz";

function App() {
  const [page, setPage] = useState("afitsant");

  const [buyurtmalar, setBuyurtmalar] = useState([]);

  const qabulQilish = (id) => {
    const yangi = buyurtmalar.map((item) =>
      item.id === id
        ? { ...item, status: "qabul qilindi" }
        : item
    );

    setBuyurtmalar(yangi);
  };

  return (
    <div>
      <div className="navbar">
        <button onClick={() => setPage("afitsant")}>
          Afitsant
        </button>

        <button onClick={() => setPage("oshpaz")}>
          Oshpaz
        </button>
      </div>

      {page === "afitsant" ? (
        <Afitsant
          buyurtmalar={buyurtmalar}
          setBuyurtmalar={setBuyurtmalar}
        />
      ) : (
        <Oshpaz
          buyurtmalar={buyurtmalar}
          qabulQilish={qabulQilish}
        />
      )}
    </div>
  );
}

export default App;