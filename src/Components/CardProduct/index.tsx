import { Product } from '../../Types/Products'
import * as S from './style'


type Props={
    data?:Product,
    onClick:(dataCard:any)=>void
}
export const CardProduct=({data,onClick}:Props)=>{

 

const ClickData=()=>onClick(data)

    return <S.Container >
        <S.ContainerImage>
            <img src={`${data?.imageProduct}`}/>
        </S.ContainerImage>
        <S.DataProduct>
            <S.InfoProduct>
                <span className='category--name'>{data?.category}</span>
                    <h4>{data?.name} </h4>
                    <hr />
                    <p className="price">
                        R$ {data?.price.toFixed(2)}
                    </p>
            </S.InfoProduct>
            <div className="cx-btn-product">
               <button onClick={ClickData}>detalhes</button>
            </div>
        </S.DataProduct>
    </S.Container>
}