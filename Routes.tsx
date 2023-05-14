import {Routes as Rotas ,Route} from 'react-router-dom'
import {ShoppingPage } from './src/Pages/ShoppingPage'
import { Showcase } from './src/Pages/Showcase'
import { AccountPage } from './src/Pages/AccountPage'
import { CartPage } from './src/Pages/CartPage'
import { LoginPage } from './src/Pages/LoginPage'
import { RegisterPage } from './src/Pages/RegisterPage'




export const Routes=()=>{
  
    return <>
            <Rotas>
             <Route path='/' element={<Showcase/>} />
             <Route path='/compras'  element={<ShoppingPage />} />
             <Route path='/cart'  element={<CartPage/>} />
             <Route path='/user'  element={<AccountPage/>} />
             <Route path='/login'  element={<LoginPage />} />
             <Route path='/register'  element={<RegisterPage />} />
          </Rotas>
  

           
    </>
}