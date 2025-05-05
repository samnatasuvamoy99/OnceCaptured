import  React,{ useState } from "react"
import {Link ,useNavigate} from 'react-router-dom'
import {Button ,Logo, Input} from './Button'
import { useForm } from "react-hook-form"
import authService from "../appwrite/auth"
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice"
import authService from "../appwrite/auth"


function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error , setError] = useState(null)

    const signup = async(data) =>{
           setError("")
           try{
               const session= await authService.createAccount(data)
                
                if(session){
                      const user = await authService.getCurrentUser()
                     
                      if(user){
                          dispatch(login(user))
                          navigate('/')
                      }
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
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
      <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
         <h2 className="text-2xl font-bold text-center mb-4">Create your account</h2>  
          
         <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signup)} className="mt-8 space-y-5">
                    <div className="">
                         <Input
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true })}
                            />
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
                <button>
                  <Button type="submit" className="w-full mt-4">
                      Sign Up
                  </Button>
                </button>
            </div>
          </form>
      </div>
         
    </div>

  )
}

export default Signup