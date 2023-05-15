import styled from "styled-components";
import { ThemeStyle } from "../../../styled";

export const Box=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 160px;

`

export const BoxForm=styled.div`
margin: 30px 0;

`

export const BoxLogin=styled.div`
    box-sizing: 00 5px #000;
    width: 600px;
    background-color: #D1C8C8;
    padding:35px ;
    .cx-btn{
        display: flex;
        justify-content: center;
        margin: 35px 0;
        button{
             width: 250px;
             font-size: 18px;
             color: #FFFF;
            padding: 12px 23px;
            border-radius: 3px;
            border: none;
            cursor: pointer;
            background-color: #24966F;
            transition:all ease .2s;
            &:hover{
                background-color: #27C991;
                
            }
        }
    }
    h3{
        color: ${ThemeStyle.bgTheme};
        font-size: 25px;
    }

    @media screen and (max-width:750px) {
        width: 90vw;
    }

`

export const  CardInput=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 13px 0;

input{
    padding: 18px 9px;
    width: 500px;
    border: none;
    background-color: #B6B6B6;
    box-shadow: 0 0 3px #000;
    &:focus{
        transition: all ease .2s;
        outline: 2px solid ${ThemeStyle.bgTheme};
        
    }
}

label{
    margin: 6px;
    color:#9B9393;
    display:flex;
    justify-content:flex-start;
}
p{
    font-size: 15px;
    color: #C02F2F;
    text-align: center;
}

@media screen and (max-width:750px) {
       input{
        width: 100%;
       }
    }

`
export const BoxBottom=styled.div`

font-size: 15px;
a{
    text-decoration: none;
    color: #19435C;
}
`