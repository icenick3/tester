import React from 'react';
import './SideMenu.css'

const SideMenu = ({activeSideMenu, setActiveSideMenu, setCounter}) => {

    return (
        <div className={activeSideMenu ? "sideMenu" : "sideMenu nonSideMenu"}>
            <div className="containerSideMenu">
                <div className="menuImg">
                    <h3>Menu</h3>
                    <div id="close" onClick={()=> setActiveSideMenu(false)}>
                        <img src="https://i.pinimg.com/originals/6c/76/57/6c7657e152f0ca50467928c5369f9014.png" alt=""/>
                    </div>
                </div>
                <p onClick={()=> {
                    setCounter(1)
                    setActiveSideMenu(false)
                }}>How does it works?</p>
                <p onClick={()=> {
                    setActiveSideMenu(false)
                    setCounter(2)
                }}>FAQ</p>
                <p onClick={()=> {
                    setActiveSideMenu(false)
                    setCounter(0)
                }}>Join now</p>
                <p onClick={()=> {
                    setActiveSideMenu(false)
                    setCounter(3)
                }}>Data Protection</p>
                <p onClick={()=> {
                    setActiveSideMenu(false)
                    setCounter(4)
                }}>Terms and conditions</p>
                <p onClick={()=> {
                    setActiveSideMenu(false)
                    setCounter(5)
                }}>Contact us</p>
            </div>
        </div>
    );
};

export default SideMenu;