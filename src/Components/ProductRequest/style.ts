import styled from "styled-components";
import { ThemeStyle } from "../../../styled";


export const Container=styled.div`
display: flex;
justify-content:space-between;
padding:10px 5px;
font-size:13px;
width: 100%;
margin: 5px 0px;
border: 2px solid ${ThemeStyle.bgTheme};
border-radius:5px;
    .area--image{
        margin-right:10px;
        img{
            width: 100%;
            height: 80px;
        }
    }
    .area-left{
    display: flex;
      img{
        height:50px;
        width:auto;
      }
      .price{
        color: ${ThemeStyle.bgTheme};
      }
      .area-text{
        display: flex;
        flex-direction:column;
        align-content:center;
            .name{
                font-weight:bold;
            }
      }


      
  }

  .area-right{
    .counter{
        display: flex;
        
        button{
            padding: 10px;
            border: none;
            display:flex;
            font-family: 'Poppins';
            justify-content:center;
            width: 30px;
            cursor:pointer;
            
        }
        .btn-minus{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

        }
        .btn-add{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .cx-qdt{
            display:flex;
            justify-content:center;
            align-items:center;
            border: none;
            padding:10px;
            background: white;
            color: ${ThemeStyle.bgTheme};
          
        }
    }

  
  }

  @media screen and (max-width:950px){
    align-items:center;
    *{
      button{
        width: 60px;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items:center;
      }
     
    }
   
  }

 


`