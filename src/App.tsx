import * as S from '../styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from '../Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import UserIcon from '.././src/assets/imgs/user.png'
import LojaIcon from '.././src/assets/imgs/lojaicon.png'
import ComprasIcon from '././assets/imgs/comprasIcon.png'
import ZapIcon from  './../public/imgs/zap.png'
import InstaIcon from  './../public/imgs/insta.png'
import FaceIcon from  './../public/imgs/face.png'


const App=()=>{

  return <S.Body>
        <S.LeftContent>
            <S.Menu>
              <ButtonMenu 
                  src={LojaIcon}
                  link={'/'}  
                  marginhorizontal='10' 
                  text='inicio'
                  marginvertical='10' />
              <ButtonMenu 
                  link={'/compras'}  
                  src={ComprasIcon} 
                  marginhorizontal='10' 
                  marginvertical='10' 
                  text='compras'/>
                    
              <ButtonMenu  
                 src={UserIcon} 
                 link={'/user' }
                 marginhorizontal='10' 
                 marginvertical='10' 
                 text='conta'/>
            </S.Menu>
        </S.LeftContent>

        <S.RightContent>
          <S.HeaderApp>
            <S.CardLoja>
              <div className="logo">
                <span>laddyMODAS</span>
              </div>
              <div className='cx-icons-media'>
                  <span>Se conecte com a gente : </span>
                 <a href=""> <img src={FaceIcon} /></a>
                 <a href=""> <img src={InstaIcon} /></a>
                 <a href=""> <img src={ZapIcon} /></a>
                </div>
             
            </S.CardLoja>
          
          </S.HeaderApp>
          <Routes/>
         <ToastContainer />
        </S.RightContent>
  </S.Body>
}

export default App