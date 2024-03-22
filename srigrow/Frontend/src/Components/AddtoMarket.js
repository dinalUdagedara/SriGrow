import React, { Component } from "react";
import '../Authentication/Authentication.css';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddNewPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      plantType: "",
      varietyCode: "",
      suitableAreas: [],
      MaxTime: "",
      MinTime: "",
      MinRainfall: "",
      MaxRainfall: "",
      ClimaticFactorsDescription: "",
      SoilConditionsDescription: "",
      SpecialNotes: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // componentDidMount() {
  //   fetch("http://localhost:5000/userData", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem("token")
  //     })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userData");
  //       this.setState({ userData: data.data });
  //     });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const {
      plantType,
      varietyCode,
      suitableAreas,
      MaxTime,
      MinTime,
      MinRainfall,
      MaxRainfall,
      ClimaticFactorsDescription,
      SoilConditionsDescription,
      SpecialNotes
    } = this.state;

    // You can perform form validation here if needed

    fetch("http://localhost:5000/addPlant", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        plantType,
        varietyCode,
        suitableAreas,
        MaxTime,
        MinTime,
        MinRainfall,
        MaxRainfall,
        ClimaticFactorsDescription,
        SoilConditionsDescription,
        SpecialNotes
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "plantAdded");
        // Handle success or error response accordingly
      });
  }
  handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      this.setState(prevState => ({
        suitableAreas: [...prevState.suitableAreas, value]
      }));
    } else {
      this.setState(prevState => ({
        suitableAreas: prevState.suitableAreas.filter(area => area !== value)
      }));
    }
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <div className="auth-inner-admin" style={{ height: '80vh', overflowY: 'auto' }}>
              <form onSubmit={this.handleSubmit}>
                <h3>Add to Market </h3>

                <div className="mb-3">
                  <label>Plant Type</label>
                  <select
                    className="form-control"
                    onChange={e => this.setState({ plantType: e.target.value })}
                    value={this.state.plantType}
                  >
                    <option value="">Select Type</option>
                    <option value="Rice">Rice</option>
                    <option value="Maize">Maize</option>
                    <option value="Onion">Onion</option>
                    <option value="Chillie">Chillie</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Variety name</label>
                  <input type="text" className="form-control" placeholder="Variety Name(Code)"

                    onChange={e => this.setState({ varietyCode: e.target.value })}
                  />
                </div>

                {/* <div className="mb-3">
                      <label>Suitable Areas</label>
                      <select
                        className="form-control"
                        multiple
                        onChange={e => {
                          const options = e.target.options;
                          const selectedAreas = [];
                          for (let i = 0; i < options.length; i++) {
                            if (options[i].selected) {
                              selectedAreas.push(options[i].value);
                            }
                          }
                          this.setState({ suitableAreas: selectedAreas });
                        }}
                        value={this.state.suitableAreas}
                  
                      >
                        <option value="">Select Suitable Areas</option>
                        <option value="Ampara">Ampara</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Batticaloa">Batticaloa</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Galle">Galle</option>
                        <option value="Gampaha">Gampaha</option>
                        <option value="Hambantota">Hambantota</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Kalutara">Kalutara</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Kegalle">Kegalle</option>
                        <option value="Kilinochchi">Kilinochchi</option>
                        <option value="Kurunegala">Kurunegala</option>
                        <option value="Mannar">Mannar</option>
                        <option value="Matale">Matale</option>
                        <option value="Matara">Matara</option>
                        <option value="Monaragala">Monaragala</option>
                        <option value="Mullaitivu">Mullaitivu</option>
                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                        <option value="Polonnaruwa">Polonnaruwa</option>
                        <option value="Puttalam">Puttalam</option>
                        <option value="Ratnapura">Ratnapura</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Vavuniya">Vavuniya</option>
                      </select>
                    </div> */}


                <div className="mb-3 checkBoxLocations">
                  <label>Suitable Areas</label>
                  <div className="locationCheckBox">
                    <div className="left-checkboxes">
                      {['Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha'].map(area => (
                        <div key={area} className="checkbox-label">
                          <input
                            type="checkbox"
                            value={area}
                            checked={this.state.suitableAreas.includes(area)}
                            onChange={this.handleCheckboxChange}
                            className="checkbox"
                          />
                          <label>{area}</label>
                        </div>
                      ))}
                    </div>
                    <div className="right-checkboxes">
                      {['Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala'].map(area => (
                        <div key={area} className="checkbox-label">
                          <input
                            type="checkbox"
                            value={area}
                            checked={this.state.suitableAreas.includes(area)}
                            onChange={this.handleCheckboxChange}
                            className="checkbox"
                          />
                          <label>{area}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>



                <div className="mb-3">
                  <label>Maximum Harvest Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Maximum number of Days (ex: 35) ,for 35 days) "
                    onChange={e => this.setState({ MaxTime: e.target.value })}
                  />

                </div>

                <div className="mb-3">
                  <label>Minimum Harvest Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Minimum number of Days (ex: 35) ,for 35 days) "
                    onChange={e => this.setState({ MinTime: e.target.value })}
                  />

                </div>

                <div className="mb-3">
                  <label>Minimum Rainfall Requirement</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter minimum rainfall requirement in mm (e.g., 50 for 50 mm)"
                    onChange={e => this.setState({ MinRainfall: e.target.value })}
                  />

                </div>


                <div className="mb-3">
                  <label>Maximum Rainfall Limit</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter maximum rainfall limit in mm (e.g., 100 for 100 mm)"
                    onChange={e => this.setState({ MaxRainfall: e.target.value })}
                  />
                </div>


                <div className="mb-3">
                  <label>Climatic Factors</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a brief description of climatic factors"
                    onChange={e => this.setState({ ClimaticFactorsDescription: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Soil Conditions</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter details about soil conditions (e.g., pH, texture)"
                    onChange={e => this.setState({ SoilConditionsDescription: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Special Notes</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter any special notes or additional details"
                    onChange={e => this.setState({ SpecialNotes: e.target.value })}
                  />
                </div>




                <div className="d-grid">
                <Link to="/guide">
                  <button type="submit" className="button">
                  Add Plant
                  </button>
                  </Link>
                  
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}