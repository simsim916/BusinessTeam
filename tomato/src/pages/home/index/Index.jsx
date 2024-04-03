import AdImgBox from './adImgBox/AdImgBox';
import FirstContainer from './firstContainer/FirstContainer';
import SecondContainer from './secondContainer/SecondContainer';
import ThirdContainer from './thirdContainer/ThridContainer';
import { useEffect } from 'react';
import axios from 'axios';


const Home = () => {

    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'mainPage',
            }
        })
    }, [])


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