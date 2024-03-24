import React, { Component } from "react";
import '../Authentication/Authentication.css';


export default class AddMarketItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      crop_details: [
        { crop_name: "", previous_week_price: "", last_week_price: "", this_week_price: "" }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCropChange = this.handleCropChange.bind(this);
    this.addCrop = this.addCrop.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { location, crop_details } = this.state;

    fetch("http://localhost:5001/addMarketItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        location,
        crop_details
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert ("Item Added Succesfully to Database");
   
        window.location.href="./AdminPanel";
        
        // Handle success or error response accordingly
      });
  }

  handleCropChange(e, index) {
    const { name, value } = e.target;
    const crop_details = [...this.state.crop_details];
    crop_details[index][name] = value;
    this.setState({ crop_details });
  }

  addCrop() {
    this.setState((prevState) => ({
      crop_details: [...prevState.crop_details, { crop_name: "", previous_week_price: "", last_week_price: "", this_week_price: "" }]
    }));
  }

  render() {
    return (
      <div className="auth-wrapper  addNewPlantWrapper">
        <div className="auth-inner">
          <div className="auth-inner-admin" style={{ overflowY: 'auto' }}>
            <form onSubmit={this.handleSubmit}>
              <h3>Add Market Item</h3>

              <div className="mb-3">
                <label>1. Location</label>
                <input
                  type="text"
                  className="form-control custom-border-color"
                  placeholder="Enter location"
                  value={this.state.location}
                  onChange={e => this.setState({ location: e.target.value })}
                  
                />
              </div>

              {this.state.crop_details.map((crop, index) => (
                <div key={index}>
                  <div className="mb-3">
                    <label>2. Crop Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter crop name"
                      name="crop_name"
                      value={crop.crop_name}
                      onChange={e => this.handleCropChange(e, index)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>3. Previous Week Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter previous week price"
                      name="previous_week_price"
                      value={crop.previous_week_price}
                      onChange={e => this.handleCropChange(e, index)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>4. Last Week Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last week price"
                      name="last_week_price"
                      value={crop.last_week_price}
                      onChange={e => this.handleCropChange(e, index)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>5. This Week Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter this week price"
                      name="this_week_price"
                      value={crop.this_week_price}
                      onChange={e => this.handleCropChange(e, index)}
                    />
                  </div>
                </div>
              ))}
              <div className="buttons">
              <button type="button" className="button addanother" onClick={this.addCrop}>
                Add a another Crop
              </button>
              </div>

              <div className="buttons">
              <div className="d-grid">
                <button type="submit" className="button">
                  Add Market Items to Database
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
