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

const Container = () => {
    //const [showContainer, setShowContainer]= useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [showCrops, setShowCrops] = useState(false);

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


    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [date, setDate] = useState();


    console.log("Date", date);

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
    const handleProvinceChange = (event) => {
        setSelectedProvince(event.target.value);
        // Reset selected district when province changes
        setSelectedDistrict("");
    };
    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const handleSubmit = () => {
        console.log("form submitted")
    }






    return (
        <div className="container">
            <div className="header">
                <h1>SriGrow</h1>
                <div className="row">
                    <div className="column">
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
                        <div className="d flex guide-content">
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
                                            <input type="date" onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                    </Grid>
                                    <div className="process-button">
                                        <button onClick={handleSubmit}>Process</button>
                                    </div>
                                </Grid>


                            )}
                            {showCrops && (

                                <CropsVar />

                            )}
                            {showDetails && (
                                <Grid container spacing={3} className="grid-container">
                                    {/* Content for the Details section */}
                                    <h1>Details Content</h1>
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