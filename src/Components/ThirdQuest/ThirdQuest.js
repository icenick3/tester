import React from 'react';
import './ThirdQuest.css'

const ThirdQuest = ({setQuest, quest}) => {
    return (
        <div id="FirsQuestion">
            <h2>Question <span>{quest}</span> / 5</h2>
            <p>How much time are you willing to spend on filling out the form?</p>
            <button onClick={()=>setQuest(4)}>5 – 10 minutes</button>
            <button onClick={()=>setQuest(4)}>10 – 20 minutes</button>
            <button onClick={()=>setQuest(4)}> more than 20 minutes</button>
        </div>
    );
};

export default ThirdQuest;