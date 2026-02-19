import { useState } from 'react'

import './index.css'

function App() {

  const [result, setResult] = useState('0')
    
  function addNumber(s: string){
    if (result.charAt(0)=='0'){
      setResult(s)
    }else{
      setResult(result + s)
    }
  }
  return (
    <>
      <div className='calculator'>
        <div className='display'>{result}</div>
        <div className='buttons'></div>
        <div className='buttons'>
          <button onClick={()=>addNumber('1')}>1</button>
          <button onClick={()=>addNumber('2')}>2</button>
          <button onClick={()=>addNumber('3')}>3</button>
          <button className="operator">+</button>
          <button onClick={()=>addNumber('4')}>4</button>
          <button onClick={()=>addNumber('5')}>5</button>
          <button onClick={()=>addNumber('6')}>6</button>
          <button className="operator">-</button>
          <button onClick={()=>addNumber('7')}>7</button>
          <button onClick={()=>addNumber('8')}>8</button>
          <button onClick={()=>addNumber('9')}>9</button>
          <button className="operator">×</button>
          <button onClick={()=>addNumber('0')}>0</button>
          <button>,</button>
          <button className="equals">=</button>
          <button className="operator">÷</button>
          <button className="clear">C</button>
          <button className="clear">&#9003;</button>
          <button 
            className="increment"
            onClick={()=>setResult((prev: string)=>String(Number(prev)+1))}
            >+1</button>
          <button 
            className="increment"
            onClick={()=>setResult((prev:string)=>String(Number(prev)-1))}
          >-1</button>
        </div>
      </div>
    </>
  )
}

export default App
