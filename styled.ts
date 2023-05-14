import styled from 'styled-components'
import BgImage from '.././src/assets/imgs/bg.jpg'

export const ThemeStyle={
     bgTheme:'#764296',
     bgAppSystem:'#FFFF',
    bgCardProductBottom:'#2f302f' ,
    colorTitleCard: 'black',
    colorIngredientsCategory:' #aaa',
    colorTextCard: '',
    bgHoverIcon:'#8280ba',
    bgActiveIconMenu:'#6a67bf'

}

export const Body=styled.div`
    display:flex;
    height:100vh;
    width: 100vw;
    overflow:hidden;
    background-color:${ThemeStyle.bgAppSystem};


`

export const LeftContent=styled.div`
    background: ${ThemeStyle.bgTheme};
    width: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
    
    @media screen  and (max-width:950px){
        position:fixed;
        z-index:1;
        bottom:0;
        top: 90;
        left:0;
        right:0;
        width: 100%;
        box-shadow:0 0 5px #aaa;
        padding: 7px 0;
        border-top-left-radius:17px;
        border-top-right-radius:17px;
   }
 

 @media screen and (max-width:950px){
    display: none;
 }
`

export const HeaderApp=styled.header`
    display: flex;
    justify-content:center;
    width: 100%;


`

export const Menu=styled.div`
 
  padding: 100px 12px;
  border-radius:12px;
    @media screen and (max-width:950px){
        display: flex;
        padding: 0;
        box-shadow: none;
        border-radius:0;
            a{
                margin:15px;
                font-size:11px;
            }
    }
`

export const RightContent=styled.div`
    flex: 1;
    background-color:${ThemeStyle.bgAppSystem};
    overflow-y:auto;
    ::-webkit-scrollbar{
        width: 8px;
      }
    @media screen  and (max-width:950px){
     flex-direction:column;
     width: 100%;
   }
    
`
