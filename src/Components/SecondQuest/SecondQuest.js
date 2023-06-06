import React from 'react';
import './SecondQuest.css'

const SecondQuest = ({setQuest, quest}) => {
    return (
        <div id="FirsQuestion">
            <h2>Question <span>{quest}</span> / 5</h2>
            <p>Your age</p>
            <button onClick={()=>setQuest(3)}>18-24</button>
            <button onClick={()=>setQuest(3)}>25-35</button>
            <button onClick={()=>setQuest(3)}>36-45</button>
            <button onClick={()=>setQuest(3)}>46-55</button>
            <button onClick={()=>setQuest(3)}>56-60</button>
            <button onClick={()=>setQuest(3)}>61+</button>
        </div>
    );
};

export default SecondQuest;