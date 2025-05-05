import React from 'react'
  import React,{useEffect , useState } from 'react'
 import { useNavigate } from 'react-router-dom'
  import { useSelector } from 'react-redux'
  

 export default function Protected( {children ,authentication = true}) {
  const navigate = useNavigate()
  const [loading , setLoading] = useState(true)

  const  userauthenticated = useSelector((state) => state.auth.status)

  {/*. user authentication checking...  */}

  useEffect(() => {
    const checkAuth = () => {
      if(authentication && userauthenticated !==authentication){
        navigate('/login')
      }
      else if(!authentication && userauthenticated !=="authentication"){
        navigate('/')
      }
      setLoading(false)
    }
    
  },[ userauthenticated , authentication , navigate])
  return 
         loading ? <h1>Loading...</h1> :<>{children}</>
    
}

