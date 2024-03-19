import React, { useState } from 'react';

function Login(props) {
  const employees = [
    {
      empId: 1, 
      name: "Arjun",
      dob: "16-11-2000", 
      role: "Software Engineer",
      password: "password@123"
    },
    {
      empId: 2, 
      name: "Mahesh", 
      dob: "15-01-2000", 
      role: "Web Developer",
      password: "password@123"
    },
    {
      empId: 3, 
      name: "Dinesh", 
      dob: "15-06-2002", 
      role: "Software Developer",
      password: "password@123"
    },
    {
      empId: 4, 
      name: "Sukumar", 
      dob: "05-06-1997", 
      role: "Technical Writer",
      password: "password@123"
    },
    {
      empId: 5, 
      name: "Aamer", 
      dob: "21-07-1999", 
      role: "Software Engineer",
      password: "password@123"
    },
    {
      empId: 6, 
      name: "Abdulla", 
      dob: "29-09-1997", 
      role: "System Engineer",
      password: "password@123"
    }
  ];
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const handleUser = (e) => {
    setUser(e.target.value);
  }

  const handlePwd = (e) => {
    setPwd(e.target.value);
  }
  
  const handleValidation = (e) => {
    e.preventDefault();

    const foundUser = employees.find(emp => 
      emp.name.toUpperCase() === user.toUpperCase() && emp.password === pwd
    );
    if(foundUser) {
      props.validation(true);
    } else {
      alert("Invalid username or password");
    }
  }
  
  
  return (
    <div className='Logo'>
      <img src="./images/loginLogo.png" alt="logo" />
      <p className='login-tag'>#We are Electric</p>
      <form onSubmit={handleValidation} className='login-form' >
        <input type="text" placeholder='Username' id='username' onChange={handleUser} required/>
        <input type="password" placeholder="Password" id="login-password" onChange={handlePwd} required />
        <button type="submit" id='loginBtn'>Login</button>
      </form>
      <a href="#">Forgot Password</a>
    </div>
  );
}

export default Login;
