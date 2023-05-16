import React from 'react';
import './Sport.css'

const Sport = (props) => {
   const{name,description,img,age,time}=props.sport;

   
    
    return (
        <div className='sport'>
            <img src={img} alt=""></img>
            <div className='sport-info'>
            <h2>{name}</h2>
           <p>{description}</p>
           <h5>age:{age}</h5>
           <h4>time:{time}mins</h4>
            </div>
          
           <button onClick={()=>props.addClick(props.sport)} className='btn-sport'>Add To List</button>
          
        </div>
    );
};

export default Sport;