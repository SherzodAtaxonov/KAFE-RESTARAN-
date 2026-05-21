import { useState } from 'react'

export default function Calculator() {
  const [expr, setExpr] = useState('')
  const press = (s) => setExpr(prev => prev + s)
  const clear = () => setExpr('')
  const equal = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(expr || '0')
      setExpr(String(res))
    } catch {
      setExpr('Error')
    }
  }

  return (
    <div className="calculator-card">
      <h3>Kalkulyator</h3>
      <div className="calc-display">{expr || '0'}</div>

      <div className="calc-body">
        <div className="digits">
          <button className="btn" onClick={() => press('7')}>7</button>
          <button className="btn" onClick={() => press('8')}>8</button>
          <button className="btn" onClick={() => press('9')}>9</button>

          <button className="btn" onClick={() => press('4')}>4</button>
          <button className="btn" onClick={() => press('5')}>5</button>
          <button className="btn" onClick={() => press('6')}>6</button>

          <button className="btn" onClick={() => press('1')}>1</button>
          <button className="btn" onClick={() => press('2')}>2</button>
          <button className="btn" onClick={() => press('3')}>3</button>

          <button className="btn" onClick={() => press('0')}>0</button>
          <button className="btn" onClick={() => press('.')}>.</button>
          <button className="btn btn-clear" onClick={clear}>C</button>
        </div>

        <div className="ops">
          <button className="btn btn-op" onClick={() => press('/')}>/</button>
          <button className="btn btn-op" onClick={() => press('*')}>*</button>
          <button className="btn btn-op" onClick={() => press('-')}>-</button>
          <button className="btn btn-op" onClick={() => press('+')}>+</button>
          <button className="btn btn-equals" onClick={equal}>=</button>
        </div>
      </div>
    </div>
  )
}
