import { ReactNode } from "react"
import { Box } from "./style"
import { useAuthContext } from "../hooks/useContextAuth"
import { useModalContext } from "../Context/modalContext"



type Props={
    children:ReactNode,
   
}

export const Modal=({children}:Props)=>{

    const {stateModal}=useModalContext()
    return <Box display={stateModal}>
        {children}
    </Box>
}