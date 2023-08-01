import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Stud from './Stud'
import Grades from './Grades'
import Courses from './Courses'
import Localsto from './Localsto'
import Navbar from './Navbar'
import Param from './Param'
import Pgnt from './Pgnt'
import Protectdashboard from './Protectdashboard'


export const store = createContext();
const Chal3 = () => {


const [data,setData] = useState(false)
console.log(data)

  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='students' element={<Stud/>}>
          <Route path='param/:id' element={<Param/>}/>
          </Route>          
        <Route path='course' element={<Courses/>}/>
        <Route path='*' element={<Pgnt/>}/>
        
               
            <Route path='local' element={
            <store.Provider value={[data,setData]}>
            <Localsto/>
            </store.Provider>
}/>      
        <Route path='grades' element={
        <store.Provider value={[data,setData]}>
            <Protectdashboard>
              <Grades/>
            </Protectdashboard>
        </store.Provider>
          } />
        


      </Routes>
    </div>
  )
}

export default Chal3
