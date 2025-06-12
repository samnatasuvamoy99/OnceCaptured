import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from "../index";
import service from '../../appwrite/database'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm(post) {
     const{register,control,handleSubmit,watch,setValu,getValues} =useForm({
         defaultValues:{
               title:post?.title || "",
                slug:post?.slug || "",
                content:post?.content || "",
                status :post?.status || "active",
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

        {/*..... regex....*/}
           const  slugTransform  =useCallback((value) =>{
               if( value && typeofvalue ==='string')
                  return value
                  .trim()
                  .toLowerCase()
                  .replace(/^[a-zA-Z\d\s] + /g , '_') 
                  .replace(/\s/g , '_')


                  return ''

           } ,[])


        React.useEffect( () =>{
             const subcription = watch ((value ,{name}) =>{
                    if ( name == 'title'){
                           setValu('slug' , slugTransform(value.title ,{shouldValidate : true}))
                    }
             })

             return () =>{
                     subcription.unsubcription()
             }
             
        },[watch , slugTransform , setValu])
      
  return (

       // form

     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValu("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>

                </div>
                </form>
  );
}

export default PostForm