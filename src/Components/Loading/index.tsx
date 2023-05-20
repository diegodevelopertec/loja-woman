import React from 'react';
import ReactLoading, { LoadingType } from 'react-loading';
import { Box } from './style';


type Props={
    typeLoad:LoadingType,
    color:string,
    mensage:string,
}

export const LoadingItem = ({ typeLoad, color,mensage }:Props) => {
   return <Box>
      <ReactLoading type={typeLoad} color={color} height={'200px'} width={'200px'} />
      <p>{mensage}</p>
   </Box> 
  
}