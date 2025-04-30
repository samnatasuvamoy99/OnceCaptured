import conf from "../conf/conf";
import { Client, Account,ID} from "appwrite";
  
    export class Authservice{
        client = new Client();
         account;   // we need a account bc  everything we will do this acc..

      constructor(){
         this.client
         .setEndpoint(conf.appwriteUrl) 
         .setProject(conf.appwriteProjectId);
         this.account = new Account(this.client);
         } 
         
         // sing up
         async createAccount({email, password, name}) {
            try {
                const user = await this.account.create(ID.unique(), email, password, name);
                 if(user){
                   return  this.login({email,password})
                 }
                 else{
                     return user;
                 }
            }
             catch (error) {
                  console.error("Error creating account:", error);
                     throw error;
             } 
         }

        //login 
         async login({email, password}){
                
             try{
                await this.account.createEmailSession(email,password);


             }
             catch(error){
                 throw error;
             }
         }

     // accutal they had any acc ?
      
     async getCurrentUser(){
            
            try{
                return await this.account.get();


            }
            catch(error){
               console.log("appwrite service:", error)

            }
             return null;

     }

     //logout

     async logout(){
          try{
               await this.account.deleteSession();
          }
          catch{
               console.log("appwrite service :: logout :: error" , error);
          }
          
     }

   }
   const authService = new Authservice();
   export default authService;