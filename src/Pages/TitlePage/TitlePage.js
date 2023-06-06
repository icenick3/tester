import React, {useState} from 'react';
import './TitlePage.css'
import FirstQuestion from "../../Components/FirstQuestion/FirstQuestion";
import SecondQuest from "../../Components/SecondQuest/SecondQuest";
import ThirdQuest from "../../Components/ThirdQuest/ThirdQuest";
import FourthQuest from "../../Components/FourthQuest/FourthQuest";
import FifthQuest from "../../Components/FifthQoest/FifthQuest";

const TitlePage = ({setQuest, quest}) => {


    const [active, setActive] = useState(false)


    const onclick = () =>{
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }


    return (
       <div className="TitlePage">
           <div className="titlePageContainer">
               <div className="TitleText">
                   {quest === 0 && <div>
                       <h2>Your opinion is important to us! We reward you for your time!</h2>
                       <p>Take part in our surveys and let the brands know exactly what you think of them</p>
                       {(quest === 0 || quest === 1) && <div className="TitleImageMobile">
                           <img src="https://i.pinimg.com/originals/1d/b7/0e/1db70e6a84c514dc7bffbf5268f6cb45.png" alt=""/>
                       </div>}
                       <button onClick={() => setQuest(1)}>START</button>
                   </div>}
                   {quest === 1 && <FirstQuestion quest={quest} setQuest={setQuest}/>}
                   {quest === 2 && <SecondQuest quest={quest} setQuest={setQuest}/>}
                   {quest === 3 && <ThirdQuest quest={quest} setQuest={setQuest}/>}
                   {quest === 4 && <FourthQuest quest={quest} setQuest={setQuest}/>}
                   {quest === 5 && <FifthQuest quest={quest} setQuest={setQuest}/>}
                   <div  className="HowWork" onClick={()=> onclick()}>
                       <p>How does it work? </p>
                       {!active && <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                             alt=""/>}
                       { active && <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""/>}
                   </div>
                   {active && <div className="activeRules">
                       <div>
                           <h3>How does it work?</h3>
                           <p>YourView is an independent company looking for people to conduct market research.</p>
                       </div>
                       <div className="leftblock">
                           <h3 >Change the world around you!</h3>
                           <p>Many of large companies, banks, supermarkets, cosmetics brands create surveys to collect
                               customer feedback to improve their products and services.</p>
                       </div>
                       <div>
                           <h3>It's free</h3>
                           <p>Become a member today and start earning rewards with online surveys!</p>
                       </div>
                   </div>}
               </div>

               {(quest === 0 || quest === 1) && <div className="TitleImage">
                   <img src="https://i.pinimg.com/originals/08/27/9e/08279edcd42202c103675ff312415370.png" alt=""/>
               </div>}
               {quest === 2  && <div className="TitleImage">
                   <img src="https://i.pinimg.com/originals/71/96/cb/7196cb00ca8c5e7feb8f3ddc77ebf7c5.png" alt=""/>
               </div>}
               {quest === 3  && <div className="TitleImage">
                   <img src="https://i.pinimg.com/originals/e7/71/c9/e771c9921ef3cb3ebdeb0632d34dff40.png" alt=""/>

               </div>}
               {quest === 4  && <div className="TitleImage">
                   <img src="https://i.pinimg.com/originals/36/a7/07/36a7073781bfe51f7f7e8d2d8bab859b.png" alt=""/>
               </div>}
               {quest === 5  && <div className="TitleImage">
                   <img src="https://i.pinimg.com/originals/97/ad/d4/97add497222ff43c300b2ed3ce2a5fd1.png" alt=""/>
               </div>}
           </div>

       </div>
    );
};

export default TitlePage;