import { JokeProvider } from 'contexts/JokeContext';
import App from './App';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';




const Boot = () => {

  return (
    <Router>
    <JokeProvider>
        <App />
    </JokeProvider> 
    </Router>
   
  )
}

export default Boot
