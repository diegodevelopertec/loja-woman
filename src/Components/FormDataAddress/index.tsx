import { Box,CardInput,BoxFormButtons, BoxCardInputs } from "./style"
import { useState } from "react"
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'
import { Button } from "antd"


export const FormDataAddress=()=>{
    const [disabled,setDisabled]=useState(true)

    return <Box>
        <form action="">
            <BoxCardInputs>
                <CardInput state>
                    <label htmlFor="">Rua:</label>
                    <input type="text" value={'Diego Dutra Morais'} disabled={disabled} />
                    <p>error</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Bairro:</label>
                    <input type="text" value={'diegodutramorais@gmail.com'} disabled={disabled} />
                    <p>error</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">CEP:</label>
                    <input type="text" disabled={disabled} value={'+5531996724550'}/>
                    <p>error</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Cidade/Estado:</label>
                    <input type="text" disabled={disabled} value={'eee96-04'}/>
                    <p>error</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Bairro:</label>
                    <input type="text" disabled={disabled} value={'125.901.696-04'} />
                    <p>error</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Complemento:</label>
                    <input type="text" disabled={disabled} value={'125.901.696-04'} />
                    <p>error</p>
                </CardInput>
            </BoxCardInputs>
            <BoxFormButtons>
                {!disabled && <button className="save"><img src={SaveIcon} alt="" />Salvar</button>}
                {disabled && <div className="cx-btns">
                    <button className="edit" onClick={()=>setDisabled(false)}><img src={LapisIcon} alt="" /> Editar</button>
                    <button className="cancel" >Cancelar</button>
                
                </div>}
            </BoxFormButtons>
        </form>
    
    
    
    </Box>
}