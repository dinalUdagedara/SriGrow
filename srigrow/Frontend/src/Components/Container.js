// import React, { useState } from "react";
import React, { useEffect, useState } from 'react';
import '../Containers/Style.css';
import { Link } from "react-router-dom";
import { PiPlant } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Grid, Select, MenuItem,Typography } from '@mui/material';
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
import axios from 'axios'




const Container = ({cropType}) => {


    console.log("CropType Passed to Contanier",{cropType})
    //const [showContainer, setShowContainer]= useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [showCrops, setShowCrops] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [predictedMaxPrecipitation,setpredictedMaxPrecipitation] = useState ()
    var maxPrecipitation = 0

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




    const [city, setCity] = useState('');
    useEffect(() => {
        setShowGuide(true);
    }, []);

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



    //API Calls to Fetch Data


        //Rice Varieties API
        
        const [RiceVarities, setRiceVarieties] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:5001/getRiceVarieties')
            .then(response => {
            setRiceVarieties(response.data);
            })
            .catch(err=>console.log('Error fetching Rice varieties: ',err))
        },[])

        //Onion Variety 

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
   
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowDetails(true);
        let variety = null;

        switch (cropType) {
            case 'Rice':
                variety = RiceVarities.find(variety => variety.varietyName === option);
                break;
            case 'Chillie':
                variety = ChillieVarities.find(variety => variety.varietyName === option);
                break;
            case 'Maize':
                variety = MaizeVarities.find(variety => variety.varietyName === option);
                break;
            case 'Onion':
                variety = OnionVarities.find(variety => variety.varietyName === option);
                break;

            default:
                break;
        }
    
        if (variety) {
            setSuitableAreas(variety.suitableAreas);
        }


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
        setShowGuide(false);
        setShowCrops(true);
        setShowDetails(false);
    
        // Send data to Flask backend
        axios.post('http://localhost:5000/predict', {
            city: selectedDistrict,
            start_date: date,
            end_date: endDate
        })
        .then(response => {
            // Update predictedMaxPrecipitation state
            setpredictedMaxPrecipitation(response.data);
            // Calculate the number of days between start and end dates
            const startDate = new Date(date);
            const calculatedEndDate = new Date(endDate);
            const differenceInTime = calculatedEndDate.getTime() - startDate.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    
            // Update formData with the latest values including prediction
            setformData({
                selectedProvince: selectedProvince,
                selectedDistrict: selectedDistrict,
                startDate: date,
                endDate: calculatedEndDate,
                numberOfDays: differenceInDays,
                prediction: response.data // Use the updated value from response
            });
    
            // Display predictions to the user if needed
            console.log('Correct Predicted Precipitation', response.data);
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    };
    


    // const handleSubmit = () => {
        
    //     setShowGuide(false);
    //     setShowCrops(true);
    //     setShowDetails(false);




    //     //Model Calling and Getting Prediction
    //     // Send data to Flask backend
    //     axios.post('http://localhost:5000/predict', {
    //         city: selectedDistrict, // Assuming you want to use province as city for now
    //         start_date: date,
    //         end_date: endDate
    //     })
    //     .then(response => {
    //         // const predictedAveragePrecipitation = response.data
    //         setpredictedMaxPrecipitation(response.data)
    //          maxPrecipitation = response.data
    //         // Handle successful response (predictions)
    //       console.log('Response Data Precipitation:',maxPrecipitation);
    //       console.log('Correct Predicted Precipitation',predictedMaxPrecipitation)
    //         // Display predictions to the user
    //         // You can set predictions to state or display them directly
    //     })
    //     .catch(error => {
    //         // Handle error
    //         console.error('Error:', error);
    //     });


    //   // Calculate the number of days between start and end dates
    // const startDate = new Date(date);
    // const calculatedEndDate = new Date(endDate); // Changed from endDate to calculatedEndDate
    // const differenceInTime = calculatedEndDate.getTime() - startDate.getTime();
    // const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    //     // Update formData with the latest values
    // setformData({
    //     selectedProvince: selectedProvince,
    //     selectedDistrict: selectedDistrict,
    //     startDate: date,
    //     endDate: calculatedEndDate, // Changed from endDate to calculatedEndDate
    //     numberOfDays: differenceInDays,  // Save the calculated number of days
    //     prediction : predictedMaxPrecipitation
   
    // });
      

    // console.log('Correct Predicted Precipitation',predictedMaxPrecipitation)
    //     console.log("Form Data : ",formData)
    //     console.log("form submitted ")



        
    // }

    const [formData,setformData] = useState({
        selectedProvince: "",
        selectedDistrict: "",
        startDate: "",
        endDate: "",
        prediction:""
    })


    // Add a new state to store suitable areas
const [suitableAreas, setSuitableAreas] = useState([]);


            const options = [];
        // Add crop varieties based on cropType
        switch (cropType) {
            case 'Rice':
                RiceVarities.forEach((variety) => {
                    options.push(variety.varietyName);
                });
                break;
            case 'Chillie':
                ChillieVarities.forEach((variety) => {
                    options.push(variety.varietyName);
                });
                break;
            case 'Maize':
                MaizeVarities.forEach((variety)=>{
                    options.push(variety.varietyName)
                });
                break;
            case 'Onion':
            OnionVarities.forEach((variety)=>{
                options.push(variety.varietyName)
            });
            break;
           
            default:
                // Default behavior
                break;
        }


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
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>

    };


    return (
        <div className="guide-container">
            <div className="header">

                <div className="row">
                    <div className="column">
                        <h1>SriGrow</h1>
                        <ul>
                            <li className={showGuide ? "hover-box active" : "hover-box"}>
                                <Link to="#" className="option" onClick={toggleGuide}>
                                    <PiChalkboardTeacher className="option-icon" />
                                    <span className="icon-text">Guide</span>
                                </Link>
                            </li>
                            <li className={showCrops ? "hover-box active" : "hover-box"} >
                                <Link to="#" className="option" onClick={toggleCrops}>
                                    <PiPlant className="option-icon" />
                                    <span className="icon-text">Crops</span>
                                </Link>
                            </li>
                            <li className={showDetails ? "hover-box active" : "hover-box"}>
                                <Link to="#" className="option" onClick={toggleDetails} >
                                    <MdHistory className="option-icon" />
                                    <span className="icon-text">Details</span>
                                </Link>
                            </li>
                
                        </ul>
                    </div>
                    <div className="sub-container">
                        <div className='variety-container'>
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
                                            <input class="input"type="date" onChange={(e) => setDate(e.target.value)} />
                                        </div>

                                    </Grid>

                                    <Grid item xs={3}>
                                        <div className="date">
                                            <input class="input" type="date" onChange={(e) => setEndDate(e.target.value)} />
                                        </div>
                                    </Grid>
                                    <div className="process-button">
                                        <button className="button" onClick={handleSubmit}>Process</button>
                                    </div>
                                </Grid>


                            )}
                            
                            {showCrops && (
                                
                                <CropsVar 
                                formData = {formData} 
                                cropType = {cropType}
                                />
                            
                            )}
                            

                            
                            
                            </div>
                            
                            {/* <div className='detail-cont'> */}
                            {showDetails && (
                                

                                <div className='detail'>
                                    console.log({"In ShowDetails"+ {cropType}})
                                <Grid container spacing={2} className="d flex detail-container">
                                    <div className="left-container">
                                        <h3>Crop details</h3>
                                        <br></br>
                                        <div className="variety-dropdown">
                                            <p style={{ fontWeight: 'bold', fontSize: '1.0rem' }}>Crop Variety </p>
                                 
                                            <Select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)} className="variety-dropDown-box">
                                                <MenuItem value="">Select Variety</MenuItem>
                                                {options.map((option, index) => (  
                                                    <MenuItem key={index} value={option}>{option}</MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="growing-time-container">
                                            <p style={{ fontWeight: 'bold', fontSize: '1.0rem' }}>Harvest Timeframe: </p>                                         
                                            <Typography variant="body1">
                                                {selectedOption && (
                                                    <span >
                                                        {(() => {
                                                            switch (cropType) {
                                                                case 'Rice':
                                                                    const riceVariety = RiceVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return riceVariety ? `Maximum Time Period is ${riceVariety.maxTimePeriod} Days` : '';

                                                                case 'Chillie':
                                                                    const chillieVariety = ChillieVarities.find(variety => variety.varietyName === selectedOption);
                                                                        return chillieVariety ? `Maximum Time Period is ${chillieVariety.maxTimePeriod} Days` : '';
                                                                    
                                                                case 'Maize':
                                                                const maizeVariety = MaizeVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return maizeVariety ? `Maximum Time Period is ${maizeVariety.maxTimePeriod} Days` : '';

                                                                case 'Onion':
                                                                    const onionVariety = OnionVarities.find(variety => variety.varietyName === selectedOption);
                                                                        return onionVariety ? `Maximum Time Period is ${onionVariety.maxTimePeriod} Days` : '';

                                                                default:
                                                                    return '';
                                                            }
                                                        })()}
                                                        <br></br>
                                                    </span>
                                                )}
                                            </Typography>
                                            

                                        </div>
                                        <br></br>

                                    <div className="growing-time-input">
                                    <p style={{ fontWeight: 'bold', fontSize: '1.0rem' }} >Rainfall Requirement: </p>
                                        <Typography variant="body1">
                                            {selectedOption && (
                                                <span>
                                                    {(() => {
                                                        switch (cropType) {
                                                            case 'Rice':
                                                                const riceVariety = RiceVarities.find(variety => variety.varietyName === selectedOption);
                                                                if (riceVariety) {
                                                                    // Concatenate both precipitation information strings
                                                                    const precipitationInfo = `"Driest conditions" or "lowest amount of rainfall" ${riceVariety.lowPrecipitation} mm. 
                                                                    "Extreme precipitation" or "extreme rainfall" ${riceVariety.maxPrecipitation} mm.`;
                                                                    // Return both precipitation information as one string
                                                                    return precipitationInfo;
                                                                }
                                                            case 'Chillie':
                                                                const chillieVariety = ChillieVarities.find(variety => variety.varietyName === selectedOption);
                                                                if (chillieVariety) {
                                                                    // Concatenate both precipitation information strings
                                                                    const precipitationInfo = `"Driest conditions" or "lowest amount of rainfall" ${chillieVariety.lowPrecipitation} mm. 
                                                                    "Extreme precipitation" or "extreme rainfall" ${chillieVariety.maxPrecipitation} mm.`;
                                                                    // Return both precipitation information as one string
                                                                    return precipitationInfo;
                                                                }
                                                            case 'Maize':
                                                                const maizeVariety = MaizeVarities.find(variety => variety.varietyName === selectedOption);
                                                                if (maizeVariety) {
                                                                    // Concatenate both precipitation information strings
                                                                    const precipitationInfo = `"Driest conditions" or "lowest amount of rainfall" ${maizeVariety.lowPrecipitation} mm. 
                                                                    "Extreme precipitation" or "extreme rainfall" ${maizeVariety.maxPrecipitation} mm.`;
                                                                    // Return both precipitation information as one string
                                                                    return precipitationInfo;
                                                                }
                                                            case 'Onion':
                                                                const onionVariety = OnionVarities.find(variety => variety.varietyName === selectedOption);
                                                                if (onionVariety) {
                                                                    // Concatenate both precipitation information strings
                                                                    const precipitationInfo = `"Driest conditions" or "lowest amount of rainfall" ${onionVariety.lowPrecipitation} mm. 
                                                                    "Extreme precipitation" or "extreme rainfall" ${onionVariety.maxPrecipitation} mm.`;
                                                                    // Return both precipitation information as one string
                                                                    return precipitationInfo;
                                                                }

                                                            default:
                                                                return '';
                                                        }
                                                    })()}
                                                </span>
                                            )}
                                        </Typography>
                                    </div>



                                    <div className="growing-time-container">
                                    <p style={{ fontWeight: 'bold', fontSize: '1.0rem' }}>Atmospheric Features:</p>
                                            
                                            <Typography variant="body1">
                                                {selectedOption && (
                                                    <span>
                                                        {(() => {
                                                            switch (cropType) {
                                                                case 'Rice':
                                                                    const riceVariety = RiceVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return riceVariety ? riceVariety.atmosphericFeautures : '';

                                                                case 'Chillie':
                                                                    const chillieVariety = ChillieVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return chillieVariety ? chillieVariety.atmosphericFeautures : '';
                                                                    
                                                                case 'Maize':
                                                                const maizeVariety = MaizeVarities.find(variety => variety.varietyName === selectedOption);
                                                                return maizeVariety ? maizeVariety.atmosphericFeautures : '';

                                                                case 'Onion':
                                                                    const onionVariety = OnionVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return onionVariety ? onionVariety.atmosphericFeautures : '';

                                                                default:
                                                                    return '';
                                                            }
                                                        })()}
                                                    </span>
                                                )}
                                            </Typography>
                                            

                                        </div>




                                    <div className="location-and-type">
                                        <div className="location-field">
                                            <p style={{ fontWeight: 'bold', fontSize: '1.0rem', paddingRight: '110px' }}>Locations Suitable</p>
                                            <Select
                                                select
                                                value={city}
                                                variant="outlined"
                                                className="location-textField"
                                            >
                                                {/* {cities.map((city) => (
                                                    <MenuItem key={city} value={city}>
                                                        {city}
                                                    </MenuItem>
                                                ))} */}

                                            {suitableAreas.map((area) => (
                                                    <MenuItem key={area} value={area}>
                                                        {area}
                                                    </MenuItem>
                                            ))}
                                                
                                            </Select>
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
                                                <h3>Variety Specilaities</h3>
                                                

                                                <ul>
                                                   
                                                            <li>
                                                            <Typography variant="body1">
                                                {selectedOption && (
                                                    <span>
                                                        {(() => {
                                                            switch (cropType) {
                                                                case 'Rice':
                                                                    const riceVariety = RiceVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return riceVariety ? riceVariety.varietyName : '';

                                                                case 'Chillie':
                                                                    const chillieVariety = ChillieVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return chillieVariety ? chillieVariety.varietyName : '';
                                                                    
                                                                case 'Maize':
                                                                const maizeVariety = MaizeVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return maizeVariety ? `Soil Condition: ${maizeVariety.varietyName} `: '';

                                                                case 'Onion':
                                                                    const onionVariety = OnionVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return onionVariety ? onionVariety.varietyName : '';

                                                                default:
                                                                    return '';
                                                            }
                                                        })()}
                                                    </span>
                                                )}
                                            </Typography>
                                                            </li>
                                           
                                                    <li>
                                                        <Typography variant="body1">
                                                {selectedOption && (
                                                    <span>
                                                        {(() => {
                                                            switch (cropType) {
                                                                case 'Rice':
                                                                    const riceVariety = RiceVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return riceVariety ? `Soil Condition: ${riceVariety.soilCondtion} `: '';

                                                                case 'Chillie':
                                                                    const chillieVariety = ChillieVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return chillieVariety ? `Soil Condition: ${chillieVariety.soilCondtion} `: '';
                                                                    
                                                                case 'Maize':
                                                                const maizeVariety = MaizeVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return maizeVariety ? `Soil Condition: ${maizeVariety.soilCondtion} `: '';

                                                                case 'Onion':
                                                                    const onionVariety = OnionVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return onionVariety ? `Soil Condition: ${onionVariety.soilCondtion} `: '';

                                                                default:
                                                                    return '';
                                                            }
                                                        })()}
                                                    </span>
                                                )}
                                            </Typography>
                                                        </li>
                                                    <li>
                                                    <Typography variant="body1">
                                                {selectedOption && (
                                                    <span>
                                                        {(() => {
                                                            switch (cropType) {
                                                                case 'Rice':
                                                                    const riceVariety = RiceVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return riceVariety ? `Atmospheric Features: ${riceVariety.atmosphericFeautures} `: '';

                                                                case 'Chillie':
                                                                    const chillieVariety = ChillieVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return chillieVariety ? `Atmospheric Features: ${chillieVariety.atmosphericFeautures} `: '';
                                                                    
                                                                case 'Maize':
                                                                const maizeVariety = MaizeVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return maizeVariety ? `Atmospheric Features: ${maizeVariety.atmosphericFeautures} `: '';

                                                                case 'Onion':
                                                                    const onionVariety = OnionVarities.find(variety => variety.varietyName === selectedOption);
                                                                    return onionVariety ? `Atmospheric Features: ${onionVariety.atmosphericFeautures} `: '';

                                                                default:
                                                                    return '';
                                                            }
                                                        })()}
                                                    </span>
                                                )}
                                            </Typography>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </Grid>
                             </div>
                            )}

                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Container;