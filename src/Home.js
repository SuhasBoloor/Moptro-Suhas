import React from 'react'
// import {ProgressBar} from 'react-bootstrap/ProgressBar';
import { Progress } from 'flowbite-react';

function Home() {
  const productivity = [["Monday", 4], ["Tuesday", 92], ["Wednesday", 122], ["Thursday", 93], ["Friday", 89], ["Saturday", 98]];
  return (
    <div className='Home'>
      <img id="help" src="./images/help.png" alt="Help" />
      <img id='homeLogo' src="./images/moptro_logo.png" alt="Logo" />
      <div className='dashBoard'>

        <p className='dbTitle'>Employee Productivity Dashboard</p>
        {
          productivity.map((item) => {
            return (
              <div className='productivity-tracker'>
                <p className='bar-title'>Productivity on {item[0]}</p>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: `${item[1]}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
