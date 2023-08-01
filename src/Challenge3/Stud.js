import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Stud = () => {
  const arr=['21b01a12h6','21b01a12J0','21b01a12h2','21b01a12E4','21b01a12E9','21b01a12I0']
  
  return (
    <div>
      
      <Outlet/>
      {
        arr.map(
          (item)=>
          <div>
            <Link to={'param/'+item}>{item}</Link>
          </div>
        )
      }
    </div>
  )
}

export default Stud
