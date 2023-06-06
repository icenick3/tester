import React from 'react';

const FifthQuest = ({quest}) => {

    const onclick = () => {
        setTimeout(()=>{
            window.location.href = document.querySelector('#buttonOffer').href
        },2000)
    }
    return (
        <div id="FirsQuestion">
            <h2>Question <span>{quest}</span> / 5</h2>
            <p>Your gender</p>
            <button onClick={()=>onclick()}>Male </button>
            <button onClick={()=>onclick()}>Female</button>
            <button onClick={()=>onclick()}>Other</button>
            <button onClick={()=>onclick()}>Skip the question</button>
        </div>
    );
};

export default FifthQuest;