import styled from "styled-components";
import { ThemeStyle } from "../../../styled";



export const Box=styled.div`
padding: 50px;
margin: 50px 0;


@media screen  and (max-width:950px){
    padding:150px 6px;
}


`


export const BoxTop=styled.div`
h3{
    margin-left: 20px;
    font-weight: 700;
    font-size: 30px;
    color: #371f6b;
}

`
export const BoxCart=styled.div`
margin: 30px 0;
margin-bottom: 90px;


.error-cart{
    font-size: 22px;
    margin: 30px 0;
    color: #817f85;
    padding: 15px;
    p{
        padding: 15px;
        border: 2px dotted ${ThemeStyle.bgTheme};
    }

}
`

export const BoxButtons=styled.div`
    display:flex;
    justify-content: flex-end;
   



button{
    font-size: 18px;
    padding:15px 33px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    box-shadow: 0 0 5px #eee;
    cursor: pointer;
    color: #FFFF;
}
.cancel{
    background-color:transparent;
    color: red;
}
.finalize{
    background-color: #107d22;
    &:hover{
        background-color: #0e8c23;
    }
}

@media screen  and (max-width:950px){
    button{
    font-size: 15px;
    padding:15px 23px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    box-shadow: 0 0 5px #eee;
    cursor: pointer;
    color: #FFFF;
}
}
`

export const BoxDataCart=styled.div`
display: flex;
justify-content: end;
.table{
    display: grid;
     grid-template-columns: repeat(2,1fr);
     border: 2px solid ${ThemeStyle.bgTheme};
     border-top:none;
     border-radius: 4px;
     span{
        padding: 15px;
        border-top: 2px solid ${ThemeStyle.bgTheme};
     }
}
.left{
    display: flex;
    flex-direction: column;
    max-width: 150px;
    min-width: auto;
    font-weight: 700;
    color: #29282b;
    background-color: #afadb3;
    border-right: 2px solid ${ThemeStyle.bgTheme};
}

.right{
    display: flex;
    flex-direction: column;
    max-width: 150px;
    min-width: auto;
    

}




`