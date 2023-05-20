import axios from "axios"
import { baseURL } from "./config"


type UserType={
    id:number,
    token?:string,
    name:string,
    email:string,
    phone:string,
    photo?:string,
    cpf:string,
    password:string
}
type userData={
    name:string,
    email:string,
    phone:string,
    cpf:string,
    password:string
}

export const useApiUser={

    RegisterUser:async(userData:userData):Promise<UserType | boolean >=>{
           try{
                let res=await axios.post(`${baseURL}/users`,userData)
                return res.data
           }catch(e){
            console.log(e);
            return false
            
           }
    },
    
    LoginUser:async(email:string,password:string)=>{
        try{
            let res=await axios.post(`${baseURL}/login`,{email,password})
            return true
        }catch(e){
            console.log(e);
            return false
        
       }
      
    },
    
    getUser:()=>{
    



    },
    updateUser:async(user:UserType)=>{
       try{
        let res=await axios.put(`${baseURL}/${user.id}`,user)
        return res.data
       }catch(e){
        console.log(e)
        return  false
       }

    }
  

}