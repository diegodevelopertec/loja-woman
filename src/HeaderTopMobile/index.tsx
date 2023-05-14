import { useState } from "react"
import { useMenuMobile } from "../Context/menuMobileContext"
import { Box, BoxLeft, BoxRight } from "./style"
import {Link, useNavigate} from "react-router-dom"
import IconMenuMobile from './../../public/imgs/iconmenu.png'
import CloseMobile from './../../public/imgs/closemenu.png'

export const HeaderTopMobile=()=>{
   const {stateMenuMobile,handleStateMenuMobile}=useMenuMobile()
    const navigate=useNavigate()

   const ClickLinkCloseMenu=(href:string)=>{
        navigate(`${href}`)
        handleStateMenuMobile(false)
   }

    return <Box>
        <BoxLeft>
            <h3>Laddy Modas</h3>
        </BoxLeft>
        <BoxRight stateMenu={stateMenuMobile}>
            <div className="btn-mobile">
                <button onClick={()=>!stateMenuMobile ? handleStateMenuMobile(true) : null}>
                    <img src={IconMenuMobile} alt="" />
                </button>
            </div>
          
           <div className="menu-nav">
                 <div className="top">
                            <button  onClick={()=>handleStateMenuMobile(false)}>
                                <img src={CloseMobile} alt="" />
                            </button>
                </div>

                <nav>
                    <div className="nav-links">
                        <Link to='/' onClick={()=> handleStateMenuMobile(false)} >Inicio</Link>
                        <Link to='/compras' onClick={()=> handleStateMenuMobile(false)} >Produtos</Link>
                        <Link to='/sobre' onClick={()=> handleStateMenuMobile(false)}  >Carrinho</Link>
                        <Link to='/sobre' onClick={()=> handleStateMenuMobile(false)}  >Compras</Link>
                        <Link to='/conta' onClick={()=> handleStateMenuMobile(false)}  >Conta</Link>
                        <Link to='/sobre' onClick={()=> handleStateMenuMobile(false)}  >Sobre</Link>
                    </div>

                    </nav>
           </div>
            
        </BoxRight>
    </Box>
}