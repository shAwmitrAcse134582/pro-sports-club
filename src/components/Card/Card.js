import React, { useState } from 'react';
import './Card.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = (props) => {
    const{cart}=props;
    const [b,setB]=useState(0);
    let duration=0;
    console.log(cart);
    for(const mins of cart){
        duration=duration+mins.time;
    }
   
    const addBreak=(e)=>{
      
        setB(parseInt(e.target.innerText)+b);
    }
   
    
  
    let total=parseInt(b)+parseInt(duration);
    const addToast =()=>{
        toast('Congratulation! You have done your job in'+ total +'Minitues' );
    }
    return (
        <div className='cart'>
            <div className='profile'>
                <div>
                 <img src='https://i.ibb.co/zZLCXh0/IMG-20221224-140355-050.jpg'></img>
                </div>
                <div className='menu-text'>
                    <h3>Shawmitra Das</h3>
                    <p>Babuganj,Barishal</p>
                </div>
                </div>
                <div className='profile-info'>
                    <p>76kg<br></br>
                    <small>weight</small></p>

                    <p className='height'>6.5<br></br>
                    <small>height</small></p>

                    <p>25yrs<br></br>
                    <small>Age</small></p>

                </div>
                <h3>Add a Break</h3>
                <div className='break'>
                    <button onClick={addBreak}>10</button>
                    <button onClick={addBreak}>20</button>
                    <button onClick={addBreak}>30</button>
                    <button onClick={addBreak}>40</button>
                    <button onClick={addBreak}>50</button>
                    
                </div>
                <br></br>
                <h3>Sports duration</h3>
                
                <h4 >Sports time: {duration} minitue </h4>

                <h4 >Break time:{b} minitues</h4>
                <br></br>
                <button onClick={addToast}  className='activity'>Activity Completed</button>
                <ToastContainer/>
              
                
        </div>
    );
};

export default Card;