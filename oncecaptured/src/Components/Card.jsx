import React from 'react'
import{Link} from 'react-router-dom'
function Card( {$id , title,featuredImage}) {
  return (
         <Link to={`/post/${id}`}>
             <div className='bg-white shadow-md rounded-lg overflow-hidden'>
               <div className='w-full justify-center mb-4'>

                <img  src={appwriteservice.getFilepreview (featuredImage)} alt={title} className='rounded-xl'/>

               </div>
                   <h1 className='text-center text-xl font-semibold text-gray-800'>
                    {title}   
                   </h1>
             </div>
         </Link>
  )
}

export default Card