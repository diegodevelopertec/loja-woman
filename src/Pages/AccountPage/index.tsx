import * as S from './style'
import './../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import { useContextApp } from '../../hooks/useContextApp';
import { Box,BoxDataAccount,BoxDataPay,BoxDataAddress } from './style';
import LoginIcon from '/public/imgs/login.png'
import PayIcon from '/public/imgs/pay.png'
import AddressIcon from '/public/imgs/address.png'
import { FormDataAccount } from '../../Components/FormDataAccount';
import { FormDataAddress } from '../../Components/FormDataAddress';
import { FormDataPayments } from '../../Components/FormDataPayments';
import { Link } from 'react-router-dom';








export const AccountPage=()=>{
    const {user}=useAuthContext()

    return <Box>
        <h3>Seus Dados</h3>
        <BoxDataAccount>
           <h3><img src={LoginIcon} alt="" />Dados de Login/Usuário</h3>
            {user !== null ? <FormDataAccount /> : <S.NotLogged>
                <p>Crie uma conta ou Faça Login<Link to={'/register'}>Clique aqui</Link></p>
                <hr />
             </S.NotLogged>
           }
        </BoxDataAccount>
        <BoxDataPay>
           <h3><img src={PayIcon} alt="" />Dados de Pagamento</h3>
            {user !== null ? <FormDataPayments/> : <S.NotLogged>
                <p>Crie uma conta ou Faça Login<Link to={'/register'}>Clique aqui</Link></p>
                <hr />
                </S.NotLogged>
            }
        </BoxDataPay>
        <BoxDataAddress>
            <h3><img src={AddressIcon} alt="" />Dados de Endereço</h3>
            {user !== null ? <FormDataAddress/> : <S.NotLogged>
                <p>Crie uma conta ou Faça Login<Link to={'/register'}>Clique aqui</Link></p>
                </S.NotLogged>
            }
        </BoxDataAddress>
    </Box>
  
}