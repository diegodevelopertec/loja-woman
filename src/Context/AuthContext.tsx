import { ReactNode, useState ,createContext, useEffect, useContext } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'
import { AddressType } from "../Types/AddressType";
import { RequestType } from "../Types/RequestType";
import { useApiUser } from "../Services/user.services";
import { toast } from "react-toastify";





type Props={
    children:ReactNode
}

type registerType={
    name:string,
    email:string,
    password:string,
    phone:string,
    cpf:string,
    photo?:string
}

type AuthType={
    user:UserType | null,
    address:AddressType | null,
    requestsHistory:RequestType | [],
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(data:registerType)=>any,
    updateUser:(data:registerType)=>any,
    Logout:()=>void
}

export const AuthContext=createContext<AuthType >(null!)

export const AuthProvider=({children}:Props)=>{

    useEffect(()=>{

        //Pegando token e dados do usuario do localstorage
        let userStorage =JSON.parse(localStorage.getItem('u') as string)
        let tokenStorage=localStorage.getItem('token') as string
        let addressRequests=JSON.parse(localStorage.getItem('addressRequests') as string)
        let requestsHistoryStorage=JSON.parse(localStorage.getItem('requestsHistory') as string)
    
    
    
        //setando dados do localStorage
        if(userStorage ||  tokenStorage || addressRequests || requestsHistoryStorage){
          setUser(userStorage)
          setAddress(addressRequests)
          setToken(tokenStorage)
          setRequestHistory(requestsHistoryStorage)
        }

    },[])

   
    const [user,setUser]=useState<UserType | null>(null)
    const [address,setAddress]=useState<AddressType | null>(null)
    const [token,setToken]=useState<string | null>()
    const [requestsHistory,setRequestHistory]=useState<RequestType >([])
 


    const registerUser=(data:registerType)=>{

       
        if(data){
             const tokenJson=uuid()
             setUser(data)
             setToken(tokenJson)
           
            localStorage.setItem('u',JSON.stringify(data))
            localStorage.setItem('token',JSON.stringify(tokenJson))
            let addressRequests=JSON.parse(localStorage.getItem('addressRequests') as string)
            setAddress(addressRequests)
        return true
        }

        return false
    }

   const LoginAuth=(email:string,password:string)=>{
      
            if(token && user){
                return true
            }
            return false
    }

    const Logout=()=>{
        if(user){
            setUser(null)
            localStorage.clear()
        }

    }
    
const updateUser=(data:registerType)=>{

       
    if(data !== user){
         const tokenJson=uuid()
         setUser(data)
         setToken(tokenJson)
         toast.success('Dados de conta alterados')
        localStorage.setItem('u',JSON.stringify(data))
        localStorage.setItem('token',JSON.stringify(tokenJson))
        let addressRequests=JSON.parse(localStorage.getItem('addressRequests') as string)
        setAddress(addressRequests)
    return true
    }

    return false
}



return <AuthContext.Provider value={{requestsHistory, address,LoginAuth,Logout,registerUser,user,updateUser}}>
    {children}
</AuthContext.Provider>

}


export const useAuth=()=>useContext(AuthContext)