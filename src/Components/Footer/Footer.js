import React from 'react';
import './Footer.css'

const Footer = ({setCounter}) => {

    return (
        <footer>
            <div>
                <p onClick={()=>setCounter(3)}>Data Protection</p>
                <p onClick={()=>setCounter(4)}>Terms and conditions</p>
                <p onClick={()=>setCounter(5)}>Contact us</p>
            </div>
        </footer>
    );
};

export default Footer;