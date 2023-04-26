import React from 'react'
import NavBar from './NavBar';


function Login() {
  return (
    <div><NavBar/>
      <form>
    <div className="LogHead"><h1>User Login</h1></div>
  <div class="form-row">
  <div class="nic">
      <label for="nic">NIC Number</label>
      <input type="nic" class="form-control" id="nic" placeholder="Enter your NIC Number"/>
    </div>
    <div class="password">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter your Password"/>
    </div>
    <div class="jobRole">
      <label for="inputState">Job Role</label>
      <select id="inputState" class="form-control">
        <option selected>Teacher</option>
        <option >Student</option>
      </select>
    </div>
    <div>
  <button type="login" class="btn btn-primary">Login</button>
  <button type="reset" class="btn btn-primary">Reset</button>
  </div>
    </div>
    </form>
    </div>
  );
}

export default Login;
