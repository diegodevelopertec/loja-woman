import { Product } from "./Products"
import { AddressType } from "./AddressType"



 export type RequestDataType={
    id:string | number,
    dateRequest:string | number,
    state:string,
    products:Product[]  ,
    address:AddressType,
    totalValueProduct:number
}
export type RequestType=RequestDataType[]