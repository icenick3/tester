import React from 'react';
import './HowItWork.css'

const HowItWork = ({setCounter}) => {
    return (
        <div className="howItWorks">
            <div className="howItWorksContainer">
                <div className="howItWorkText">
                    <h2>How does it work?</h2>
                    <p>YourView is an independent company looking for people to conduct market research.</p>

                <h2>Change the world around you!</h2>
                <p>Many of large companies, banks, supermarkets, cosmetics brands create surveys to collect customer
                    feedback to improve their products and services.</p>
                <h2>It's free</h2>
                <p>Become a member today and start earning rewards with online surveys!</p>
                <button onClick={()=> setCounter(0)}>JOIN NOW</button>
                </div>
                <div className="howItWorksImage">
                    <img src="https://i.pinimg.com/originals/ca/df/4a/cadf4aae68dacd2c29b182c433eba37f.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;