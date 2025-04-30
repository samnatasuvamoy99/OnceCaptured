import conf from "../conf/conf";
import{Client ,ID , Databases ,Storage,Query} from "appwrite"

export class Service{
       client =new Client;
       databases;
       storage;


       constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.storage= new Storage(this.client)
        } 
    
    // create [post]


    async creaetePost({ title , slug , content , featureImage, status , userId}){
         try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
             
         }
         catch( error){
            console.log(" Appwrite error service :: createPOst ::error" ,error);
            
         }
    }
    
    //updsate 
    async updatePost( slug,{ title , content , featureImage, status}){
        try{
           return await this.databases.updateDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
                slug,
               
               {
                   title,
                   content,
                   featureImage,
                   status,
                   userId
               }
           )
            
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
} 

  // delete post
   async deletePost(slug){
        try{
           return await this.databases.deleteDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
                slug
           )
            
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
} 

//getposts how to pickup a post in databse
    async getpost(){
        try{
           return await this.databases.getDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               
           )
            
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
    }
   
//get all posts

    async getAllPosts(queries =[Query.equal("status", "active")]){
        try{
           return await this.databases.listDocuments(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               queries,


               
           )
            
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
    }


    //File section , Storage section
    //upload File
    async uploadFile(file){
        try{
           return await this.storage.createFile(
               conf.appwriteBucketId,
               ID.unique(),
               file
           )
            
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
  
      }

      //delete file
      async deleteFile(fileId){
        try{
           return await this.storage.deleteFile(
               conf.appwriteBucketId,
               fileId
           )
           
           
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
  
      }

      //File preview

      async getFilePreview(fileId){
        try{
           return  this.storage.getFilePreview(
               conf.appwriteBucketId,
               fileId
           )
            
        }
        catch( error){
           console.log(" Appwrite error service :: createPOst ::error" ,error);
           
        }
  
      }
}
const service = new Service();
export default service
