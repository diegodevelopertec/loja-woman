import styled from "styled-components";
import { ThemeStyle } from "../../../styled";
import { theme } from "antd";

export const Box=styled.div`
padding: 50px;
margin: 50px 0;

h3{
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${ThemeStyle.bgTheme};
}

@media screen  and (max-width:950px){
    padding:140px 6px;
    margin: 0;
}
`

export const BoxShopping=styled.div`
margin: 50px 0;





.error-request{
    padding: 15px;
    font-size: 18px;
    color: #D8CACA;
    p{
        padding: 15px;
        width:90%;
      
    }
}

`