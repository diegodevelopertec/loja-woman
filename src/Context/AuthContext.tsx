import { ReactNode, useState ,createContext, useEffect, useContext } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'
import { AddressType } from "../Types/AddressType";
import { RequestDataType, RequestType } from "../Types/RequestType";
import { useApiUser } from "../Services/user.services";
import { toast } from "react-toastify";



type PaymentType={
    id:number,
    titular:string,
    validateCode:string,
    dateValidity:string,
    nameCard:string,
    numberCard:string,
    passwordCard:string,
    type:string,
}


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
    setAddress:(address:AddressType)=>void,
    ClearAddress:()=>void,
    requests:RequestType | null,
    setRequest:(data:RequestType)=>void,
    addRequest:(data:RequestDataType)=>void,
    removeRequest:(id:number | string)=>void,
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(data:registerType)=>any,
    updateUser:(data:registerType)=>any,
    Logout:()=>void,
    payments:PaymentType[],
  //  setPayment:(payList:PaymentType[])=>void,
    addPayCard:(data:PaymentType)=>void,
    removePayCard:(id:number)=>void


}

export const AuthContext=createContext<AuthType >(null!)

export const AuthProvider=({children}:Props)=>{

    const [user,setUser]=useState<UserType | null>(null)
    const [address,setAddress]=useState<AddressType | null>(null)
    const [token,setToken]=useState<string | null>()
    const [requests,setRequest]=useState<RequestType>([] as RequestType)
    const [payments,setPayment]=useState<PaymentType[]>([] as PaymentType[])


  

    useEffect(()=>{

        //Pegando token e dados do usuario do localstorage
        let userStorage =JSON.parse(localStorage.getItem('u') as string)
        let tokenStorage=localStorage.getItem('token') as string
        let addressStorage=JSON.parse(localStorage.getItem('address') as string)
        let requestsStorage=JSON.parse(localStorage.getItem('requests') as string)
    
    
    
        //setando dados do localStorage
        if(userStorage ||  tokenStorage || addressStorage || requestsStorage){
          setUser(userStorage)
          setAddress(addressStorage)
          setToken(tokenStorage)
          setRequest(requestsStorage)
        }
       console.log(userStorage)
       console.log(addressStorage);
       console.log(requestsStorage);
    
    },[])

   
 


    const registerUser=(data:registerType)=>{

       
        if(data){
             const tokenJson=uuid()
             setUser(data)
             setToken(tokenJson)
           
            localStorage.setItem('u',JSON.stringify(data))
            localStorage.setItem('token',JSON.stringify(tokenJson))
          
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
            setAddress(null)
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
         setAddress(JSON.parse(localStorage.getItem('addressRequests') as string))
    return true
    }

    return false
}



const  ClearAddress=()=>{
    setAddress(null)
}


const addRequest=(data:RequestDataType)=>{
    setRequest([data,...requests])
    localStorage.setItem('requests',JSON.stringify([...requests,data]))
}
const removeRequest=(id:number | string)=>{
    let newList=requests.filter(i=>i.id !== id)
    localStorage.setItem('requests',JSON.stringify(newList))
    setRequest(newList)
   
}

const addPayCard=(data:PaymentType)=>{
    setPayment([data,...payments])
    toast.success('cartao adicionado')

}
const removePayCard=(id:number | string)=>{
    let newList=payments.filter(i=>i.id !== id)
    setPayment(newList)
    toast.success('cartao deletado')
}

return <AuthContext.Provider value={{addPayCard,payments,removePayCard,setRequest,addRequest,removeRequest,ClearAddress,requests,setAddress, address,LoginAuth,Logout,registerUser,user,updateUser}}>
    {children}
</AuthContext.Provider>

}


export const useAuth=()=>useContext(AuthContext)