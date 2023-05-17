import { CardDoubts } from "../../Components/CardDoubts"
import { Box,BoxContext, BoxImageDescription,BoxDoubts} from "./style"
import { useState } from "react"


type Doubts={
    id:string | number,
    title:string,
    response:string
}

let Doubts=[{
    id:1,
    title:'Quem Somos',
    response:`Se um usuário estiver logado e autenticado em uma aplicação, geralmente é possível exibir informações 
       básicas relacionadas ao seu cartão de pagamento para fornecer uma experiência personalizada. No entanto, é importante lembrar que você deve seguir as práticas de segurança e privacidade para proteger 
       as informações confidenciais do usuário. Aqui estão algumas informações que podem ser exibidas de forma segura para um usuário autenticado:
    `
},{
    id:2,
    title:'Como funciona o pagamentos?',
    response:`Se um usuário estiver logado e autenticado em uma aplicação, geralmente é possível exibir informações 
       básicas relacionadas ao seu cartão de pagamento para fornecer uma experiência personalizada. No entanto, é importante lembrar que você deve seguir as práticas de segurança e privacidade para proteger 
       as informações confidenciais do usuário. Aqui estão algumas informações que podem ser exibidas de forma segura para um usuário autenticado:
    `
},
{
    id:3,
    title:'Como funciona a entrega?',
    response:`Se um usuário estiver logado e autenticado em uma aplicação, geralmente é possível exibir informações 
       básicas relacionadas ao seu cartão de pagamento para fornecer uma experiência personalizada. No entanto, é importante lembrar que você deve seguir as práticas de segurança e privacidade para proteger 
       as informações confidenciais do usuário. Aqui estão algumas informações que podem ser exibidas de forma segura para um usuário autenticado:
    `
}]




export const AboutShopping=()=>{
    const [doubts,setdoubts]=useState<Doubts[] |[]>(Doubts)




    return <Box>    
        <h3>Sobre a LaddyModas</h3>
       <BoxContext>
        <BoxImageDescription>
            <div className="cx-image">
                <img src="https://marketplace.canva.com/EAFQQ1cjjYM/1/0/1600w/canva-black-week-banner-paisagem-roxo-lil%C3%A1s-e-branco-Iaf9cqyfxik.jpg" alt="" />
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nam eaque numquam amet ab aliquid 
                suscipit consequuntur. Reiciendis vitae quaerat repellat odio perferendis saepe est modi soluta consectetur nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nam eaque numquam amet ab aliquid 
                suscipit consequuntur. Reiciendis vitae quaerat repellat odio perferendis saepe est modi soluta consectetur nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nam eaque numquam amet ab aliquid 
                suscipit consequuntur. Reiciendis vitae quaerat repellat odio perferendis saepe est modi soluta consectetur nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nam eaque numquam amet ab aliquid 
                suscipit consequuntur. Reiciendis vitae quaerat repellat odio perferendis saepe est modi soluta consectetur nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nam eaque numquam amet ab aliquid 
                suscipit consequuntur. Reiciendis vitae quaerat repellat odio perferendis saepe est modi soluta consectetur nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis nam eaque numquam amet ab aliquid 
                suscipit consequuntur. Reiciendis vitae quaerat repellat odio perferendis saepe est modi soluta consecte
              </p>
            </div>
        </BoxImageDescription>
        <BoxDoubts>
            <h4>Dúvidas Frequentes</h4>
            {
              doubts.map((i,k)=>(
                <CardDoubts  doubts={i} key={k}/>
              ))
            }
        </BoxDoubts>
       </BoxContext>
    </Box>
}