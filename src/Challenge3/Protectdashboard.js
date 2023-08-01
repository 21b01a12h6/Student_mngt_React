import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { store } from './Chal3'


const Protectdashboard = ({children}) => {
    
  const [logged] = useContext(store)
    console.log(logged)
        if(logged === false){
            return (<Navigate to="/"/>)
        }
        else{
            return children
        }  
}
export default Protectdashboard