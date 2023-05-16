import React from 'react';
import './Card.css';

const Card = () => {
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
                    <p>10m</p>
                    <p>20m</p>
                    <p>30m</p>
                    <p>40m</p>
                    <p>50m</p>
                </div>
                <br></br>
                <h3>Sports duration</h3>
                
                <h4 >Sports time:</h4>

                <h4 >Break time:</h4>
                <br></br>
                <h3 className='activity'>Activity Completed</h3>
        </div>
    );
};

export default Card;