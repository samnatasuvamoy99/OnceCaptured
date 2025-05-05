import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import{Button,Input,Select,RTE} from'../index'
import service from '../../appwrite/database'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm(post) {
     const{register,control,handleSubmit,watch,setValu,getValues} =useForm({
         defaultValues:{
               title:post?.title || "",
                slug:post?.slug || "",
                content:post?.content || "",
                status :post?.status || "draft",
         }
        })
      const navigate = useNavigate()
       const userData= useSelector(state => state.user.userData)

       {/*... if post is available  then edit....*/}

          const submit = async(data) =>{
                 if(post){
                    {/*.... data react hook mean picture automaticlay provide  ....*/}
                  const file=  data.image[0] ? service.uploadFile(data.image[0]):null;

                  if(file){
                      service.deleteFile(post.featuredImage)
                  }

                  const deletepost = await service.updatePost( post.$id , {
                         ...data,
                         featureImage : file ? file.$id : undefined,

                  } )

                    if(deletepost){
                              navigate(`/post/${deletepost&id}`)
                    }

                 }
                    
                 else{
                     {/*.. user have no post then he/she  will be create a new post...*/}  
                         const file = await service.updatePost(data.image[0]);
                         if(file){
                              const fileid =file.$id
                                  data.featureImage =fileid
                                const postnew=  await service.creaetePost({
                                     ...data,
                                     userId:userData.$id,
                                  })
                                  if(postnew){
                                       navigate(`/post/${postnew.$id}`)
                                  }
                         }
                             
                 }
          }

          
      
  return (
        
  )
}

export default PostForm