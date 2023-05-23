import { Box, BoxShopping } from './style'
import { Requests } from '../../Components/Requests'
import {useAuthContext} from '../../hooks/useContextAuth'
import { useEffect, useState } from 'react'
import { UserType } from '../../Types/UserType'


export const ShoppingPage=()=>{
 
 
  const {address,requests,setRequest}=useAuthContext()
  const userStorage:UserType=JSON.parse(localStorage.getItem('u') as string)
 

useEffect(()=>{
   localStorage.setItem('requests',JSON.stringify(requests)as string)
   setRequest(JSON.parse(localStorage.getItem('requests') as string))
},[])



    return <Box>
        <h3>Compras</h3>
        <BoxShopping>
              {
            requests!.length > 0 ?  requests!.map((i,k)=>(
                <Requests dataRequests={i} key={k} />
              )) : <div className='error-request'>
                  <p>Nenhuma compra feita</p>
              </div>
            }
        </BoxShopping>
    </Box>
}