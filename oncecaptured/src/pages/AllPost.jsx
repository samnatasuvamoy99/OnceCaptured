import React ,{useState ,  useEffect} from 'react'
 import { Container , PostCard } from '../Components'
 import service from '../appwrite/database'


function AllPost() {
     const [posts , setPost] =useState([])
     useEffect (() =>{
             
     } ,[])

     service.getpost([]).then((posts) =>{
            
              if(posts){
                  setPost(posts.documents)
              }
             })
  return (
    <div classname ='w-full py-8'>
        <Container>
           <div classname='flex flex-wrap'>
              {posts.map((post) => (
                <div key={post.$id} className='w-full md:w-1/2 lg:w-1/3 p-4'>
                  <PostCard
                    post={post}
                  />
                </div>
              ))}
            </div>
           
        </Container>
     </div>
  )
}

export default AllPost