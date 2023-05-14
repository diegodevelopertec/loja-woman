import { Box, BoxContent, BoxForm,CardInput,BoxButton,BoxFormInputs, CardInputFile, BoxBottom } from "./styled"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";



type InputTypes={
    email:string,
    password:string,
    name:string,
    phone:string;
    CPF:string;
}

export const RegisterPage=()=>{

    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required().min(6, 'Senha deve ter no mínimo 6 caracteres'),
        name:yup.string().required(),
        phone:yup.string().required().matches(/^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/, 'Telefone inválido'),
        CPF:yup.string().required('CPF inválido').matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
    }).required()


    const {register,handleSubmit,formState:{errors},reset}=useForm<InputTypes>({ resolver:yupResolver(schema) })
    
    
    
    const onSubmit=(data:InputTypes)=>{
        console.log(data);
        reset()
        
    }
     






    return <Box>
        <BoxContent>
            <h3>Cadastro</h3>
            <p>Cadastra-se para começar a comprar</p>
            <BoxForm>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                     <CardInputFile>
                                <input type="file" />
                    </CardInputFile>
                   <BoxFormInputs>
                        <CardInput>
                                <label htmlFor="">Nome</label>
                                <input type="text" placeholder="Nome Completo"  {...register('name')} />
                                <p>{errors.name?.message}</p>
                            </CardInput>
                            <CardInput>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="Melhor Email"  {...register('email')} />
                                <p>{errors.email?.message}</p>
                            </CardInput>
                            <CardInput>
                               <label htmlFor="">Telefone</label>
                                <input type="text" placeholder="Digite seu Telefone"  {...register('phone')} />
                                <p>{errors.phone?.message}</p>
                            </CardInput>
                        
                            <CardInput>
                                <label htmlFor="">CPF</label>
                                <input type="text" placeholder="Digite seu CPF"  {...register('CPF')} />
                                <p>{errors.CPF?.message}</p>
                            </CardInput>
                            <CardInput>
                                <label htmlFor="">Senha</label>
                                <input type="text" placeholder="Digite sua senha"  {...register('password')} />
                                <p>{errors.password?.message}</p>
                            </CardInput>
                   </BoxFormInputs>
                   <BoxButton>
                         <button type="submit">Enviar</button>
                   </BoxButton>
                     <BoxBottom>
                        <p>Já tem uma conta?<Link  to='/login'> Clique aqui</Link></p>
                     </BoxBottom>
                </form>


            </BoxForm>
        </BoxContent>
       
    
    </Box>
}