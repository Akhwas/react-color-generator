import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index,rgb,weight}) => {
  const [alert,setAlert]=useState(false)
useEffect(()=>{let timeout = setTimeout(()=>setAlert(false),3000);
return ()=>clearTimeout(timeout)},[alert])
  const bga = rgb.join(',')
  const hexa = rgbToHex(...rgb)
  return <article className={` ${index > 10 && 'color-light'}`} style={{backgroundColor : `rgb(${bga})`}} onClick={
  
    ()=>setAlert(true)}>
  <p className='percent-value'>
  {weight}%
  </p>
  <p className='color-value'>{hexa}</p>
  {alert&&<p className='alert color-value ' >copied to clipboard</p>}
  </article>
}

export default SingleColor
