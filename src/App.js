import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Employee from './Employee';

function App() {
  const [validate, setValidate] = useState(false);
  const [page, setPage] = useState("employee");

  const handleHomeClick = () => {
    setPage("employee")
  }

  const handleUserClick = () => {
    setPage("home")
  }

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

  return (
    <div className="App">

      {
        validate ?
          <>
            {page==="home" ?
              <Employee employees={employees} />
              :
              <Home />

            }

            <div className='footer'>
              <img id='home' onClick={handleHomeClick} src="./images/home.png" alt="Home" />
              <img id='user' onClick={handleUserClick} src="./images/user.png" alt="Employee" />
            </div>
          </>


          :
          <Login validation={setValidate} />
      }
    </div>
  );
}

export default App;
