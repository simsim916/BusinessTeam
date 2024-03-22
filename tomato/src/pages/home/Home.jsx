import { Route } from "react-router-dom";
import Header from './index/header/Header';
import AdImgBox from './index/adImgBox/AdImgBox';
import FirstContainer from './index/firstContainer/FirstContainer';
import SecondContainer from './index/secondContainer/SecondContainer';
import ThirdContainer from './index/thirdContainer/ThridContainer';


const Home = () => {

    return (
        <>
            <Header />
            <AdImgBox />
            <FirstContainer />
            <hr />
            <SecondContainer />
            <hr />
            <ThirdContainer />
        </>
    )
}
export default Home;