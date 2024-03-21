import React from 'react';
import Container from '../Components/Container';
import { Switch } from '@mui/material';
import { useParams } from 'react-router-dom';




const Guide=()=> {
  // const  cropType  = "Rice";
  const { cropType } = useParams(); // Define the cropType here or get it dynamically
  return (

      <div>
        <Container cropType = {cropType}/>
      
      </div>

  );
}

export default Guide;