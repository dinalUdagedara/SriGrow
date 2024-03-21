
import React, { useState } from 'react';
import WeatherPrediction from './Services/weatherPred';

function App() {
  const [path, setPath] = useState('weather');

  const handlePathChange = newPath => {
    setPath(newPath);
  };

  return (
    <div>
      {path === 'weather' && <WeatherPrediction />}
    </div>
  );
}

export default App;