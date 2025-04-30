import React from 'react'
import {logo,Container,LogoutBtn} from '../index'
import { Link, useNavigation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import{useNavigate} from 'react-router-dom'

//user login he or not tab logout button kam kare ge 
function Header() {
    const  authStatus = useSelector((state) => state.auth.status)

    const navigate= useNavigate()
    
    // jo jo active he o display kare ge ui me 
    const navItems =[
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
    ]
  return (
    <header className="py-3 bg-gray-500 shadow">
      <Container >
         <nav className="flex items-center justify-between">
             <div className="flex items-center">
                <Link to='/'>
                   <logo className="h-10 w-10 mr-2" />
                </Link>           
            </div>

            <ul className='flex space-x-4'>
                   {
                      // item active or  not dkhna he ..............
                    navItems.map( (items)=> 
                       items.active ? (
                        <li key={items.name}>
                          <button onClick ={
                              () =>{
                                  navigate(items.slug)
                              }
                          } className='inline-bock px-6 py-2 duration-200
                           hover:bg-blue-100 
                          rounded-full'>
                               
                          </button>
                            
                        </li>
                       ) : null

                    )}

                  {
                    // logout
                       authStatus && (
                        <li>
                            <LogoutBtn/>

                        </li>
                       )    
                  }
            </ul>
         </nav>
      </Container>

      </header>

   
  )
  
}

export default Header
