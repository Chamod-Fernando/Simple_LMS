import React, { useState } from 'react';
import './Registration.css';
import NavBar from './NavBar';
import axios from 'axios';


export const Registration = (props) => {
      //let history = useNavigate();
      const [data,setData] = useState({
        name:"",
        nic:"",
        stuid:"",
        password:"",
        address:"",
        email:"",
        number:"",
        district:"",
        city:"",
    
      })

    
      const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
      }
    
      const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
          name:data.name,
          district:data.district,
          city:data.city,
          role:data.role,
          nic:data.nic,
          email:data.email,
          number:data.number,
          password:data.password,
        }
    
          axios.post("http://localhost/web/20it0466/backend/registration.php",sendData).then((result)=>{
            if(result.data.status === 'Invalid') {
              alert('Invalid User');
            } else {
             alert('Successful!');
            }
          })
        }
    return(
      <div><NavBar/>
<form onSubmit={submitForm}>
    <div><h1>Registration Form</h1></div>
  <div class="form-row">
  <div class="name">
      <label for="name">Name</label>
      <input type="name" name="name" class="form-control" id="name" placeholder="Enter you Name" onChange={handleChange} value={data.name}/>
    </div>
    <div class="nic">
      <label for="nic">NIC Number</label>
      <input type="nic" name="nic" class="form-control" id="nic" placeholder="Enter you NIC Number" onChange={handleChange} value={data.nic}/>
    </div>
    <div class="email">
      <label for="email">Email</label>
      <input type="email" name="email" class="form-control" id="email" placeholder="Enter your Email" onChange={handleChange} value={data.email}/>
    </div>
    <div class="pass">
      <label for="pass">Password</label>
      <input type="password" name="password" class="form-control" id="password" placeholder="Create Password" onChange={handleChange} value={data.password}/>
    </div>
  </div>
  <div class="add">
    <label for="Address">Address</label>
    <input type="text" name="address" class="form-control" id="address" placeholder="Enter Your Address" onChange={handleChange} value={data.address}/>
  </div>
  
  <div class="form-row">
    <div class="district">
      <label for="district">District</label>
      <input type="text" name="district" class="form-control" id="district" placeholder='Enter Your District' onChange={handleChange} value={data.district}/>
    </div>
    <div class="form-row">
    <div class="city">
      <label for="city">City</label>
      <input type="text" name="city" class="form-control" id="city" placeholder='Enter Your City' onChange={handleChange} value={data.city}/>
    </div>
    </div>
    
  <div class="add">
    <label for="Tel">Telephone Number</label>
    <input type="number" name="number" class="form-control" id="number" placeholder="Enter Your Phone Number" onChange={handleChange} value={data.number}/>
  </div>
    <div class="jobrole">
      <label for="jobrole">Job Role</label>
      <select id="jobrole" class="form-control">
        <option selected>Teacher</option>
        <option >Student</option>
      </select>
    </div>
    
  </div>
  <div>
  <button type="submit" name="submit" class="btn btn-primary" value="register">Register</button>
  <button type="reset" name="reset" class="btn btn-primary">Reset</button>
  </div>
</form>
</div>
);
}

export default Registration;