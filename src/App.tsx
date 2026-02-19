import { useState } from 'react'

import './index.css'

function App() {

  const [result, setResult] = useState('0')
    
  function addNumber(s: string){
    let l = result.at(-1)
    if (result.charAt(0)=='0'){
      setResult(s)
    }else if (!(Boolean(l)!=false && isNaN(Number(l))&& s=='0')){
      setResult(result + s)
    }
  }

  function addOperand(s: string){
    let l = result.at(-1)
    if (l!=undefined && l>='0' && l<='9'){
      setResult(result+s)
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
          <button 
            className="operator"
            onClick={()=>addOperand('+')}
            >+</button>
          <button onClick={()=>addNumber('4')}>4</button>
          <button onClick={()=>addNumber('5')}>5</button>
          <button onClick={()=>addNumber('6')}>6</button>
          <button 
            className="operator"
            onClick={()=>addOperand('-')}>-</button>
          <button onClick={()=>addNumber('7')}>7</button>
          <button onClick={()=>addNumber('8')}>8</button>
          <button onClick={()=>addNumber('9')}>9</button>
          <button 
            className="operator"
            onClick={()=>addOperand('*')}
            >×</button>
          <button onClick={()=>addNumber('0')}>0</button>
          <button>,</button>
          <button className="equals">=</button>
          <button 
            className="operator"
            onClick={()=>addOperand('/')}>÷</button>
          <button className="clear" onClick={()=>setResult('0')}>C</button>
          <button className="clear" >&#9003;</button>
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
