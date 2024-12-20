import React, { Component } from 'react'
import '../Authentication/Authentication.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const{email,password} = this.state;
    console.log(email,password);

    fetch("http://localhost:5001/login-user",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
        password
      }),

    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister")
      if(data.status == "ok"){
        alert ("login Successfull");
        window.localStorage.setItem("token",data.data);
        window.location.href="./AdminPanel";
      }else if(data.error == "Invalid Password"){
        alert ("Email or the Password you Entered is Incorrect Please Try Again ");
      }else if(data.error == "User not Found"){
        alert ("User not Found");
      }
    })



  }
  render() {
    return (
      <div className='auth-body'>
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label className='auth-text'>Email address</label><br></br>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label><br></br>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e=>this.setState({password:e.target.value})}
          />
        </div>


        <div className="d-grid">
          <button  type="submit" className="button">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          or  <a href="/sign-up">SignUp</a>
        </p>
      </form>
      </div>
      </div>
      </div>
    )
  }
}
