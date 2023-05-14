import { Box, BoxShopping } from './style'
import { Requests } from '../../Components/Requests'
import { useContextApp } from '../../hooks/useContextApp'
import ErrorIcon from './../../assets/imgs/erroricon.png'
import {useAuthContext} from './../../hooks/useContextAuth'
import { useEffect, useState } from 'react'
import { RequestType } from '../../Types/RequestType'
import { UserType } from '../../Types/UserType'


export const DeliveryPage=()=>{
 
 
  const {state,dispatch}=useContextApp()
  const {address,requestsHistory}=useAuthContext()
  const userStorage:UserType=JSON.parse(localStorage.getItem('u') as string)
 

  


const FilterRequestsPending= state.requests.filter(item=>item.state === 'pendente')
const FilterRequestsDelivered=state.requests.filter(item=>item.state === 'entregue') 




useEffect(()=>{
  localStorage.setItem('requestsHistory',JSON.stringify(FilterRequestsDelivered))
  console.log(requestsHistory);
},[state.requests])




    return <Box>
        <h3>Compras</h3>
        <BoxShopping>
          {
            FilterRequestsDelivered.length > 0 ?   FilterRequestsDelivered.map((i,k)=>(
              <Requests dataRequests={i} key={k} />
            )) : <div className='error-request'>
                <p>Nenhuma compra feita</p>
            </div>
          }
      

        </BoxShopping>


    </Box>
}