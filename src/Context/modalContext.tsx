import { ReactNode, useState ,createContext, useContext } from "react";
import { UserType } from "../Types/UserType";

type Props={
    children:ReactNode
}

type stateModalType={
    stateModal:boolean,
    handleStateModal:(state:boolean)=>void
}



export const modalContext=createContext<stateModalType >(null!)

export const ModalProvider=({children}:Props)=>{
    let [stateModal,handleStateModal]=useState(false)
  
return <modalContext.Provider value={{stateModal,handleStateModal}}>
    {children}
</modalContext.Provider>

}


export const useModalContext=()=>useContext(modalContext)