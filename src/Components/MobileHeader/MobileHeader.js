import React from 'react';
import './MobileHeader.css'

const MobileHeader = ({setCounter, setActive}) => {


    return (
        <header className="header">
            <img className="menu" src="https://i.pinimg.com/originals/15/6a/6a/156a6a17bda18ae6ed0269c7a583f0bf.png" alt="" onClick={()=> setActive(true)}/>
            <h1 onClick={()=> setCounter(0)}>
                Your<span>VIEW</span>
            </h1>
        </header>
    );
};

export default MobileHeader;