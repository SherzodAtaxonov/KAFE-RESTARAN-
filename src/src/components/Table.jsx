import { useRef } from 'react'

export default function Table({ id, amount, onAdd, onClear }) {
  const ref = useRef()
  return (
    <div className="table-card">
      <h3>Stol #{id}</h3>
      <div className="table-amount">{amount.toLocaleString('uz-UZ')} so'm</div>
      <input ref={ref} type="number" placeholder="Summa" className="table-input" />
      <div className="table-buttons">
        <button className="btn btn-add" onClick={() => {
          const v = parseFloat(ref.current.value)
          if (!isNaN(v)) { onAdd(v); ref.current.value = '' }
        }}>Qo'sh</button>
        <button className="btn btn-clear" onClick={() => { onClear(); if (ref.current) ref.current.value = '' }}>Tozala</button>
      </div>
    </div>
  )
}
