import { useState } from 'react'
import './App.css'
import Admin from './admin/Admin'
import Afitsant from './afitsant/Afitsant'
import Kasser from './Kasser/Kasser'
import Oshpaz from './oshpaz/Oshpaz'

function App() {
  const [panel, setPanel] = useState(null)

  const renderPanel = () => {
    switch (panel) {
      case 'admin':
        return <Admin />
      case 'afitsant':
        return <Afitsant />
      case 'kasser':
        return <Kasser />
      case 'oshpaz':
        return <Oshpaz />
      default:
        return <div className="panel-placeholder">Tugmalardan birini bosing</div>
    }
  }

  return (
    <div className="app-container">
      <h1>KAFE RUTBASI</h1>
      <div className="button-row">
        <button onClick={() => setPanel('admin')}>Admin</button>
        <button onClick={() => setPanel('afitsant')}>Afitsant</button>
        <button onClick={() => setPanel('kasser')}>Kasser</button>
        <button onClick={() => setPanel('oshpaz')}>Oshpaz</button>
      </div>

      <div className="panel-card">
        {renderPanel()}
      </div>
    </div>
  )
}

export default App
