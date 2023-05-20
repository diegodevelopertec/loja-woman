import styled from "styled-components";
import { ThemeStyle } from "../../../styled";


export const Box=styled.div`
        display: flex;
        padding:80px 20px;
        margin-bottom: 50px;
    @media screen and (max-width:950px) {
        padding: 160px 6px;
    }

`

export const BoxContent=styled.div`
width: 100%;
height: 100vh;
span{
    margin-left: 5px;
}
h3{
    font-size: 25px;
    font-size: 30px;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
}
p{
    margin-top: 10px;
    color:#9B9393;
}
`

export const BoxForm=styled.div`
 margin: 50px 0;
`

export const  CardInput=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;

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


`

export const BoxFile=styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const  CardInputFile=styled.div`
width: 300px;
height: 300px;
background-color: #FFFF;
margin-left: 20px;
border: 2px dashed ${ThemeStyle.bgTheme};
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
position: relative;
  overflow: hidden;
span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
        cursor: pointer;
       font-family: Poppins;
        font-style: Medium;
        font-size: 14px;
        line-height: 21px;
        line-height: 150%;
    }

input{
    position: absolute;
    top: 0;
    left: 0;
     opacity: 0;
    width: 100%;
     height: 100%;
     cursor: pointer;
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


`

export const BoxFormInputs=styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    @media screen and (max-width:950px) {
        display: flex;
        flex-direction: column;
        padding: 10px;
     input{
        min-width: 250px;
        max-width: 100%;
     }
    }

`


export const BoxButton=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 50px 0;
        button{
            width: 190px;
            padding: 15px ;
            color: #FFFF;
            box-shadow: 0 0 6px #000;
            border-radius: 4px;
            border: none;
            background-color: #13541f;
            cursor: pointer;
        }


`

export const BoxBottom=styled.div`

a{
    text-decoration: none;
    cursor: pointer;
}
`