import { useState,useEffect } from 'react'
import{useDispatch} from'react-redux'
import authService from './appwrite/auth'
import { login , logout} from './store/authSlice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
   // make this        
   const [loading , SetLoading]=useState(true)
   const dispatch =useDispatch()

   useEffect ( () =>{
           authService.getCurrentUser()
           .then( (userData) =>{
             if (userData){
                 dispatch(login({userData}))
             } else{
                 dispatch(logout())
             }

           })
           .finally( () => SetLoading(false))
   } ,[])

   // ask loge in ?/ yes or  no;
   
  return  !loading ?(
     <div className='min-h-screen flex-wrap content-between bg-gray-500'>
         <div>
            <Header/>
            <main>
                TODO :<Outlet/>
            </main>
            <Footer/>
         </div>
     </div>
  ) :null
}

export default App
