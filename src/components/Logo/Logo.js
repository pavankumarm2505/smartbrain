import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'
const Logo = () => {
    return(
        <div className='ma4 mt0'>
        <Tilt style={{ height: '150px', width:'150px' }}>
            <div  className='br2 shadow-2' style={{ height: '150px', width:'150px',  background: 'linear-gradient(to right, rgb(169, 6, 229), rgb(184, 240, 244))' }} >
            <div className="pa3"><img style={{paddingTop: '5px'}} src={brain} alt="brainslogo"></img></div>
            </div>
    </Tilt>
        </div>
    );
}
export default Logo;