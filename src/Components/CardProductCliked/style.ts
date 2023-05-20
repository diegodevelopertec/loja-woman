import styled from "styled-components";
import {ThemeStyle} from '../../../styled'

export const Container=styled.div`
    display: flex;
    width:870px;
    box-shadow:0 0 15px #141413;
    border-radius:6px;
    background: ${ThemeStyle.bgCardProductBottom};
 

   @media screen and (max-width:780px){
        position: absolute;
        background-color:#FFF;
        top:0;
        left:0;
        bottom: 0;
        right:0;
        z-index:1;
        width: 100vw;
        height: 100vh;
        flex-direction:column;
        align-items:center;
        overflow:hidden;
        border-radius:0;
        margin: 0;
        
  
       
       
   }

 
 
`

export const ContainerImage=styled.div`
    width:39%;
    background: ${ThemeStyle.bgTheme};
    display: flex;
    justify-content:center;
    align-items:center;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    img{
        width: 100%;
        height: 100%;
        border-top-left-radius:6px;
        border-bottom-left-radius:6px;
       
    }
        @media screen and (max-width:780px){
            width: 100vw;
            display: flex;
            justify-content:center;
            align-items:center;
            border-top-left-radius:0;
           border-bottom-left-radius:0;
            margin-bottom: 12px;
         
            img{
                width: 65vw;
                height: 40vh;
                border-radius: 0;
            }
           
        }
        
       
        
      
`

export const ContainerData=styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    padding: 0 5px;
 
`

export const BoxDataTop=styled.div`
  margin: 15px 0;
    padding: 0 5px;
   
    
    .cx-name{
        .name{
            margin-right:5px;
            font-size: 20px;
            font-weight: 700;
            text-shadow: 0 0 5px #997d95;
        }
        .category{
            color:${ThemeStyle.bgAppSystem};
            font-size:9px;
           
        }
        padding: 10px 0;
        display: flex;
        justify-content:center;
       
    }
   
   
    .cx-price{
        padding: 12px 0;
        color: ${ThemeStyle.bgTheme};
        font-size:2rem;
   
    }

    @media screen and (max-width:780px){
        background-color:#FFF;
        .cx-qdt{
                align-items:center;
                text-align:center;
            
        }
            .cx-price{
                display: flex;
                justify-content:center;
                align-items: center;
                padding: 0;
                height: 55px;
                font-size: 20px;
                font-weight: 700;
                width: 100%;
                
                .price-modal{
                    background-color: #aaa;
                    padding: 12px 30px;
                    border-radius: 30px;
                    max-width: 190px;
                }
            }
}

  


`

export const BoxDataBottom=styled.div`
 font-size:14px;
    p{
            color: ${ThemeStyle.colorIngredientsCategory};
            font-size:15px;
    }
    .qdt-modal{
        color: ${ThemeStyle.bgTheme};
       
    }

    .container-btn-add{
        display: flex;
        justify-content:center;
        margin:15px 0;
        font-size:2em;
        div{
            height: 50px;
            width: 50px;
            display: flex;
            justify-content:center;
            align-items:center;
            background: white;
            font-size:14px;
        }
        button{
            height: 50px;
            width: 50px;
            background: ${ThemeStyle.bgTheme};
            color: white;
            border:0;
            font-size:14px;
            &:hover{
                cursor: pointer;
            }
        }
        .btn-minus{
            border-top-left-radius:5px;
            border-bottom-left-radius:5px;
        }
        .btn-add{
            border-top-right-radius:5px;
            border-bottom-right-radius:5px;
        }
    }

    .cx-buttons{
        margin: 20px 0;
      display: flex;
      justify-content:center;
      align-items:center;
   
       
        button{
            padding: 17px 5px;
            display: flex;
            justify-content:center;
            align-items:center;
            border: 2px solid transparent;
            color: #e6e5e3;
            border-radius:6px;
            font-size:13px;
            &:hover{
                cursor:pointer;
            }
        }
        .btn-save{
            height: 50px;
            background: ${ThemeStyle.bgTheme};
            &:hover{
               color: ${ThemeStyle.bgTheme};
               border: 2px solid  ${ThemeStyle.bgTheme};
               background: transparent;
            }
        }
        .btn-cancel{
           margin-right:20px;
            height: 20px;
            width: 120px;
            background: #d66956;
            &:hover{
               color:#cc4f39;
               border: 2px solid  #cc4f39;
               background: transparent;
            }
        }


 }

    

`