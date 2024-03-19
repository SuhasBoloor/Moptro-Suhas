import React , { useState } from 'react';

function Employee(props) {
    const [search, setSearch] = useState();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        props.employees.forEach(element => {
            if(search === element.name){
                alert("Employee is available")
            }
        });
    }

    return ( 
        <div className='Employee'>
            <img id="help" src="./images/help.png" alt="Help" />
            <img id='homeLogo' src="./images/moptro_logo.png" alt="Logo" />
            <div className='searchOpt'>
                <input type="text" onChange={handleChange} placeholder='Search with name'/>
                <img id="search" onClick={handleSearch} src="./images/search.png" alt="Search" />
            </div >
            {props.employees.map(item => (
                <div key={item.empId} className='emp-details'>
                    <p><strong>EMP ID</strong> : {item.empId}</p>
                    <p><strong>Name</strong>   : {item.name}</p>
                    <p><strong>DOB</strong>    : <span style={{color: '#fbc514'}}>{item.dob}</span></p>
                    <p><strong>Role</strong>   : <span style={{color: '#27fb14'}}>{item.role}</span></p>
                </div>
            ))}
            
        </div>
    );
}

export default Employee;
