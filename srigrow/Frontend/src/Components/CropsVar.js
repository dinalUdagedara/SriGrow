import React, { useEffect, useState } from 'react';
import '../Containers/Style.css';
import { FaSearch } from 'react-icons/fa';
import Rice from '../Images/rice2.jpg';
import Rice1 from '../Images/rice1.jpg';
import Rice2 from '../Images/rice2.jpg';
import Rice3 from '../Images/rice1.jpg';
import Rice4 from '../Images/rice4.jpg';
import Rice5 from '../Images/rice5.jpg';

import Maize1 from '../Images/maize1.jpg';
import Maize2 from '../Images/maize2.jpg';
import Maize3 from '../Images/maize3.jpg';
import Maize4 from '../Images/maize4.jpg';
import Maize5 from '../Images/maize5.jpg';

import Chilli1 from '../Images/green_chili_2.jpeg';
import Chilli2 from '../Images/chilli.jpeg';
import Chilli3 from '../Images/chilli4.jpg';
import Chilli4 from '../Images/chilli4.jpg';

import Onion1 from '../Images/onion1,jpg.jpg';
import Onion2 from '../Images/onion2.jpg';
import Onion3 from '../Images/onion3.jpg';


import Potato from '../Images/potato.jpg';

import Corn from '../Images/corn.jpg';
import Onion from '../Images/crop1.jpeg';
import FingerMillet from '../Images/fingerMillet2.jpg';
import { LuUser2 } from "react-icons/lu";
import axios from 'axios'
import { Link } from 'react-router-dom';


const imagesRice=[
  Rice1,
  Rice2,
  Rice3,
  Rice4,
  Rice5,
];
const imagesMaize = [
  Maize1,
  Maize2,
  Maize3,
  Maize4,
  Maize5,
]
const imagesChilli = [
  Chilli1,
  Chilli2,
  Chilli3,
  Chilli4
]
const imagesOnion = [
  Onion1,
  Onion2,
  Onion3
]


const CropsCard = ({ title, description, image }) => {





  
  return (
    
    <div className="crop-varity-card">
      <img className='card-img' src={image} alt={title} />
      <div className=" d-flex card-stuff">
        <div>
          <h3>{title}</h3>
        
          <p >{description}</p>
        
        </div>

        <button >See More</button>
      </div>
    </div>
  )
}


const CropsVar = ({formData,cropType}) => {
  const [searchTerm, setSearchTerm] = useState('');


  console.log('Form Data Recieved',formData)

  
  
    // Accessing the number of days
    const numberOfDays = formData.numberOfDays;
    console.log('Number of Days:', numberOfDays);

    

  //Rice Varieties API
  
  const [RiceVarities, setRiceVarieties] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5001/getRiceVarieties')
    .then(response => {
      setRiceVarieties(response.data);
    })
    .catch(err=>console.log('Error fetching Rice varieties: ',err))
  },[])

  //Onion Variety API

  const [OnionVarities, setOnionVarieties] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5001/getOnionVarieties')
    .then(response => {
      setOnionVarieties(response.data);
    })
    .catch(err=>console.log('Error fetching Onion varieties: ',err))
  },[])

  //Maize Variety API

  const [MaizeVarities, setMaizeVarieties] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5001/getMaizeVarieties')
    .then(response => {
      setMaizeVarieties(response.data);
    })
    .catch(err=>console.log('Error fetching Maize varieties: ',err))
  },[])

   //Chillie Variety API

   const [ChillieVarities, setChillieVarieties] = useState([]);
   useEffect(()=>{
     axios.get('http://localhost:5001/getChillieVarieties')
     .then(response => {
       setChillieVarieties(response.data);
  
     })
     .catch(err=>console.log('Error fetching Chillie varieties: ',err))
   },[])
 

 

  // Function to fetch crop varieties based on the crop type
  const fetchCropVarieties = (type) => {
    axios.get(`http://localhost:5001/get${type}Varieties`)
      .then(response => {
        switch (type) {
          case 'Rice':
            setRiceVarieties(response.data);
            break;
          case 'Onion':
            setOnionVarieties(response.data);
            break;
          case 'Maize':
            setMaizeVarieties(response.data);
            break;
          case 'Chillie':
            setChillieVarieties(response.data);
            break;
          default:
            break;
        }

      })
      .catch(err => console.log(`Error fetching ${type} varieties: `, err));
  }

  useEffect(() => {
    if (cropType) {
      fetchCropVarieties(cropType);
    }
  }, [cropType]);


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Search term:', searchTerm);
  }

// Get the predicted amount of precipitation from formData
const predictedPrecipitation = formData.prediction ? parseFloat(formData.prediction.max_precipitation).toFixed(2) : 0;

console.log("Predicted rainsum:",predictedPrecipitation)

  const cardData = [
    // { title: 'Potato', description: 'Des', image: Potato },
    // { title: 'Finger Millet', description: 'Descr', image: FingerMillet },
    ...(cropType === 'Rice' ? RiceVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: imagesRice[Math.floor(Math.random() * imagesRice.length)]

    })) : []),
    ...(cropType === 'Onion' ? OnionVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: imagesOnion[Math.floor(Math.random() * imagesOnion.length)]
    })) : []),
    ...(cropType === 'Maize' ? MaizeVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: imagesMaize[Math.floor(Math.random() * imagesMaize.length)]
    })) : []),
    ...(cropType === 'Chillie' ?  ChillieVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: imagesChilli[Math.floor(Math.random() * imagesChilli.length)]

    })) : [])
  ];
  


  return (
    <div className='crops'>
        <div className='crop-top-cont'>
          <div className='top-content'>
          <h1 style={{ color: '#285A43' }}>Crop Types Which Are Suitable for Selected Preferences: </h1>
          <div className='SuggestInfo'>
          <span >Can Be Grown Within: {numberOfDays} days </span>
          
          <span >And Can Face the Predicted Maximum Rainfall of: {predictedPrecipitation} mm </span>
          </div>

          </div> 
        </div>
        <br></br>

     
      <div className="crops-cards">
        <div className='cards-wrapper'>
          {cardData.map((cardData,index) => (
            <CropsCard {...cardData} key={index} />
          ))}
        </div>

      </div>

    </div>

  );
}

export default CropsVar;