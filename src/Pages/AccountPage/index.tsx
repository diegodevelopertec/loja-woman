import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
import './../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import { useContextApp } from '../../hooks/useContextApp';
import {v4 as uuid} from 'uuid'
import { useModalLogin } from '../../hooks/useModeLogin';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box,BoxDataAccount,BoxDataPay,BoxDataAddress } from './style';
import LoginIcon from '/public/imgs/login.png'
import PayIcon from '/public/imgs/pay.png'
import AddressIcon from '/public/imgs/address.png'
import { FormDataAccount } from '../../Components/FormDataAccount';

//#DFDCDC

type InputTypes={
    name:string,
    rua:string,
    numeroCasa:string
    complemento:string,
    bairro:string,
    email:string,
    telefone:string,
    password:string
   
}





export const AccountPage=()=>{

    return <Box>
        <h3>Seus Dados</h3>
        <BoxDataAccount>
           <h3><img src={LoginIcon} alt="" />Dados de Login/Usuário</h3>
           <FormDataAccount />
        </BoxDataAccount>
        <BoxDataPay>
           <h3><img src={PayIcon} alt="" />Dados de Pagamento</h3>

        </BoxDataPay>
        <BoxDataAddress>
           <h3><img src={AddressIcon} alt="" />Dados de Endereço</h3>

        </BoxDataAddress>
    </Box>
  
}