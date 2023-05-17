import styled from "styled-components";
import { ThemeStyle } from "../../../styled";
import { theme } from "antd";

type Props={
    stateDisplay:boolean;
}
export const Container=styled.div`
    width: 100%;
    font-size:20px;
    overflow-x:hidden;

  
  @media screen and   (max-width:950px){
     padding-bottom:50px;
   }
`


export const ContainerBanner=styled.div`
    display:flex;
    justify-content:center;
  
  @media screen and (max-width:950px){
    width: 100vw;
  }
`
export const CategorySectionProducts=styled.div`
    margin: 60px 0 0 ;
    color:${ThemeStyle.bgTheme};
    font-weight:bold;
    background-color:${ThemeStyle.bgAppSystem};
    font-size:18px;
    display: flex;
    flex-direction:column;
    align-items:center;
    .category-title{
       padding-top:15px;
        display: flex;
        justify-content:center;
        span{
            margin-left:10px;
            text-decoration:underline;
            color: ${ThemeStyle.colorTitleCard};
        }
    }
   .cx-btn-icons{
        display: flex;
        margin: 20px 0;
    
       
    }
    padding: 15px;
   

    @media screen and (max-width:950px){
        justify-content:center;
        text-align:center;
        margin-top: 160px;
        .cx-btn-icons{
            justify-content:center;
            margin: 0;
        }
        .category-title{
           justify-content:center;
    }
}


`


export const ShowcaseProduct=styled.div<Props>`
    display: ${props=>props.stateDisplay === false ? 'grid' : 'block'};
    grid-template-columns:repeat(4,1fr);
    gap:10px;
    width: 100%;
    transition: all ease 0.2;
    padding-bottom:50px;
    padding: 30px 18px;
    margin-bottom:90px;
    background-color:${ThemeStyle.bgAppSystem};
    @media screen and (max-width:920px){
      grid-template-columns:repeat(2,1fr);
       align-items:center;
        padding: 30px 6px;
       padding-bottom:50px;
   
    }
`

export const ContainerModal=styled.div`
    left:0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    background: rgba(179, 179, 179, 0.45);
    display: flex;
    justify-content:center;
    align-items:center;
    transition:all ease 0.8s;
 

`


export const ContainerCaseLogged=styled.div`
  display: flex;
  align-items:center;
  margin: 60px 20px;
  background: ${ThemeStyle.bgTheme};
  height:450px;
  color: #dadfe6;


  .area-text{
    display: flex;
    justify-content:center;
    flex-direction:column;
   
    .txt{
      display:flex;
     align-items:center;
      flex-direction:column;
      margin: 12px;
    }
        .cx-spans{
          display: flex;
         
         span{
            display: flex;
            justify-content:center;
             align-items:center;
             background: ${ThemeStyle.bgCardProductBottom};
             padding: 40px;
             max-width: 120px;
           
          }
        }
  }
  .area-img{
    height: 100%;
    img{
      height: 100%;
    }
  }



@media screen and (max-width:950px){
  
  width: 100%;
 display: none;
 flex-direction:column;
    
    .area-img{
      width: 100%;
      display: flex;
      justify-content:center;
      align-items:center;
      height: 350px;
      img{
        height: 100%;
      }
    }

    .cx-spans{
      display: flex;
      padding:  20px 22px;
      justify-content:center;
       align-items:center;
      margin: 13px;
       span{
        padding: 10px;
         padding: 20px;
        border-radius:5px;
      }
  }
}


  

`
export const CardLoja=styled.div`
    display:flex;
    justify-content:space-between;
    margin:70px 15px;
   
  color:${ThemeStyle.bgTheme};
        .logo{
            font-size: 39px;
            display: flex;
            justify-content:center;
            align-items:center;
            text-shadow: 0 0 5px #000;
            img{
                height: 80px;
                width: 80px;
                margin-right:12px;
            }
        }

        .cx-icons-media{
            display: flex;
            justify-content: center;
            align-items: center;
          
            span{
              color: #232423;
                font-size: 15px;
            }
            img{
                margin: 0 5px;
                height: 30px;
                width: 30px;
            }
        }


    @media screen and (max-width:950px){
        flex-direction:column;
        padding: 10px 0;
        margin:40px 15px;
        display: none;

        .logo{
            font-size: 49px;
        }
      
    }

`
