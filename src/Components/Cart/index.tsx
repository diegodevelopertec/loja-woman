import {  useEffect } from 'react'
import {   useState } from 'react'
import { ProductBad } from '../ProductBad'
import { useContextApp } from '../../hooks/useContextApp'
import { Product } from '../../Types/Products'
import { Navigate, useNavigate } from 'react-router-dom'
import * as S from './style'
import  {v4 as uuid} from 'uuid'
import BadIcon from '../../assets/imgs/sacola.png'
import  openBadIcon from '../../assets/imgs/setbaixo.png'
import CloseBadIcon from '../../assets/imgs/close.png'
import ErrorIcon from '../../assets/imgs/erroricon.png'
import { useModalLogin } from '../../hooks/useModeLogin'
import { useAuthContext } from '../../hooks/useContextAuth'
import CartIcon from   '../../assets/imgs/cart.png'

type Props={
     onClick:()=>void
 } 

 let date=new Date()

export const Cart=()=>{
    const {state,dispatch}=useContextApp()
    let   [products,setProducts]=useState<Product[]>(state.products)
    const [total,setTotalValues]=useState(0)
    const [displayCart,setDisplayCart]=useState(false)
    const [notification,setNotification]=useState(false)
    const navigate=useNavigate()
    let {stateModal,handleStateModal}=useModalLogin()
    const {user,address}=useAuthContext()
 
 

    useEffect(()=>{
      setProducts(state.products) 
      setTotalValues(state.products.reduce((prevPrice:any,nextPrice:Product)=>prevPrice + nextPrice.price , 0 ) )
     
    },[state.products,state.requests])




 
 const clickDisplayCart=()=>{
       if(!displayCart){
           setDisplayCart(true)
           setNotification(false)
       }else{
         setDisplayCart(false)
      }
   }


 const setDataToRequests=()=>{
    let data={
        id: uuid(),
        dateRequest:date.toLocaleDateString(),
        state: 'entregue',
        products: products,
        address: address,
        totalValueProduct:total
    }

    if(user === null){
        handleStateModal(true)
        setDisplayCart(false)
        
    }else{
        dispatch({   
            type:'setDataToRequest',
            payload:{data}
        })
       
    
        
       state.products=[]
       navigate('/compras')
    }
   


 }


    return <S.Container displayBad={displayCart}>
        <S.BadHeader displayBad={displayCart} onClick={ !displayCart  ? clickDisplayCart : ()=> null}>
            <div className="header--text">
                <img src={CartIcon} alt="" /><span>Carrinho[<span className='qdt-sacola'>{state.products.length}</span>]</span>
            </div>
            <div  onClick={clickDisplayCart}  className='close--bad'>
             {displayCart ? <img src={CloseBadIcon}  alt="" /> : <img className='open-icon' src={openBadIcon}  alt="" />} 
             
            </div>
            <S.NotificationBad displayBad={notification}> 2 </S.NotificationBad >
        </S.BadHeader>

        <S.BadBody displayBad={displayCart}>
              {products.length > 0  ? <> 
               <div className="area-listproduct">
                  {state.products.length  &&  state.products.map((item,index)=>(
                         <ProductBad key={index} data={item} />)) 
                  }
               </div>
                <div className='area-address'>
                    {user  &&  address !== null ?
                       <>
                         <em>Rua {address?.rua} </em>  
                         <em>Bairro {address?.bairro} </em>  
                         <em>numero {address?.numero} </em> 
                       </>
                          :'Faça Login/Cadastro para adicionar um endereço'
                    }
                                    
                </div>
                <div className="area-final-cupom">
                    <input type="text" />
                    <div className="data-compra">
                        <div className="data-item">
                            <span>Desconto</span>
                            <span>R$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Taxa de Entrega</span>
                            <span>R$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Total</span>
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                    </div>
                <button onClick={()=>setDataToRequests()}>finalizar compra</button>
                </div>
              </>  : <div className='error-bad'>
                        <h3>Nenhum produto adicionado ainda </h3>
                        <img  src={ErrorIcon} />
              </div>
           }
            
        </S.BadBody>
        
    </S.Container>



}