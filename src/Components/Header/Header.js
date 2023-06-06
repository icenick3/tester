import React from 'react';
import './Header.css'

const Header = ({setCounter}) => {

    return (
      <header className="bigHeader">
          <h1 onClick={()=> setCounter(0)}>
              Your<span>VIEW</span>
          </h1>
          <p onClick={()=> setCounter(1)}>
              How does it works?
          </p>
          <p onClick={()=> setCounter(2)}>
              FAQ
          </p>
          <p onClick={()=> setCounter(0)}>
              Join now
          </p>
      </header>
    );
};

export default Header;