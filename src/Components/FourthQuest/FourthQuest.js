import React from 'react';

const FourthQuest = ({quest, setQuest}) => {
    return (
        <div id="FirsQuestion">
            <h2>Question <span>{quest}</span> / 5</h2>
            <p>How did you find us?</p>
            <button onClick={()=>setQuest(5)}>Recommended by an acquaintance </button>
            <button onClick={()=>setQuest(5)}>Advertising on the Internet </button>
            <button onClick={()=>setQuest(5)}>In news articles.</button>
            <button onClick={()=>setQuest(5)}>In a video on YouTube</button>
        </div>
    );
};

export default FourthQuest;