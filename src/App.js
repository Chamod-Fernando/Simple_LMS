import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from './pages/Registration';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
