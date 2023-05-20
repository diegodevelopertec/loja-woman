import styled from "styled-components";
import { ThemeStyle } from "../../../styled";

export const Box=styled.div`
    background-color:'#FFFF';
    display: flex;
    justify-content: space-around;
    margin: 12px 10px;
    box-shadow: 0 0 12px #787878;
    padding: 25px;

    @media screen and (max-width:760px) {
        font-size: 15px;
        justify-content: space-between;
    }
`

export const BoxLeft=styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
color: #0d0c0c;

@media screen and (max-width:760px) {
        display: flex;
        flex-direction: column;
    }

`

export const BoxRight=styled.div`
display: flex;
button{
    padding: 12px 30px;
    margin: 6px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 2px #FFF;
    cursor: pointer;
    &:nth-child(1){
        background-color:#b33024;
        color: #FFF;
    }
    &:nth-child(2){
        background-color:#389126;
        color: #FFF;
    }

    @media screen and (max-width:760px) {
        padding: 6px 10px;
    }
}

`