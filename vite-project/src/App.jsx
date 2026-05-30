
<<<<<<< HEAD
=======
function App() {
  const [panel, setPanel] = useState(null)
  const [buyurtmalar, setBuyurtmalar] = useState([])

  const renderPanel = () => {
    switch (panel) {
      case 'admin':
        return <Admin />
      case 'afitsant':
        return <Afitsant buyurtmalar={buyurtmalar} setBuyurtmalar={setBuyurtmalar} />
      case 'kasser':
        return <Kasser />
      case 'oshpaz':
        return <Oshpaz buyurtmalar={buyurtmalar} qabulQilish={(id) => {
          const yangi = buyurtmalar.map((item) =>
            item.id === id ? { ...item, status: 'qabul qilindi' } : item
          )
          setBuyurtmalar(yangi)
        }} tayorQilish={(id) => {
          const yangi = buyurtmalar.map((item) =>
            item.id === id ? { ...item, status: 'tayor' } : item
          )
          setBuyurtmalar(yangi)
        }} />
      default:
        return null
    }
  }

  return (
    <div className="app-container">
      <h1>KAFE RUTBASI</h1>

      {panel === null ? (
        <div className="button-row">
          <button onClick={() => setPanel('admin')}>Admin</button>
          <button onClick={() => setPanel('afitsant')}>Afitsant</button>
          <button onClick={() => setPanel('kasser')}>Kasser</button>
          <button onClick={() => setPanel('oshpaz')}>Oshpaz</button>
        </div>
      ) : (
        <div className="panel-card">
          {renderPanel()}
          <button className="logout-button" onClick={() => setPanel(null)}>
            Chiqish
          </button>
        </div>
      )}
    </div>
  )
}

export default App
>>>>>>> 833a18261c09179ccdea5bd63127b77290c239d6
