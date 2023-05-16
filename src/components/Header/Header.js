import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <div className='left'>
                <img src='https://img.freepik.com/premium-photo/sports-3d-illustration_738723-121.jpg?w=740'></img>
                <h1>Pro sports club</h1>
            </div>
            <div className='right'>
                <a href='#Home'>Home</a>
                <a href='#about'>about</a>
                <a href='#contact'>contact</a>
                <a href='#list'>List</a>
            </div>
            
        </div>
    );
};

export default Header;