import * as S from './style'
import {useEffect, useState } from 'react'
import { Product } from '../../Types/Products';
import { useContextApp } from '../../hooks/useContextApp';
import { toast } from "react-toastify"

type Props={
    funcOffModal:()=>void;
     data:Product ,
 
}

export const CardCliked=({funcOffModal,data}:Props)=>{
    
    const [qdtProduct,setQdtProduct]=useState(1)
    const [priceModal,setPriceModal]=useState(data.price)
    const {state,dispatch}=useContextApp()
    
   
 

const actionsModal={
    addQdtProduct:()=>{
        setQdtProduct(prev=>prev + 1) 
        setPriceModal(data.price + priceModal) 
    } ,
    minusQdtProduct:()=>{
        if(qdtProduct > 1){
           setQdtProduct(prev=>prev-1)  
           setPriceModal(priceActual=>priceActual - data.price) 
        }
    }
    
}

const setData=()=>{

   let newProduct:Product | null = {
        id: data.id,
        category: data.category,
        name: data.name,
        imageProduct: data.imageProduct,
        qdt:qdtProduct, 
        price: priceModal,
        priceDefault:data.price
    }
    
    dispatch({
        type:'addProduct',
        payload:{
           data: newProduct
        }
    })
    newProduct=null
   funcOffModal()
  
  

}


    return <S.Container>
        <S.ContainerImage>
           <img src={`${data?.imageProduct}`} alt="" />
        </S.ContainerImage>
        <S.ContainerData>
            <S.BoxDataTop>
                <div className="cx-name">
                   <span className='name'>  {data.name.length > 30 ? data.name.slice(0,27) + '...' : data.name}</span>
                </div>
               
                <div className="cx-price">
                    <div className="price-modal">
                        R$ {priceModal.toFixed(2)}
                    </div>
                </div>
            </S.BoxDataTop>
            <S.BoxDataBottom>
               <div className="cx-qdt">
                    <p>Selecione uma quantidade desejada:</p>
                    <div className='area-btn-qdt'>
                        <div className='container-btn-add'>
                            <button className='btn-minus' onClick={actionsModal.minusQdtProduct}> - </button>
                            <div className='btn-qdt'> {qdtProduct} </div>
                            <button className='btn-add' onClick={actionsModal.addQdtProduct}> + </button>
                        </div>
                    </div>
                    <p>Você está adicionando <span className='qdt-modal'>{qdtProduct } {qdtProduct === 1 && data.category !== 'Blusas'  ? data.category.replace('s','') : data.category}</span></p>
               </div>
               <div className="cx-buttons">
                        <button className='btn-cancel' onClick={funcOffModal}>voltar</button>
                    <button className='btn-save' onClick={()=>setData()}>adicionar ao carrinho</button> 
            </div>
            </S.BoxDataBottom>
        </S.ContainerData>
    </S.Container>
}