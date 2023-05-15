import styled from "styled-components";
import { ThemeStyle } from "../../../styled";



export const Box=styled.div`
padding: 50px;
margin: 50px 0;


@media screen  and (max-width:950px){
    padding:140px 6px;
    margin: 0;
}


`


export const BoxTop=styled.div`
h3{
    margin-left: 20px;
    font-weight: 700;
    font-size: 30px;
    color: #212121;
    text-shadow: 0 0 5px #9fa19f;
}

`
export const BoxCart=styled.div`
margin: 30px 0;
margin-bottom: 90px;


.error-cart{
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