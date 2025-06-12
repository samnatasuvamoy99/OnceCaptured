import React from 'react'
import { Container, PostForm } from '../Components'
import service from '../appwrite/database'
import { useParams , useNavigate } from 'react-router-dom'

function EditPost() {
   const [post, setPost] = React.useState(null);
   const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      if (slug) {
        service.getPostBySlug(slug).then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate('/404'); // Redirect to 404 if post not found
          }
        }).catch((error) => {
          console.error('Error fetching post:', error);
          navigate('/404'); // Redirect to 404 on error
        });
      }
    }, [slug , navigate])
  return post ?(
    <div  className='container mx-auto py-8'>
      <Container>
      <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default EditPost