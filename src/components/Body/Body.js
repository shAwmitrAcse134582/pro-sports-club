import React, { useEffect, useState } from 'react';
import "./Body.css";
import Sport from '../Sport/Sport';

const Body = () => {
    const[sports,setSports]=useState([])
    
      useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setSports(data));

      },[])

    return (
        <div className='body'>
            <div className='card'>
            {/* <h1>Today's sports event</h1>  */}
                {
                     sports.map(sport=><Sport
                    id={sport.id}
                    sport={sport}
                     >
                     </Sport>)
                }
                
            </div>

            <div className='menu'>
                <h3>calculation section</h3>

            </div>
            
        </div>
    );
};

export default Body;