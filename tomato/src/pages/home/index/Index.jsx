import { Route } from "react-router-dom";
import AdImgBox from './adImgBox/AdImgBox';
import FirstContainer from './firstContainer/FirstContainer';
import SecondContainer from './secondContainer/SecondContainer';
import ThirdContainer from './thirdContainer/ThridContainer';


const Home = () => {

    return (
        <>
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