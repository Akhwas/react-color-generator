import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'



function App() {
  
  const[color,setColor]=useState(origin)
  const[list,setList]=useState(new Values('#f15025').all(10))
  const [error,setError]=useState(false)
  const submitHandler = (e)=>{
    e.preventDefault()
    setError(false)
    try {
      let colors = new Values (color).all(10)
      
      
      
      setList(colors)
      console.log(colors)

    } catch (error) {
      setError(true)
      console.log(error)
    }

  }
  return <><section className='container'>
    <h3>
      color generator
      </h3>
    <form>
    <input type='text' placeholder='#f15025' onChange={(e)=>setColor(e.target.value)} className ={`${error? 'error':null}`}></input>
    <button className='btn' value ={color} onClick={submitHandler}>submit button</button>
  </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
        return <SingleColor {...color} key={index} index={index}/>
      })}

    </section>
  </>
}

export default App
