import styled from "styled-components";
import {ThemeStyle} from '../../../styled'


export const Container=styled.div`
  
    box-shadow:0 0 6px #141413;
    margin:12px 0;
    border-radius:4px;
    background-color:#e1e8e3;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width:600px){
      font-size:10px;
     
    }
   
`

export const  ContainerImage=styled.div`
  
    height: auto;
    display: flex;
    justify-content:center;
    width:100%;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
  
    img{
        width:100%;
        height:420px;
        border-top-left-radius:6px;
    border-top-right-radius:6px;
      
        @media screen and (max-width:600px){
          height: max-content;
         
       }
    }



`

export const DataProduct=styled.div`

    display:flex;
    padding: 18px 10px;
    margin-top:12px;
    flex-direction:column;
    background-color:#e1e8e3;
    
         
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
            box-shadow:  0 0 6px #000;
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

export const InfoProduct=styled.div`


span{
    font-size: 15px;
    
}

h4{
    font-size: 15px;
    height: 80px;
    font-weight: 700;
    text-shadow: 0 0 5px #997d95;
}

hr{
    background-color: ${ThemeStyle.bgTheme};
    height: 3px;
    border-radius: 8px;
    margin: 12px 0;
}

.price{
    font-size: 19px;
    margin: 20px 0;
    font-weight: 700;
    color: ${ThemeStyle.bgTheme};
}

`