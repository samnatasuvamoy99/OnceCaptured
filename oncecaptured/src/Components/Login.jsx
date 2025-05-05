import React from 'react'
import{Link, useNavigate} from 'react-router-dom'
import{login as authlogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import {Button ,Logo, Input} from './Button'
import authService from '../appwrite/auth'
import{useForm} from 'react-hook-form'

function Login() {
  const navvigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error , setError] = React.useState(null)

   const login = async (data) => {
          setError("")
         try{
             const session = await authService.login(data)
              if(session){
                    const user = await authService.getCurrentUser()
                    dispatch(authlogin(user))
                    navvigate('/')
              }
              else{
                    setError("Invalid email or password")
              }
         }
         catch(error){
              setError(error.message)
         }
              
   }
  return (
    <div
      className='flex flex-col items-center justify-center h-screen bg-gray-100'
      >
         <div className='bg-white p-8 rounded shadow-md w-96'>
            <div className='flex items-center justify-center mb-4'>
                    <span className='text-2xl font-bold text-gray-700'>
                        <Logo width="100px" />
                    </span>
            </div>
            <h2 className='text-2xl font-bold text-center mb-4'> Sign in your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
           {error && <p className='text-red-500 text-center'>{error}</p>}
            
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                 
                 <div className='space-y-5'>

                       {/*... email submit...*/}
                       <Input 
                         label="Email"
                         placeholder="Enter-your-Name"
                         type="email"
                         {...register("email" ,{
                           required:true,
                           validate:{
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                           }


                         })}
                       />

                      {/*... password submit..*/}
                        

                      <Input
                          label="Password"
                          placeholder="Enter-your-password"
                          type="password"
                          {...register("password" ,{
                              required:true,
                          })}

                      />
                     
                     {/*... submit button..*/}

                     <Button 
                     className="w-full"
                     type="Submit"
                       >
                           Sign in
                      </Button>                      
                 </div>
            </form>
         </div>
      </div>
  )
}

export default Login