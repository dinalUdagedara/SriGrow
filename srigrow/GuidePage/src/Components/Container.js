import React, { useState } from "react";
import '../Containers/MainPage.css';
import { Link } from "react-router-dom";
import { PiPlant } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Grid, Select, MenuItem } from '@mui/material';
import { IoLocation } from "react-icons/io5";
import { Button } from "bootstrap";
import CropsVar from "./CropsVar";
import { TextField, IconButton } from '@mui/material';
import Slider from "react-slick";
import slide1 from "../Images/cropdetail1.jpg";
// import slide2 from "../Images/cropdetail2.jpg";
import slide2 from "../Images/cropdetail2.jpg";
import slide3 from "../Images/cropdetail3.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Container = ({OnionVarieties}) => {
    //const [showContainer, setShowContainer]= useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [showCrops, setShowCrops] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [date, setDate] = useState();
    const [endDate,setEndDate]=useState();
    const [growingTimeValue, setGrowingTimeValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [Type, setType] = useState('');
    const [cities, setCities] = useState([
        'Colombo',
        'Kandy',
        'Galle',
        'Jaffna',
        'Anuradhapura',
        // Add more cities as needed
    ]);
    const [Types, setTypes] = useState([
        'Rice',
        'Potato',
        'Chilli',
        'Corn',
        'Onion',
        'Finger Millet',
        // Add more crop types as needed
    ]);
    const images = [slide1, slide2, slide3]

    const [cropType,setCropType] = useState('Rice');


    const [city, setCity] = useState('');

    const toggleGuide = () => {
        setShowGuide(true);
        setShowCrops(false);
        setShowDetails(false);

    };
    const toggleCrops = () => {
        setShowGuide(false);
        setShowCrops(true);
        setShowDetails(false);

    };
    const toggleDetails = () => {
        setShowGuide(false);
        setShowCrops(false);
        setShowDetails(true);

    };




  

    //define lists of provinces and districts
    const provinces = ["Nothern Province", "Western Province", "Central Province", "Eastern province", "Southern Province", "North west Province", "Noth Cenral Province", "Uva Province", "Sabaragamuwa Province"];
    const districtByProvince = {
        "Nothern Province": ["Jaffna", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
        "Western Province": ["Colombo", "Gampaha", "Kalutara"],
        "Central Province": ["Kandy", "Matale", "Nuwara Eliya"],
        "Eastern Province": ["Trincomalee", "Batticaloa", "Ampara"],
        "Southern Province": ["Hambantota", "Matara", "Galle"],
        "North west Province": ["Puttalam", "Kurunegala"],
        "Noth Cenral Province": ["Anuradhapura", "Polonnaruwa"],
        "Uva Province": ["Badulla", "Monaragala"],
        "Sabaragamuwa Province": ["Kegelle", "Ratnapura"]


    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleGrowingTimeChange = (event) => {
        setGrowingTimeValue(event.target.value);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowDetails(false);
    };

    const handleProvinceChange = (event) => {
        setSelectedProvince(event.target.value);
        // Reset selected district when province changes
        setSelectedDistrict("");
    };
    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const handleSubmit = () => {

      // Calculate the number of days between start and end dates
    const startDate = new Date(date);
    const calculatedEndDate = new Date(endDate); // Changed from endDate to calculatedEndDate
    const differenceInTime = calculatedEndDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

        // Update formData with the latest values
    setformData({
        selectedProvince: selectedProvince,
        selectedDistrict: selectedDistrict,
        startDate: date,
        endDate: calculatedEndDate, // Changed from endDate to calculatedEndDate
        numberOfDays: differenceInDays  // Save the calculated number of days
    });
      

        
        console.log("Form Data : ",formData)
        console.log("form submitted ")
    }

    const [formData,setformData] = useState({
        selectedProvince: "",
        selectedDistrict: "",
        startDate: "",
        endDate: ""
    })


   
    const options = ['Rice', 'Chilli', 'Big onion','Corn','Potato'];

    const NextArrow =({onClick}) =>{
        return(
            <div className="arrow-next" onClick={onClick}>
                <FaArrowRight/>

            </div>
        )
    };
    const PrevArrow =({onClick}) =>{
        return(
            <div className="arrow-prev" onClick={onClick}>
                <FaArrowLeft/>

            </div>
        )
    };


    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerMode: true,
        centerPadding: 0,
        nextArrow:<nextArrow/>,
        prevArrow:<prevArrow/>

    };


    return (
        <div className="container">
            <div className="header">

                <div className="row">
                    <div className="column">
                        <h1>SriGrow</h1>
                        <ul>
                            <li className={showGuide ? "hover-box active" : "hover-box"}>
                                <Link to="#" className="option" onClick={toggleGuide}><PiChalkboardTeacher className="option-icon" />Guide </Link>
                            </li>
                            <li className={showCrops ? "hover-box active" : "hover-box"} >
                                <Link to="#" className="option" onClick={toggleCrops}><PiPlant className="option-icon" />Crops </Link>
                            </li>
                            <li className={showDetails ? "hover-box active" : "hover-box"}>
                                <Link to="#" className="option" onClick={toggleDetails} ><MdHistory className="option-icon" />Details</Link>
                            </li>
                            <li className="hover-box">

                                <Link to="/percentage" className="option"><MdBarChart className="option-icon" />Percentage</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-container">
                        <div className="d flexent">
                            {showGuide && (
                                <Grid container spacing={3} className="grid-container" >
                                    <Grid item xs={3}>
                                        <h2>Location</h2>
                                    </Grid>
                                    <Grid item xs={4}>

                                        <Select value={selectedProvince} onChange={handleProvinceChange} className="dropDown-box">
                                            <MenuItem value="">Select Province </MenuItem>
                                            {provinces.map((province) => (
                                                <MenuItem key={province} value={province}> <IoLocation className="guide-icon" />{province}</MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Select value={selectedDistrict} onChange={handleDistrictChange} className="dropDown-box">
                                            <MenuItem value="">Select District</MenuItem>
                                            {selectedProvince && districtByProvince[selectedProvince] && districtByProvince[selectedProvince].map((district) => (
                                                <MenuItem key={district} value={district}>{district}</MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <h2>Date</h2>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div >
                                            <input type="date" onChange={(e) => setDate(e.target.value)} />
                                        </div>

                                    </Grid>

                                    <Grid item xs={3}>
                                        <div className="date">
                                            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
                                        </div>
                                    </Grid>
                                    <div className="process-button">
                                        <button onClick={handleSubmit}>Process</button>
                                    </div>
                                </Grid>


                            )}
                            {showCrops && (

                                <CropsVar formData = {formData} cropType = {cropType} />

                            )}
                            {showDetails && (
                                <Grid container spacing={2} className="d flex detail-container">
                                    <div className="left-container">
                                        <h3>Crop details</h3>
                                        <div className="variety-dropdown">
                                            <p>Crop Variety </p>
                                            <Select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)} className="variety-dropDown-box">
                                                <MenuItem value="">Select Variety</MenuItem>
                                                {options.map((option, index) => (
                                                    <MenuItem key={index} value={option}>{option}</MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="growing-time-container">
                                            <p>Growing Time</p>
                                            <div className="growing-time-input">
                                                <TextField
                                                    label="Growing time"
                                                    value={growingTimeValue}
                                                    onChange={handleGrowingTimeChange}
                                                    variant="outlined"
                                                    className="timetext-field"
                                                />

                                            </div>
                                        </div>
                                        <br></br>


                                        <div className="growing-time-input">
                                            <p>Time</p>
                                            <TextField
                                                label="Time"
                                                value={inputValue}
                                                onChange={handleChange}
                                                variant="outlined"
                                                className="timetext-field"
                                            />
                                        </div>
                                        <div className="location-and-type">
                                            <div className="location-field">
                                                <p>Location</p>
                                                <TextField
                                                    select
                                                    label="Location"
                                                    value={city}
                                                    onChange={handleCityChange}
                                                    variant="outlined"
                                                    className="location-textField"
                                                >
                                                    {cities.map((city) => (
                                                        <MenuItem key={city} value={city}>
                                                            {city}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>

                                            <div className="type-dropdown">
                                                <p>Type</p>
                                                <TextField
                                                    select
                                                    label="Type"
                                                    value={Type}
                                                    onChange={handleTypeChange}
                                                    variant="outlined"
                                                    className="type-field"
                                                >
                                                    {Types.map((crop) => (
                                                        <MenuItem key={crop} value={crop}>
                                                            {crop}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="right-container">
                                        <div className="detail-right-container">
                                            <div className="detailPage-slider">
                                                <Slider {...settings}>
                                                    {images.map((img, idx) => (
                                                        <div >
                                                            <img src={img} alt={img} className="slider-img" />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                            <div className="right-content">
                                                <h3>Plant content</h3>
                                                <br></br>
                                                <ul>
                                                    <li>Water</li>
                                                    <li>Weather</li>
                                                    <li>Soil</li>
                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </Grid>
                            )}

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Container;