import React, { useState } from 'react';
import "../Containers/MainPage.css";
import { FaSearch } from 'react-icons/fa';
import Rice from '../Images/rice.jpeg';
import Potato from '../Images/potato.jpg';
import Chilli from '../Images/chilli.jpeg';
import Corn from '../Images/corn.jpg';
import Onion from '../Images/crop1.jpeg';
import FingerMillet from '../Images/fingerMillet.jpeg';
import { LuUser2 } from "react-icons/lu";

const CropsCard = ({ title, description, image }) => {
  return (
    <div className="crop-varity-card">
      <img className='card-img' src={image} alt={title} />
      <div className=" d-flex card-stuff">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <button>See More</button>
      </div>
    </div>
  )
}


const CropsVar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Search term:', searchTerm);
  }
  const cardData = [
    { title: 'Potato', description: 'Des', image: Potato },
    { title: 'Rice', description: 'Desc', image: Rice },
    { title: 'Chilli', description: 'Descr', image: Chilli },
    { title: 'Corn', description: 'Desc', image: Corn },
    { title: 'Onion', description: 'Descr', image: Onion },
    { title: 'Finger Millet', description: 'Descr', image: FingerMillet },
  ];
  const cardsData = [
    //  see more ... datas of the crops
  ];

  return (
    <div className='crops'>
      {/* search bar for crop varities */}
      <form className='search-bar' onSubmit={handleSubmit}>
        <div className='search-container'>
          <FaSearch className='search-icon' />
          <input type='text' placeholder='Search...' value={searchTerm} onChange={handleChange} className='search-input' />
          <div>
            <LuUser2 className='d-flex user-icon' />
          </div>
        {/* profile box */}
            <div className="user-profile-box">
              {/* Profile details */}
            </div>
        
        </div>

      </form>
      <div className="crops-cards">
        <div className='cards-wrapper'>
          {cardData.map((cardData) => (
            <CropsCard {...cardData} key={cardData.title} />
          ))}
        </div>

      </div>
    </div>

  );
}

export default CropsVar;