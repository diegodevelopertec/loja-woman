import { useState } from 'react'
import * as S from './style'
import { ProductRequest } from '../ProductRequest'
import { RequestDataType} from '../../Types/RequestType'
import closeIcon from './../../assets/imgs/close.png'
import openIcon from './../../assets/imgs/setbaixo.png'
import lixeiraIcon from './../../assets/imgs/lixeira.png'
import { useAuthContext } from '../../hooks/useContextAuth'
import { toast } from 'react-toastify'

type Props={
    dataRequests:RequestDataType
}

export const Requests=({dataRequests}:Props)=>{
  
    const [openBody,setOnBody]=useState(false)
    const {address,removeRequest}=useAuthContext()

    const setBodyRequest=()=>{
        !openBody  ? setOnBody(true) : setOnBody(false)
    }
    const removeRequestData=(id:string | number)=>{
        removeRequest(id)
        toast.success('removido do historico')
    }

    return <S.Container>
        <S.RequestHeader>
           <div className="info">
                <span>{dataRequests.dateRequest}</span>
                <span>{dataRequests.state}</span>
           </div>
           <div className="cx-btns">
                <button className="btn-del" onClick={()=>removeRequestData(dataRequests.id)}>
                    <img src={lixeiraIcon} />
                    <span>apagar</span>
                </button>
                <button className="abrir" onClick={setBodyRequest}>
                     <img src={!openBody ? openIcon : closeIcon}/>
                     <span>{!openBody ? 'Detalhes' : 'fechar'}</span>
                </button>
           </div>
        </S.RequestHeader>
        <S.RequestBody openBody={openBody}>
             <S.AreaProduct>
                <h4>Produtos</h4>
                <div className='cx-products'>
                    {dataRequests.products.map((item,index)=>(
                           <ProductRequest data={item} key={index} />
                    ))}
                </div>
              </S.AreaProduct>
               
              <S.AreaAdress>
                    <h4>Endereço</h4>
                   <p><strong>Rua</strong>{address?.rua}</p>
                   <p><strong>Bairro</strong>:{address?.bairro}</p>
                   <p><strong>numero</strong>:{address?.numero}</p>
                   <p><strong>complemento</strong>:{address?.logradouro}</p>
                   <p><strong>Cidade/EStado</strong>:{address?.cidadeEstado}</p>
                   <p><strong>cep</strong>:{address?.cep}</p>
              </S.AreaAdress>
              <S.AreaDetails>
                <h4>Detalhes</h4>

                    <div className="linha">
                       <span>Desconto </span> <span> 00 </span>
                    </div>
                    <div className="linha">
                       <span>taxa de Entrega</span> <span> 00 </span>
                    </div>
                    <div className="linha">
                       <span>Total</span> <span> R$ {dataRequests.totalValueProduct.toFixed(2)}</span>
                    </div>
              </S.AreaDetails>
        </S.RequestBody>
    </S.Container>

}