import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
 
    const [roomCode, setRoomCode]=useState('');
    const navigate=useNavigate();

    const handleFormSubmit=(ev)=>{
     ev.preventDefault();
navigate(`/room/${roomCode}`);

    }


  return (
    <div className='home-page'>
        <h1 className='text-white easy'>Welcome to <span className='text-primary bg-white rounded-3'>Easy Face</span></h1>

        <div className="adtext">

     
     <h1>Arrange a meeting in <span className='text-primary'>No time</span> with <span className='text-warning'>Easy Face</span></h1>
     <h1>We Offer Amazingly <span className='text-primary'>Simple Ui</span></h1>
     <h1>Without a doubt Visually <span className='text-primary'>Cleanest</span></h1>
     </div>
      <form className='form'>
        
        
            <h1>Enter Room Code</h1>
            <input  value={roomCode}
            onChange={(e)=>setRoomCode(e.target.value)}
            type='text' required placeholder='Enter Room Code'></input>
        
        <button className='btn btn-primary' type='submit' onClick={handleFormSubmit}>Enter Room</button>
        
      </form>

     
    </div>
  )
}

export default HomePage
