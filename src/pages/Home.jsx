import React from 'react'
import './Home.css';
import logo1 from './logo1.png';
import NavBar from './NavBar';

function Home() {
  return (
    <div><NavBar/>
    <div className="Heading">
        <div>
      <h1>Smart College</h1>
    </div>
    <div className="logo">
        <img src={logo1} alt={logo1} width={300} />
      </div><div class="footer">
        <h4>..Created by pioTec..</h4>
        </div>
      </div>
      </div>
  );
}

export default Home;


