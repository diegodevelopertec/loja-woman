import styled from "styled-components";
import {ThemeStyle} from '../../../styled'


export const Container=styled.div`
  
    box-shadow:0 0 3px #141413;
    margin:12px 0;
    border-radius:6px;
    background: #ebedf0;
    @media screen and (max-width:600px){
    font-size:10px;
     
    }
   
`

export const  ContainerImage=styled.div`
  
   background: white;
    height: auto;
    display: flex;
    justify-content:center;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    width:100%;
  
    img{
        width:100%;
        height:420px;
      
        @media screen and (max-width:600px){
         height: 180px;
     
       }
    }



`

export const DataProduct=styled.div`

    display:flex;
    padding: 18px 10px;
    margin-top:12px;
    flex-direction:column;

        .info-product{
            margin: 15px 0;
            height: 100px;
           
            .category--name{
                    color: ${ThemeStyle.colorIngredientsCategory};
                    padding: 5px 0;
                    font-size:13px;
                    text-transform: capitalize;
                
                }
                h4{
                    font-size:13px;
                    color: ${ThemeStyle.colorTitleCard};
                   
                }
                p{
                    color: ${ThemeStyle.colorIngredientsCategory};
                    margin: 10px 0;
                    font-size:1rem;
                }
                .price{
                    color: ${ThemeStyle.bgTheme};
                    font-family:Arial;
                    font-weight:bold;
                    width: 100px;
                    font-size:17px;
                }
                .ingredientes-text{
                    word-break:break-all;
                    font-size:12px;
                    margin: 6px 0;
                    height: 20px;
                    color: ${ThemeStyle.colorIngredientsCategory};
                }

                @media screen and (max-width:600px){
                        font-size:1rem;
                        flex-wrap:wrap;
                        .ingredientes-text{
                            display:none;
                        }
                    
                }
                
                @media screen and (max-width:280px){
                      height: 80px;
                    
                }
    }

    .cx-btn-product{
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 15px 5px;
        width: 100%;
        margin: 13px 0;
        height: 90px;
        button{
            font-family:Arial;
            font-weight:bold;
            text-transform:uppercase;
            padding: 12px 20px;
            background:  ${ThemeStyle.bgTheme};
            color: white;
            border: 2px solid #d6d4d4;
            border-radius:5px;
           
            &:hover{
                cursor:pointer;
                transition:all ease 0.2s;
                background:transparent;
                color:  ${ThemeStyle.bgTheme};
                border: 2px solid ${ThemeStyle.bgTheme};
                 
            }
        }
                    
            }
         
         @media screen and (max-width:600px){
              padding:0;
         }
    
    @media screen and (max-width:600px){
      padding: 0 5px;
      width: 100%;
    }
`