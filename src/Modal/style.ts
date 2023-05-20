import styled from "styled-components";

type Props={
display:boolean;
}
export const Box=styled.div<Props>`
display:${Props=>Props.display ? 'flex': 'none'};
justify-content: center;
align-items: center;
background-color: rgba(48, 44, 46, 0.8);
position: absolute;
right: 0;
top: 0;
bottom: 0;
left: 0;


`