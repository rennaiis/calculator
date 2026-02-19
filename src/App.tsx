import { useState } from 'react'

import './index.css'

function App() {
  const [result, setResult] = useState(0)
  return (
    <>
      <div className='calculator'>
        <div className='display'>{result}</div>
        <div className='buttons'></div>
        <div className='buttons'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="operator">+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="operator">-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="operator">×</button>
          <button>0</button>
          <button>,</button>
          <button className="equals">=</button>
          <button className="operator">÷</button>
          <button className="clear">C</button>
          <button className="clear">&#9003;</button>
          <button 
            className="increment"
            onClick={()=>setResult((prev: number)=>prev+1)}
            >+1</button>
          <button 
            className="increment"
            onClick={()=>setResult((prev:number)=>prev-1)}
          >-1</button>
        </div>
      </div>
    </>
  )
}

export default App
