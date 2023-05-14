import {Routes as Rotas ,Route} from 'react-router-dom'
import {DeliveryPage } from './src/Pages/DeliveryPage'
import { Showcase } from './src/Pages/Showcase'
import { AccountPage } from './src/Pages/AccountPage'
import { CartPage } from './src/Pages/CartPage'
import { LoginPage } from './src/Pages/LoginPage'
import { RegisterPage } from './src/Pages/RegisterPage'




export const Routes=()=>{
  
    return <>
            <Rotas>
             <Route path='/' element={<Showcase/>} />
             <Route path='/compras'  element={<DeliveryPage/>} />
             <Route path='/cart'  element={<CartPage/>} />
             <Route path='/user'  element={<AccountPage/>} />
             <Route path='/login'  element={<LoginPage />} />
             <Route path='/register'  element={<RegisterPage />} />
          </Rotas>
  

           
    </>
}