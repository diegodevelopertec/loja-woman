import { ReactNode, createContext, useContext, useState } from "react";

type Props={
    children:ReactNode
}

export type context={
    stateMenuMobile:boolean,
    handleStateMenuMobile:(state:boolean)=>void,
}

const ContextMenuMobile=createContext<context>({
    stateMenuMobile:false,
    handleStateMenuMobile:(state:boolean)=>{},
})

export const MenuMobileProvider=({children}:Props)=>{
    const  [stateMenuMobile,handleStateMenuMobile]=useState(false)


    return <ContextMenuMobile.Provider value={{handleStateMenuMobile,stateMenuMobile}}>
           {children}
        </ContextMenuMobile.Provider>

}
export const useMenuMobile=()=>useContext(ContextMenuMobile)