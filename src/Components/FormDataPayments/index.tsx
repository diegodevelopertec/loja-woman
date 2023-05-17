import { Box,CardInput,BoxFormButtons, BoxCardInputs,CardSelect, BoxPayments, BoxForm } from "./style"
import React, { useState } from "react"
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'
import { Button, Divider } from "antd"
import { CardPayments } from "../CardPayments"


export const FormDataPayments=()=>{
    const [disabled,setDisabled]=useState(true)
    const [newPaymentForm,setNewPaymentForm]=useState(false)
    const [payments,setPayements]=useState([{
        id:1,
        titular:'Caio',
        numberCard:'353743273934-00',
        validatecode:224,
        passwordcard:'e4rrrrr',
    },{
    
            id:2,
            titular:'André',
            numberCard:'353743273934-00',
            validatecode:224,
            passwordcard:'e4rrrrr',
        
    }])



    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }


  
    return <Box>
        {!newPaymentForm && <div className="new-pay">Adicionar novo Pagamento <button onClick={()=>setNewPaymentForm(true)}>+</button><hr /></div>}
       <BoxForm display={newPaymentForm}>
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
                                <legend >Tipo:</legend>
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