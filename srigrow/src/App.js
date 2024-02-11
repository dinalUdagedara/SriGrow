import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './HomePage';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <HomePage/>
      </div>
    </Router>
  );
}

export default App;
