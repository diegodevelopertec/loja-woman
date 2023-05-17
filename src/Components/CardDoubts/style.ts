import styled from "styled-components";
import { ThemeStyle } from "../../../styled";


type Props={
    display:boolean;
}

export const Box=styled.div`
margin: 20px 0;



`
export const BoxTop=styled.div`
border-radius: 6px;
display: flex;
padding: 12px;
color: #FFFF;
justify-content: space-between;
align-items: center;
background-color: ${ThemeStyle.bgTheme};
box-shadow: 0 0 5px #000;

button{
    font-size: 18px;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    border: none;
    font-weight: 700;
    cursor: pointer;
}

`
export const BoxResponse=styled.div<Props>`
display:${Props=>Props.display ? 'flex' : 'none'};
padding: 12px;
background-color: #ced1cd;
border-radius: 6px;
color: #191a19;

`