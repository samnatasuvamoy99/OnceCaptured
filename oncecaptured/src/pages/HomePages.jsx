import React ,{useEffect, useState}from 'react'
import service from '../appwrite/database'
import { Container, PostCard } from '../Components'

function HomePages() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
       service.getpost().then((response) => {
        if (response) {
          setPosts(post.documents);
        }
      })
      
  }, []);

  if(post.length === 0) {
    return (
      <div>No posts available</div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {post.map((post) => (
            <div key={post.$id} className='w-full md:w-1/2 lg:w-1/3 p-4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
      
      
  )
}

export default HomePages