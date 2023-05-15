import styled from "styled-components";
import { ThemeStyle } from "../../../styled";


export const Box=styled.div`
padding: 50px;
margin: 25px 0;

h3{
    font-family: Arial;
    font-size: 30px;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
}

@media screen  and (max-width:950px){
    padding:140px 6px;
    margin: 0;
}
`


export const BoxDataAccount=styled.div`
margin: 45px 0;
h3{
    font-size: 22px;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
    display: flex;
    align-items: center;
    img{
        height: 55px;
        width: 55px;
        margin-right: 6px;
        box-shadow: 0 0 5px #9fa19f;
        background-color: ${ThemeStyle.bgTheme};
        padding: 12px;
        border-radius: 100%;
    }
    
}
`

export const BoxDataPay=styled.div`
margin: 25px 0;
h3{
    font-size: 22px;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
    display: flex;
    align-items: center;
    img{
        height: 55px;
        width: 55px;
        margin-right: 6px;
        box-shadow: 0 0 5px #9fa19f;
        background-color: ${ThemeStyle.bgTheme};
        padding: 12px;
        border-radius: 100%;
    }
    
}
`

export const BoxDataAddress=styled.div`
margin: 25px 0;
h3{
    font-size: 22px;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
    display: flex;
    align-items: center;
    img{
        height: 55px;
        width: 55px;
        margin-right: 6px;
        box-shadow: 0 0 5px #9fa19f;
        background-color: ${ThemeStyle.bgTheme};
        padding: 12px;
        border-radius: 100%;
    }
    
}
`