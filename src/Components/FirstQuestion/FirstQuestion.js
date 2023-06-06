import React from 'react';
import './FirstQuestion.css'

const FirstQuestion = ({quest, setQuest}) => {
    return (
        <div id="FirsQuestion">
            <h2>Question <span>{quest}</span> / 5</h2>
            <p>Have you participated in market research before?</p>
            <button onClick={()=>setQuest(2)}>YES</button>
            <button onClick={()=>setQuest(2)}>NO</button>
        </div>
    );
};

export default FirstQuestion;