import React, {useState} from 'react';
import './FAQ.css'

const Faq = () => {

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)


    return (
        <div className="FAQ">
            <div className="FAQContainer">
                <div className="FAQText">
                    <h2>FAQ</h2>
                    <div className="textFAQ">
                        <h3>
                            <span>What</span> do I get it?
                        </h3>
                        {!active &&
                            <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                                 alt="" onClick={() => setActive(true)}/>}
                        {active &&
                            <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""
                                 onClick={() => setActive(false)}/>}
                    </div>
                    {active && <div className="swipeText">
                        <p>
                            At the beginning of each survey, we let you know what kind of reward you will get for the
                            survey. It can be different products, certificates or discounts.
                        </p>
                    </div>}
                    <div className="textFAQ">
                        <h3><span>How</span> can I take surveys?</h3>
                        {!active1 &&
                            <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                                 alt="" onClick={() => setActive1(true)}/>}
                        {active1 &&
                            <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""
                                 onClick={() => setActive1(false)}/>}
                    </div>
                    {active1 && <div className="swipeText">
                        <p>
                            Registration is free and you can cancel panel membership at any time. In order to receive an
                            email from us inviting you to participate, you must provide your email address. Please make
                            sure you have internet access to take our online surveys.
                        </p>
                    </div>}
                    <div className="textFAQ">
                        <h3>
                            <span>Why</span> do you conduct the survey?
                        </h3>
                        {!active2 &&
                            <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                                 alt="" onClick={() => setActive2(true)}/>}
                        {active2 &&
                            <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""
                                 onClick={() => setActive2(false)}/>}
                    </div>
                    {active2 && <div className="swipeText">
                        <p>
                            Many companies, top brands and similar organizations are interested in the views and
                            opinions of the people who use their products and services. The more they know what
                            customers and citizens think of their offerings, the more easier for them to make
                            improvements and adjust.
                        </p>
                    </div>}
                    <div className="textFAQ">
                        <h3>
                            <span>Get</span> I spam emails?
                        </h3>
                        {!active3 &&
                            <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                                 alt="" onClick={() => setActive3(true)}/>}
                        {active3 &&
                            <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""
                                 onClick={() => setActive3(false)}/>}
                    </div>
                    {active3 && <div className="swipeText">
                        <p>
                            No. All of the market research panels we work with do not sell any personally identifiable
                            information and will never attempt to sell you any products or services.
                        </p>
                    </div>}
                    <div className="textFAQ">
                        <h3>
                            <span>How</span> many questions do I get?
                        </h3>
                        {!active4 &&
                            <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                                 alt="" onClick={() => setActive4(true)}/>}
                        {active4 &&
                            <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""
                                 onClick={() => setActive4(false)}/>}
                    </div>
                    {active4 && <div className="swipeText">
                        <p>
                            The number of questions varies. We try to keep the surveys as short as possible, although we
                            need to ensure the results are meaningful. The duration of participation is typically 15-20
                            minutes.
                        </p>
                    </div>}
                    <div className="textFAQ">
                        <h3>
                            <span>How</span> can I become a member?
                        </h3>
                        {!active5  &&
                            <img src="https://i.pinimg.com/originals/96/b1/d1/96b1d1b5b8123043f602b8af159a9e8a.png"
                                 alt="" onClick={() => setActive5(true)}/>}
                        {active5 &&
                            <img src="https://i.pinimg.com/564x/4c/0d/9f/4c0d9fc536af84bc9fb562bf35989f0f.jpg" alt=""
                                 onClick={() => setActive5(false)}/>}
                    </div>
                    {active5 && <div className="swipeText">
                        <p>
                            Simply conduct a short survey on the homepage to find out which target group you belong to
                            and you will receive a survey on suitable brands.
                        </p>
                    </div>}
                </div>
                <div className="FAQImage">
                    <img src="https://i.pinimg.com/originals/02/68/1b/02681b0229c1f04fbe10057d145bf1ea.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Faq;