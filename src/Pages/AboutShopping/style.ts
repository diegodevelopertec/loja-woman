import styled from "styled-components";
import { ThemeStyle } from "../../../styled";
import { theme } from "antd";

export const Box=styled.div`
margin: 50px 0;
width: auto;
margin-bottom: 160px;
    h3{
        padding: 50px;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        color: #212121;
        text-shadow: 0 0 5px #9fa19f;
    }

@media screen  and (max-width:950px){
    padding:140px 6px;
    h3{
        padding: 20px 0;
    }
    margin: 0;
    margin-bottom: 60px;
}
`

export const BoxContext=styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;

    @media screen  and (max-width:950px){
    margin: 0;
}
`

export const BoxImageDescription=styled.div`
  

    .cx-image{
        width: 100%;
        img{
            width: 100%;
            height: 450px;
        }
    }

    .desc{
        margin: 35px 0;
        color: #999997;
        text-align:justify;
    }

    @media screen and (max-width:760px){
        padding: 5px;
    }
`

export const BoxDoubts=styled.div`



h4{
    padding: 50px;
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
}

`