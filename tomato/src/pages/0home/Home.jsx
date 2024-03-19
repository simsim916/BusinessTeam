import AdImgBox from "./adImgBox/AdImgBox";
import FirstContainer from "./firstContainer/FirstContainer";
import SecondContainer from "./secondContainer/SecondContainer";
import Header from "./header/Header"
import ThirdContainer from './thirdContainer/ThridContainer';

const Home = () => {
    return (
        <div>
            <Header />
            <AdImgBox />
            <hr />
            <FirstContainer />
            <hr />
            <SecondContainer />
            <hr />
            <ThirdContainer />
        </div>
    )
}
export default Home;