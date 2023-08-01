import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Param = () => {
    const student = useParams()
  return (
    <div>
        <Outlet/>
      <h2 style={{marginLeft:"250px"}}>My id is:{student.id} </h2>
    </div>
  )
}

export default Param
