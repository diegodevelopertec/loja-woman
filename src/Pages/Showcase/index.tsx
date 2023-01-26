import { useEffect, useState } from "react" 
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import { dataBurguer } from "../../data/Product"
import BebidasIcon from '../../assets/imgs/iconBebida.png'
import ResturantIcon from '../../assets/imgs/restaurante.png'
import PizzaIcon from '../../assets/imgs/iconspizza.png'
import LanchesIcon from '../../assets/imgs/iconhamburguer.png'
import { ButtonMenuCategory } from "../../Components/ButtonMenuCategory"
import { CardCliked } from "../../Components/CardProductCliked"
import { dataPizza } from "../../data/Product"
import { dataDrinks } from "../../data/Product"
import { RestaurantePage } from "./../RestaurantePage"
import {Cart } from "../../Components/Cart"
import { ThemeStyle } from "../../../styled"
import { LoginModal } from "../LoginModal"
import { useContextApp } from "../../hooks/useContextApp"
import { BannerPromotions } from "../../Components/BannerPromotions"
import { useLocation, useNavigate } from "react-router-dom"
import { useModalLogin } from "../../hooks/useModeLogin"
import { useAuthContext } from "../../hooks/useContextAuth"
import  womanBurguer from './../../assets/imgs/banner_main_rf.png'
import  womanBurguerMain from './../../assets/imgs/banner_main2.png'

export const Showcase=()=>{
   
    const {stateModal,handleStateModal}=useModalLogin()
    const {state,dispatch}=useContextApp()
    const [burguerProductList,setBurguerProductList]=useState<Product[] >(dataBurguer)
    const [pizzaProductList,setPizzaProductList]=useState<Product[]>(dataPizza)
    const [drinksProductList,setDrinksProductList]=useState<Product[] >(dataDrinks)
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [displayBurguer,setDisplayBurguer]=useState<boolean>(true)
    const [displayPizzas,setDisplayPizzas]=useState<boolean>(false)
    const [displayRestaurant,setDisplayRestaurant]=useState<boolean>(false)
    const [displayDrinks,setDisplayDrinks]=useState<boolean>(false)
    const [stateModalToCard,setModalToCard]=useState(false)
    const isLogged=stateModal
    let {user}=useAuthContext()
  


 


    const clikedOnModal=()=>{ 
       setModalToCard(true)
    }
    const closeModal=()=>{
        setModalToCard(false)
    }


    const actionDisplayBurguers=()=>{
        setDisplayBurguer(true)
        setDisplayPizzas(false)
        setDisplayDrinks(false)
        setDisplayRestaurant(false)
    }
    const actionDisplayPizzas=()=>{
        setDisplayBurguer(false)
        setDisplayPizzas(true)
        setDisplayDrinks(false)
        setDisplayRestaurant(false)
    }
    const actionDisplayDrinks=()=>{
        setDisplayBurguer(false)
        setDisplayPizzas(false)
        setDisplayDrinks(true)
        setDisplayRestaurant(false)
    }
    const actionDisplayRestaurante=()=>{
        setDisplayRestaurant(true)
        setDisplayBurguer(false)
        setDisplayPizzas(false)
        setDisplayDrinks(false)
    }

    //função de setar dados de cada car para o card modal
    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        clikedOnModal()
   
    }


 
   
 

    const conditionCategoryTitle=()=>{
        if(displayBurguer){
            return 'Hamburguers'
        }else if(displayDrinks){
            return 'Bebidas'
        }else if(displayPizzas){
            return 'Pizzas'
        }else{
            return 'Marmita'
        }
    }

  
return <S.Container>
          <BannerPromotions />
     
     
    {  <S.ContainerCaseLogged className="cx-logado">
                <div className="area-img">
                    <img src={user?.name ? womanBurguerMain : womanBurguer} alt="" />
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
                 iconActive={displayBurguer ? true : false} 
                 src={LanchesIcon} 
                 marginhorizontal='10' marginvertical='10'  
                 onClick={actionDisplayBurguers}
                 id='btnHome'
                
            />
            <ButtonMenuCategory bg={ThemeStyle.bgTheme} 
                iconActive={displayDrinks ? true : false} src={BebidasIcon} 
                marginhorizontal='10' 
                marginvertical='10'  
                onClick={actionDisplayDrinks} 
                id='btnHome'
            />
            <ButtonMenuCategory bg={ThemeStyle.bgTheme} 
                iconActive={displayPizzas ? true : false} src={PizzaIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayPizzas} 
                id='btnHome'
            />
             { /* 
             seção de restaurante á ser implemenetada futuramentee
             <ButtonMenu bg={ThemeStyle.bgTheme} 
                iconActive={displayRestaurant} src={ResturantIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayRestaurante} 
                id='btnHome'
/> */}
           
        </div>
        <p className="category-title">Produtos: <span>{conditionCategoryTitle()}</span> </p>
      </>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct stateDisplay={displayRestaurant}> 
       <>
        { displayBurguer ? burguerProductList && burguerProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayPizzas ? pizzaProductList && pizzaProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayDrinks ? drinksProductList && drinksProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        {/* displayRestaurant  && <RestaurantePage/> */}
        <Cart />
       </>
     
    </S.ShowcaseProduct>
   
    {stateModalToCard && <S.ContainerModal>
        <CardCliked   data={dataProductCliked} funcOffModal={closeModal}/>
     </S.ContainerModal>
     }
 { isLogged ? <S.ContainerModal>
          <LoginModal closeModal={()=>handleStateModal(false)} />
     </S.ContainerModal> :null
}
   
    
   
    </S.Container>
     
 
}