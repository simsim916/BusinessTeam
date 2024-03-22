import AdImgBox from "./adImgBox/AdImgBox";
import FirstContainer from "./firstContainer/FirstContainer";
import SecondContainer from "./secondContainer/SecondContainer";
import Header from "./header/Header"
import ThirdContainer from './thirdContainer/ThridContainer';
import { Route } from "react-router-dom";


const Home = () => {

    return (
        <div>
            <Header />
            <AdImgBox />
            <FirstContainer />
            <hr />
            <SecondContainer />
            <hr />
            <ThirdContainer />
        </div>
    )
}
export default Home;