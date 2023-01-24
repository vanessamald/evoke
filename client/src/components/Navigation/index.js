import e from 'cors';
import React, { useState } from 'react';

function Navigation() {
    const [style, setStyle] = useState("hidden-nav");
    const [ button, setButton] = useState("lines-container")
    const [ toggle, setToggle ] = useState(false);
    
    const changeStyle = () => {
        if (!toggle) {
        console.log("you just clicked");
        setStyle("navigation-container");
        setButton("change");
        }
        if (toggle) {
            setButton("lines-container")
        }
    };

    const handleClick = () => {
        console.log('toggle')
        setToggle(!toggle);
        changeStyle();
    }

    return (
    <div style={{
          
    }}>   
        <button className='menu-btn' onClick={handleClick}>
        <div className={button}>
            <div className='menu-line1'></div>
            <div className='menu-line2'></div>
            <div className='menu-line3'></div>
        </div>
        </button>
    
        {toggle ?
        <div className='navigation-container' >
            <div className='navigation-links-container'>
                <a className='navigation-links' href='/#about'>About</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#services'>Services</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#theteam'>The Team</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#contact'>Contact Us</a>
                <div className='line'></div>
            </div>
        </div>
        : 
        <></>
        }
    </div>
    )
}

export default Navigation;