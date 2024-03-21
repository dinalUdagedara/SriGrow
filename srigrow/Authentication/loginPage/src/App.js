import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component';
import SignUp from './components/signup.component';
import AddNewPlant from "./components/AddNewPlant";


function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
 
              <Route path="/AddNewPlant" element={<AddNewPlant/>}/>
            
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  )
}

export default App