import React, { useContext, useRef } from 'react'
import './cha.css'
import { store } from './Chal3'


const Localsto = () => {
    const user = useRef()
    const pass = useRef()
    const [value,setValue] = useContext(store)


    const Addata=()=>{
        console.log(user.current.value)
        console.log(pass.current.value)
        localStorage.setItem("username",user.current.value)
        localStorage.setItem("password",pass.current.value)    
        setValue(true)
    }
  
  return (
    <div>
    <div className='box'>
        <input ref={user} placeholder="Enter Username" className='un'/><br></br>
        <input type="password" ref={pass} placeholder="Enter password" className='pd'/><br></br><br></br>
      <button onClick={Addata} className="submit">Login</button>
  
        </div>
       
        
        </div>
  )
}

export default Localsto
