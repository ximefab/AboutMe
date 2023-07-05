
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;


// The following is a list of videos used for this app!
//Current video is at 16:40 https://youtu.be/I2UBjN5ER4s?t=1000