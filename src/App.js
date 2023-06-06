import './App.css';
import Header from "./Components/Header/Header";
import TitlePage from "./Pages/TitlePage/TitlePage";
import Footer from "./Components/Footer/Footer";
import {useState} from "react";
import HowItWork from "./Pages/HowItWork/HowItWork";
import FAQ from "./Pages/FAQ/FAQ";
import GeneralInfo from "./Pages/GeneralInfo/GeneralInfo";
import Terms from "./Pages/Terms/Terms";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
import SideMenu from "./Components/SideMenu/SideMenu";

function App() {

    const [counter, setCounter] = useState(0)
    const [activeSideMenu, setActiveSideMenu] = useState(false)
    const [quest, setQuest] = useState(0)


        return(
        <div className="App">
            <Header setCounter={setCounter}/>
            <MobileHeader setCounter={setCounter} setActive={setActiveSideMenu}/>
            {counter === 0 && <TitlePage quest={quest} setQuest={setQuest}/>}
            {counter === 1 && <HowItWork setCounter={setCounter}/>}
            {counter === 2 && <FAQ/>}
            {counter === 3 && <GeneralInfo/>}
            {counter === 4 && <Terms/>}
            {counter === 5 && <ContactUs setCounter={setCounter}/>}
            <SideMenu activeSideMenu={activeSideMenu} setActiveSideMenu={setActiveSideMenu} setCounter={setCounter}/>
            <Footer setCounter={setCounter}/>
        </div>
    );
}

export default App;
