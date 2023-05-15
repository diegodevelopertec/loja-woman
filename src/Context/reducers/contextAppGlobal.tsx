import { createContext } from "react"
import { Product } from "../../Types/Products"
import { useState } from "react"



type CartType={
    productsCart:Product[],
    totalCart:number
}

type PropsContext={
   shareProduct: Product,
   setSharedProduct:(product:Product)=>void,
   cart:CartType,
   setToCart:(cart:CartType)=>void,
   addToCart:(product:Product)=>void,
   changeQdtProduct:(type:'+' | '-',id:number | string)=>void,
   removeToCart:(id:number | string)=>void,
   clearCart:()=>void,
}

const ContextGlobal=createContext<PropsContext>({
    shareProduct:{} as Product,
    setSharedProduct:(product:Product)=>{},
    cart:{
        productsCart:[],
        totalCart:0
    },
    setToCart:(cart:CartType)=>{},
    addToCart:(product:Product)=>{},
    removeToCart:(id:number | string)=>{},
    clearCart:()=>{},
    changeQdtProduct:(type:'+' | '-',id:number | string)=>{},
})

export const ContextProviderGlobal=()=>{
    const [shareProduct,setSharedProduct]=useState({} as Product)
    const [cart,setToCart]=useState({} as CartType)


    const addToCart=(product:Product)=>{
        setToCart({
            productsCart:[...cart.productsCart,product],
            totalCart:cart.totalCart+=product.price
        })
    }

    const removeToCart=(id:number | string)=>{
        let productId=cart.productsCart.find(i=>i.id === id)
        setToCart(
            {
                productsCart:[...cart.productsCart.filter(i=>i  !== productId)],
                totalCart:cart.totalCart -= productId!.price
            }
        )
    }
    const clearCart=()=>{
        setToCart({productsCart:[],totalCart:0})
    }


   const  changeQdtProduct=(type:'+' | '-',id:number | string)=>{
   
   }




    return <ContextGlobal.Provider value={{changeQdtProduct,cart,setSharedProduct,shareProduct,setToCart,addToCart,removeToCart,clearCart}}>
    
    </ContextGlobal.Provider>
}