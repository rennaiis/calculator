import { useState } from 'react'

import './index.css'

function App() {
  return (
    <>
      <div className='calculator'>
        <div className='display'>s</div>
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
          <button className="clear-all">C</button>
          <button className="clear">&#9003;</button>
        </div>
        <div className="increment-buttons">
          <button className="increment">+1</button>
          <button className="increment">-1</button>
        </div>
      </div>
    </>
  )
}

export default App
