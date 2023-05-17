import { useState } from "react"
import { Box ,BoxResponse,BoxTop} from "./style"


type Doubts={
    id:string | number,
    title:string,
    response:string
}

type Props={
    doubts:Doubts
}


export const CardDoubts=({doubts}:Props)=>{
    const [openCard,setOpenCard]=useState(false)
    return <Box>
        <BoxTop>
           <p>{doubts.title}</p>
           <button onClick={()=>!openCard ? setOpenCard(true) : setOpenCard(false)}>{openCard ? '-' : '+'}</button>
        </BoxTop>
        <BoxResponse display={openCard}>
          <p>{doubts.response}</p>
        </BoxResponse>
    </Box>
}