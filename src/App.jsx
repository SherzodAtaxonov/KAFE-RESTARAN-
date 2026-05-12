import { useState } from "react";
import Oshpaz from "./oshpaz/Oshpaz";
import Admin from './admin/Admin'
import Kasser from './Kasser/Kasser'
import Afitsant from './afitsant/Afitsant'
import './App.css'

function App() {
  const [buyurtmalar, setBuyurtmalar] = useState([
    {
      id: 1,
      stol: 5,
      taom: "Osh",
      status: "kutilmoqda",
    },
    {
      id: 2,
      stol: 2,
      taom: "Lagmon",
      status: "kutilmoqda",
    },
    {
      id: 3,
      stol: 3,
      taom: "Manti",
      status: "kutilmoqda",
    },
  ]);

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
      <Oshpaz
        buyurtmalar={buyurtmalar}
        qabulQilish={qabulQilish}
      />
    </div>
  );
}


export default App;