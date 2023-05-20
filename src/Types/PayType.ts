

export type PaymentType={
    id:number,
    holder:string,
    dataValidate:string,
    codeSecurity:string,
    type:'credito' | 'debito'
}