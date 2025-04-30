import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
  const dispatch = useDispatch();
   const logoutHandler = () => {
      authService.logout()
      .then(() => {
        dispatch(logout())
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
   }
  return (
    <button onClick={logoutHandler} className='bg-red-500 text-white px-4 py-2 rounded-md'>Logout</button>
  )
}

export default LogoutBtn