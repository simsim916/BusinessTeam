import AdImgBox from "./adImgBox/AdImgBox";
import FirstContainer from "./firstContainer/FirstContainer";
import SecondContainer from "./secondContainer/SecondContainer";
import Header from "./header/Header"

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
        </div>
    )
}
export default Home;