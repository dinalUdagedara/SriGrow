import React from 'react';
import Container from '../Components/Container';
import { Switch } from '@mui/material';



// import 'bootstrap/dist/css/bootstrap.min.css';

const Guide=()=> {
  const cropType = 'Rice'; // Define the cropType here or get it dynamically
  return (

      <div>
        <Container cropType = {cropType}/>
      
      </div>

  );
}

export default Guide;