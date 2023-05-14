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
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'
import { Box,FormBox } from './style';



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
        <FormBox>
           

        </FormBox>
    </Box>
  
}