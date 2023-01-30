
export type Product={
    id:number | string,
    name:string,
    category:string,
    price: number,
    priceDefault:number ,
    imageProduct:string,
    images?:[],
    qdt:number,
    tamanho?:string,
    mumero?:string
}