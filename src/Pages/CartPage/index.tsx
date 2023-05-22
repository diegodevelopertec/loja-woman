import { Box, BoxDataCart, BoxTop } from "./style"
import { BoxCart } from "./style"
import { BoxButtons } from "./style"
import { useContextApp } from "../../hooks/useContextApp"
import { useState,useEffect } from "react"
import { Product } from "../../Types/Products"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/useContextAuth"
import uuid from 'uuid'
import { ProductBad } from "../../Components/ProductBad"
import { toast } from "react-toastify"

export const CartPage=()=>{
    const {state,dispatch}=useContextApp()
    let   [products,setProducts]=useState<Product[]>(state.products)
    const navigate=useNavigate()
    const {user,address}=useAuthContext()
    const [total,setTotalValues]=useState(0)

    useEffect(()=>{
        setProducts(state.products) 
        setTotalValues(state.products.reduce((prevPrice:any,nextPrice:Product)=>prevPrice + nextPrice.price , 0 ) )
       
      },[state.products,state.requests])

      const setDataToRequests=()=>{
       if(user !== null && address !== null){
            let data={
                id: '',
                dateRequest:Date.now(),
                state: 'entregue',
                products: products,
                address: address,
                totalValueProduct:total
            }
            if(data.products.length > 0 ){
                    dispatch({   type:'setDataToRequest', payload:{data}})
                    state.products=[]
                    navigate('/compras')
            }

      
        } else if(user  === null){
            toast.error('Faça login ou crie uma conta')
        }else if(address  === null){
         toast.error('Cadastre um endereço')
        }
      }


     const ClearCart=()=>{
        dispatch({type:'clearListProducts'})
     }


    return <Box>
        <BoxTop>
            <h3>Meu Carrinho</h3>
        </BoxTop>
        <BoxCart>
        {products.length > 0 ?  <div className="area-listproduct">
                  {state.products.length  &&  state.products.map((item,index)=>(
                         <ProductBad key={index} data={item} />)) 
                  }
               </div>: <div className="error-cart">
                   <p>Carrinho Vazio</p>
               </div>
        }
        <BoxDataCart>
           <div className="table">
            <div className="left">
                    <span>Desconto</span>
                    <span>Taxa Entrega</span>
                    <span>Total</span>
                </div>
                <div className="right">
                    <span>R$ 0</span>
                    <span>R$ 0</span>
                    <span>R${total.toFixed(2)}</span>
                </div>
           </div>
        </BoxDataCart> 
        </BoxCart>
        <BoxButtons>
            <button className="cancel" onClick={()=>ClearCart()}>Limpar Carrinho</button>
            <button className="finalize" onClick={()=>setDataToRequests()}>Finalizar Compra</button>
        </BoxButtons>
    </Box>
}