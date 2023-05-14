import { Link } from 'react-router-dom'
import LojaIcon from '../../assets/imgs/logo.png'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import '../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import { Box,CardInput,BoxBottom,BoxForm,BoxLogin} from './style';


type InputTypes={
    email:string,
    password:string
}



export const LoginPage=()=>{
    const {LoginAuth}=useAuthContext()

    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required().min(6, 'Senha deve ter no mínimo 6 caracteres')
    }).required()
    
    
    const {register,handleSubmit,formState:{errors},reset}=useForm<InputTypes>({ resolver:yupResolver(schema) })
    
    
    
    const onSubmit=(data:InputTypes)=>{
      //  LoginAuth(data.email,data.password)
        reset()
    }
     
    return <Box>
        <BoxLogin>
            <h3>Entrar</h3>
            <BoxForm>
                <form action=""  onSubmit={handleSubmit(onSubmit)}>
                  <CardInput>
                    <input type="text" placeholder='Digite seu email' {...register('email')} />
                    <p>{errors.email?.message}</p>
                  </CardInput>
                  <CardInput>
                    <input type="text"  placeholder='Digite sua senha' {...register('password')}  />
                    <p>{errors.password?.message}</p>
                  </CardInput>
                 <div className="cx-btn">
                    <button type='submit'>Entrar</button>
                 </div>
                </form>
            </BoxForm>
            <BoxBottom>
              <p>Não tem uma conta?<Link to={'/register'}>Clique aqui</Link></p>
            </BoxBottom>
        </BoxLogin>
       
    </Box>
}