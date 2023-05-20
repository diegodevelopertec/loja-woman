import { Box,CardInput,BoxFormButtons, BoxCardInputs,CardSelect, BoxPayments, BoxForm, BoxCard, CardImage, CardImageVersus } from "./style"
import React, { useState } from "react"
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'
import { CardPayments } from "../CardPayments"


type dataFormPay={

    titular:string,
    validateCode:string,
    numberCard:string,
    passwordCard:string,
    type:string,

}


export const FormDataPayments=()=>{
    const [disabled,setDisabled]=useState(true)
    const [formPay,setFormPay]=useState({
        titular:'Caio Gomes Soareas',
        numberCard:'353743273934-00',
        validatecode:224,
        passwordcard:'e4rrrrr',
        type:'',
        dateValidate:'05/22',
        dateCreate:'06/29',
    })
    
    const [newPaymentForm,setNewPaymentForm]=useState(false)
    const [payments,setPayments]=useState([{
        id:1,
        titular:'Caio Gomes Soareas',
        numberCard:'353743273934-00',
        validatecode:224,
        passwordcard:'e4rrrrr',
        type:'',
        dateValidate:'05/22',
        dateCreate:'06/29',
    },{
    
            id:2,
            titular:'André',
            numberCard:'353743273934-00',
            validatecode:224,
            passwordcard:'e4rrrrr',
            type:'',
            dateValidate:'05/22',
            dateCreate:'06/29',
        
    }])



    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }


  
    return <Box>
        {!newPaymentForm && <div className="new-pay">Adicionar novo Pagamento <button onClick={()=>setNewPaymentForm(true)}>+</button><hr /></div>}
       <BoxForm display={newPaymentForm}>
            <BoxCard>
                <CardImage>
                    <div className="card-top">
                        <div className="number">
                            <span>{formPay.numberCard}</span>
                        </div>
                        <div className="codes">
                            <div className="codes-code">
                                <span>{formPay.dateCreate}</span>
                                <span>{formPay.dateValidate}</span>
                            </div>
                            <div className="bandeira">
                               <img width="48" height="48" src="https://img.icons8.com/color/48/visa.png" alt="visa"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <span className="name-titular">{formPay.titular ? formPay.titular : 'Titular'}</span>
                    </div>
                </CardImage>
                <CardImageVersus>
                    dd
                </CardImageVersus>
            </BoxCard>
            <form action="" onSubmit={onSubmit}>
                    <BoxCardInputs>
                        <CardInput state>
                            <label htmlFor="">Nome do Titular:</label>
                            <input type="text" value={'Diego Dutra Morais'} disabled={disabled} />
                            <p>error</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Número do cartão:</label>
                            <input type="text" value={'diegodutramorais@gmail.com'} disabled={disabled} />
                            <p>error</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">CEP:</label>
                            <input type="text" disabled={disabled} value={'+5531996724550'}/>
                            <p>error</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Código de segurança (CVV/CVC):</label>
                            <input type="text" disabled={disabled} value={'eee96-04'}/>
                            <p>error</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Data de validade:</label>
                            <input type="text" disabled={disabled} value={'125.901.696-04'} />
                            <p>error</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Senha:</label>
                            <input type="text" disabled={disabled} value={'125.901.696-04'} />
                            <p>error</p>
                        </CardInput>
                        <CardSelect>
                            <select name="" id="">
                                <option value="">Crédito</option>
                                <option value="">Débito</option>
                            </select>
                        </CardSelect>
                    </BoxCardInputs>
                    <BoxFormButtons>
                        {!disabled && <button className="save" onClick={()=>setDisabled(true)}><img src={SaveIcon} alt="" />Salvar</button>}
                        {disabled && <div className="cx-btns">
                            <button className="edit" onClick={()=>setDisabled(false)}><img src={LapisIcon} alt="" /> Editar</button>
                            <button className="cancel" onClick={()=>setNewPaymentForm(false)} >Cancelar</button>
                        
                        </div>}
                    </BoxFormButtons>
                </form>
       </BoxForm>
    
    <BoxPayments>
        <h3>Seus Cartões</h3>
        {
            payments.length > 0 ? payments.map((i,k)=>(
                <CardPayments pay={i} key={k} />
            )) : <div>dd</div>
        }
    </BoxPayments>
    
    
    </Box>
}