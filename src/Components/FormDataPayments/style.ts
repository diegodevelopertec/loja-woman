import styled from "styled-components";

type Props={
    state:boolean;
}

type PropsForm={
    display:boolean;
}

export const Box=styled.div`
width: auto;
margin: 35px 0;

.new-pay{
    font-size: 18px;
    margin: 35px 0;
    color: #424242;
    
    hr{
        margin: 12px 0;
    }
    button{
        height: 45px;
        width: 45px;
        background-color: #777378;
        color: #FFF;
        border-radius: 100%;
        border: none;
        font-size: 25px;
        font-weight: 700;
        cursor: pointer;
    }
}

`

export const BoxCardInputs=styled.div`
    display: grid;
    gap: 12px;
    width: auto;
    grid-template-columns: repeat(2,1fr);


@media screen and (max-width:760px){
    display: flex;
    flex-direction: column;
}
`


export const CardInput=styled.div<Props>`
width:auto;
label{
    color: #262626;
    font-weight: 700;
}
input{
    width: 100%;
    padding: 12px;
    font-size: 15px;
    margin-top: 6px;

}

p{
    color:#d12d11 ;
}

`

export const BoxForm=styled.div<PropsForm>`
display: ${PropsForm=>PropsForm.display ? 'auto' : 'none'};


`


export const BoxFormButtons=styled.div`
display: flex;
justify-content: center;
margin: 45px 0;

button{
    padding: 12px 36px;
    color: #FFF;
    border: none;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin: 12px;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
    transition: all ease .2s;
    img{
        height: 25px;
        width: 25px;
    }
}

.save{
    background-color: #237d22;
    &:hover{
        background-color: #26bd24;
    }
}
.cx-btns{
    display: flex;
    width: 100%;
    justify-content: center;
    
    .edit{
        background-color:#20638c;
        &:hover{
            background-color: #2a8cc9;
        }
    }
    .cancel{
        background-color:#b32810;
        &:hover{
            background-color: #d12d11;
        }
    }
}
`

export const CardSelect=styled.div`
max-width: 250px;
box-sizing: 0 0 15px #000;
select{
        width: 100%;
        padding: 20px;
        border-radius: 5px;
    option{
        color: #EEE;
        font-size: 16px;
        font-weight: bold;
        padding: 5px;
        background-color: #262526;
    }
}


`

export const BoxPayments=styled.div`
padding: 0 5px;


`