import React, { useEffect, useState } from 'react';
import '../Containers/Style.css';
import { FaSearch } from 'react-icons/fa';
import Rice from '../Images/rice.jpeg';
import Potato from '../Images/potato.jpg';
import Chilli from '../Images/chilli.jpeg';
import Corn from '../Images/corn.jpg';
import Onion from '../Images/crop1.jpeg';
import FingerMillet from '../Images/fingerMillet.jpeg';
import { LuUser2 } from "react-icons/lu";
import axios from 'axios'
import { Link } from 'react-router-dom';



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

  //Rice Varieties API
  
  const [RiceVarities, setRiceVarieties] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/getRiceVarieties')
    .then(response => {
      setRiceVarieties(response.data);
    })
    .catch(err=>console.log('Error fetching Rice varieties: ',err))
  },[])

  //Onion Variety API

  const [OnionVarities, setOnionVarieties] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/getOnionVarieties')
    .then(response => {
      setOnionVarieties(response.data);
    })
    .catch(err=>console.log('Error fetching Onion varieties: ',err))
  },[])

  //Maize Variety API

  const [MaizeVarities, setMaizeVarieties] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/getMaizeVarieties')
    .then(response => {
      setMaizeVarieties(response.data);
    })
    .catch(err=>console.log('Error fetching Maize varieties: ',err))
  },[])

   //Chillie Variety API

   const [ChillieVarities, setChillieVarieties] = useState([]);
   useEffect(()=>{
     axios.get('http://localhost:5000/getChillieVarieties')
     .then(response => {
       setChillieVarieties(response.data);
  
     })
     .catch(err=>console.log('Error fetching Chillie varieties: ',err))
   },[])
 

 

  // Function to fetch crop varieties based on the crop type
  const fetchCropVarieties = (type) => {
    axios.get(`http://localhost:5000/get${type}Varieties`)
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
const predictedPrecipitation = formData.prediction ? formData.prediction.max_precipitation : 0;

console.log("Predicted rainsum:",predictedPrecipitation)

  const cardData = [
    // { title: 'Potato', description: 'Des', image: Potato },
    // { title: 'Finger Millet', description: 'Descr', image: FingerMillet },
    ...(cropType === 'Rice' ? RiceVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: Rice // same image for all rice varieties
    })) : []),
    ...(cropType === 'Onion' ? OnionVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: Onion // same image for all onion varieties
    })) : []),
    ...(cropType === 'Maize' ? MaizeVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: Corn // same image for all maize varieties
    })) : []),
    ...(cropType === 'Chillie' ?  ChillieVarities.filter(variety => variety.suitableAreas.includes(formData.selectedDistrict) && variety.maxTimePeriod < formData.numberOfDays && variety.maxPrecipitation > predictedPrecipitation ).map(variety => ({
      title: variety.varietyName,
      description: variety.specialNotes,
      image: Chilli // same image for all chilli varieties
    })) : [])
  ];
  


  return (
    <div className='crops'>
      {/* search bar for crop varities */}
      <form className='search-bar' onSubmit={handleSubmit}>
        <div className='search-container'>
          <FaSearch className='search-icon' />
          <input type='text' placeholder='Search...' value={searchTerm} onChange={handleChange} className='search-input' />
          
        
        </div>

      </form>
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