import styled from "styled-components";
import { ThemeStyle } from "../../../styled";
import { theme } from "antd";

export const Box=styled.div`
padding: 50px;
margin: 50px 0;

h3{
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
}

@media screen  and (max-width:950px){
    padding:140px 6px;
    margin: 0;
}
`

export const BoxShopping=styled.div`
margin: 50px 0;





.error-request{
    font-size: 22px;
    margin: 30px 0;
    padding: 15px;
    p{
       margin-left: 5px;
       color: #817f85;
       width: auto;
       border: 2px dashed #817f85;
       padding: 15px;
      
    }
}

`