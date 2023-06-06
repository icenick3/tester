import React, {useState} from 'react';
import './ContactUs.css'

const ContactUs = ({setCounter}) => {

    const [active, setActive] = useState(false)
    return (
        <div className="contactUs">
            <div className="contactUsContainer">
                <div className="contactText">
                    <div >
                        <h2>If you have questions, email us (info@yourview.live) or use the form below</h2>
                    </div>
                    {!active && <div>
                        <input type="text" placeholder="Your name"/>
                        <input type="text" placeholder="Your email"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="How can we help?"></textarea>
                        <button onClick={() => {
                            setActive(true)
                            setTimeout(()=>setCounter(0),2000)
                        }}>
                            SEND
                        </button>
                    </div>}
                    {active && <p className="ThankYou">Thank You</p>}
                </div>
                <div className="termsImg">
                    <img src="https://i.pinimg.com/originals/83/88/8c/83888c078483297474a161d36d31ba87.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;