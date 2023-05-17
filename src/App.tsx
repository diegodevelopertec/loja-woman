import * as S from '../styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from '../Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import UserIcon from '.././src/assets/imgs/user.png'
import LojaIcon from '.././src/assets/imgs/lojaicon.png'
import ComprasIcon from '././assets/imgs/comprasIcon.png'
import { HeaderTopMobile } from './Components/HeaderTopMobile';
import CartIcon from '.././src/assets/imgs/cart.png'
import InterIcon from  './../public/imgs/intericon.png'



const App=()=>{

  return <S.Body>
        <S.LeftContent>
            <S.Menu>
              <ButtonMenu 
                  src={LojaIcon}
                  link={'/'}  
                  marginhorizontal='10' 
                  text='inicio'
                  marginvertical='10' 
              />
              <ButtonMenu 
                    link={'/cart'}  
                    src={CartIcon} 
                    marginhorizontal='10' 
                    marginvertical='10' 
                    text='compras'
              />
              <ButtonMenu 
                  link={'/compras'}  
                  src={ComprasIcon} 
                  marginhorizontal='10' 
                  marginvertical='10' 
                  text='compras'
              />
              <ButtonMenu  
                 src={UserIcon} 
                 link={'/user' }
                 marginhorizontal='10' 
                 marginvertical='10' 
                 text='conta'
            />
             <ButtonMenu  
                 src={InterIcon} 
                 link={'/sobre' }
                 marginhorizontal='10' 
                 marginvertical='10' 
                 text='conta'
            />
            </S.Menu>
        </S.LeftContent>

        <S.RightContent>
          <HeaderTopMobile />
            <Routes/>
          <ToastContainer />
        </S.RightContent>
  </S.Body>
}

export default App