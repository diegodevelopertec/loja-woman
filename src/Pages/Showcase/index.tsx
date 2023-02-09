import { useEffect, useState } from "react" 
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import { dataBlusas } from "../../data/Product"
import { ButtonMenuCategory } from "../../Components/ButtonMenuCategory"
import { CardCliked } from "../../Components/CardProductCliked"
import { dataShorts } from "../../data/Product"
import { dataIntima } from "../../data/Product"
import {Cart } from "../../Components/Cart"
import { ThemeStyle } from "../../../styled"
import { LoginModal } from "../LoginModal"
import { useContextApp } from "../../hooks/useContextApp"
import { BannerPromotions } from "../../Components/BannerPromotions"
import { useModalLogin } from "../../hooks/useModeLogin"
import { useAuthContext } from "../../hooks/useContextAuth"
import  womanBurguer from './../../assets/imgs/banner_main_rf.png'
import  womanBannerMain from './../../../public/imgs/bannerImage.png'
import BlusaIcon from  './../../../public/imgs/blusasicon.png'
import CalcinhaIcon from  './../../../public/imgs/calcinhaicon.png'
import ShortsIcon from  './../../../public/imgs/jeans.png'

export const Showcase=()=>{
   
    const {stateModal,handleStateModal}=useModalLogin()
    const {state,dispatch}=useContextApp()
    const [blousesProductList,setBlousesProductList]=useState<Product[] >(dataBlusas)
    const [shortsProductList,setShortsProductList]=useState<Product[]>(dataShorts)
    const [pantiesProductList,setPantiesProductList]=useState<Product[] >(dataIntima)
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [displayBlouses,setDisplayBlouses]=useState<boolean>(true)
    const [displayShorts,setDisplayShorts]=useState<boolean>(false)
    const [displayRestaurant,setDisplayRestaurant]=useState<boolean>(false)
    const [displayPanties,setDisplayPanties]=useState<boolean>(false)
    const [stateModalToCard,setModalToCard]=useState(false)
    const isLogged=stateModal
    let {user}=useAuthContext()
  


 


 


    const actionDisplayBlouses=()=>{
        setDisplayBlouses(true)
        setDisplayShorts(false)
        setDisplayPanties(false)
  
    }
    const actionDisplayPizzas=()=>{
        setDisplayBlouses(false)
        setDisplayShorts(true)
        setDisplayPanties(false)
    
    }
    const actionDisplayDrinks=()=>{
        setDisplayBlouses(false)
        setDisplayShorts(false)
        setDisplayPanties(true)
       
    }
   

    //função de setar dados de cada car para o card modal
    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        setModalToCard(true)
   
    }


 
   
 

    const conditionCategoryTitle=()=>{
        if(displayBlouses){
            return 'Blusas'
        }else if(displayPanties){
            return 'Calcinhas'
        }else if(displayShorts){
            return 'Shorts'
        }
    }

  
return <S.Container>
       
     
     
    {  <S.ContainerCaseLogged className="cx-logado">
                <div className="area-img">
                    <img src={womanBannerMain} alt="" />
                </div>
                <div className="area-text">
                        <div className="txt">
                            <h4>Bem vindo {user?.name}</h4>
                            <p>Aqui com a gente é :</p>
                        </div>
                    
                      <div className="cx-spans">
                                <span>Pediu</span>
                                <span>Logou</span>
                                <span>Chegou</span>  
                        </div>
                  
                       
                </div>
     </S.ContainerCaseLogged>
     }

    <S.CategorySectionProducts>
      <>
      <p>Selecione uma categoria :</p>
        <div className="cx-btn-icons">
            <ButtonMenuCategory  bg={ThemeStyle.bgTheme} 
                 iconActive={displayBlouses ? true : false} 
                 src={BlusaIcon} 
                 marginhorizontal='10' marginvertical='10'  
                 onClick={actionDisplayBlouses}
                 id='btnHome'
                
            />
            <ButtonMenuCategory bg={ThemeStyle.bgTheme} 
                iconActive={displayPanties? true : false} 
                src={CalcinhaIcon} 
                marginhorizontal='10' 
                marginvertical='10'  
                onClick={actionDisplayDrinks} 
                id='btnHome'
            />
            <ButtonMenuCategory bg={ThemeStyle.bgTheme} 
                iconActive={displayShorts ? true : false} src={ShortsIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayPizzas} 
                id='btnHome'
            />
           
           
        </div>
        <p className="category-title">Produtos: <span>{conditionCategoryTitle()}</span> </p>
      </>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct stateDisplay={displayRestaurant}> 
       <>
        { displayBlouses ? blousesProductList && blousesProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayShorts? shortsProductList && shortsProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayPanties ? pantiesProductList && pantiesProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
       
        <Cart />
       </>
     
    </S.ShowcaseProduct>
   
    {stateModalToCard && <S.ContainerModal>
        <CardCliked   data={dataProductCliked} funcOffModal={()=>setModalToCard(false)}/>
     </S.ContainerModal>
     }
 { isLogged ? <S.ContainerModal>
          <LoginModal closeModal={()=>handleStateModal(false)} />
     </S.ContainerModal> :null
}
   
    
   
    </S.Container>
     
 
}