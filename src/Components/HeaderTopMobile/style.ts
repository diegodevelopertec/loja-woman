import styled from "styled-components";



type Props={
    stateMenu:boolean
}

export const Box=styled.div`
    display:none;

@media screen and (max-width:950px){
    display: flex;
    position: fixed;
    background-color:#350759;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 25px 12px;
    justify-content: space-between;
    align-items: center;
    color: gray;
    
}



`

export const BoxLeft=styled.div`
display: flex;
h3{
    font-size: 25px;
}

`
export const BoxRight=styled.div<Props>`
display: flex;

.btn-mobile{
  display:flex;
    button{
        border: none;
        height: 45px; 
        padding: 5px;
        width: 45px;
        border-radius: 3px;
        box-shadow: 0 0 2px #aaa;
        
    }
   img{
    height: 100%;
   }

}

.top{
    width: 100%;
    display: ${Props=>Props.stateMenu ? 'flex': 'none'};
    justify-content: end;
    position: absolute;
    top: 0;
    padding: 20px;
    button{
        border: none;
        height: 45px;
        width: 45px;
        background-color: transparent;
        img{
            height: 100%;
            width: 100%;
        }
    }
}
.menu-nav{
    transition: all ease .5s;
    display:${Props=>Props.stateMenu ? 'flex': 'hidden'};
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: #2d1361;
    font-family: 'Poppins', sans-serif;
    font-size: 19px;
    width: ${Props=>Props.stateMenu ? '50vw': '0'};
    right: 0;
    top: 0;
    bottom: 0;
    flex-direction: column;
}
nav {
   width: 100%;
  
    .nav-links{
        width: auto;
        display:${Props=>Props.stateMenu ? 'flex': 'none'};
        flex-direction:column ;
        align-items: center;
        justify-content: center;
        a{
          margin: 12px;
          color: #530f87;
          transition: all ease .1s;
          text-decoration: none;
        }
    }

}
`