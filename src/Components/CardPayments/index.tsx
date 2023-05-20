import { Box,BoxLeft,BoxRight } from "./style"

type PaymentsType={
    id:number,
    titular:string,
    numberCard:string,
    validatecode:number,
    passwordcard:string | number,
    type:string,
    dateValidate:string,
    dateCreate:string


}

type Props={
    pay:PaymentsType
}

export const CardPayments=({pay}:Props)=>{
    return <Box>
    <BoxLeft>
        <span>{pay.titular}</span>
        <span>{pay.numberCard.padEnd(4,'****')}</span>
        <span>{pay.validatecode}</span>
    </BoxLeft>
    <BoxRight>
        <button>Deletar</button>
        <button>Editar</button>
    </BoxRight>
    
    </Box>
}