import {Routes as Rotas ,Route} from 'react-router-dom'
import {DeliveryPage } from './src/Pages/DeliveryPage'
import { Showcase } from './src/Pages/Showcase'
import { AccountPage } from './src/Pages/AccountPage'





export const Routes=()=>{
  
    return <>
            <Rotas>
             <Route path='/' element={<Showcase/>} />
             <Route path='/pedidos'  element={<DeliveryPage/>} />
             <Route path='/user'  element={<AccountPage/>} />
           
          </Rotas>
  

           
    </>
}