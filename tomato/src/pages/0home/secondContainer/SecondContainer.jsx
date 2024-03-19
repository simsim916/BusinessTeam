
import { useEffect, useRef, useState } from 'react';
import ItemBox from './../../components/ItemBox';
import './SecondContainer.css'
import axios from 'axios';
import Loading from './../../components/Loading';
import Error from './../../components/Error';


const SecondContainer = () => {
    const [eventItemList, setEventItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let secondSlideBtnRef = useRef(null);

    console.log('aa')
    useEffect(() => {
        axios.get('http://localhost:8090/item/eventitem'
        ).then(res => {
            console.log('bb')
            setEventItemList(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    function secondContainerSlideLeftbth(event) {
        document.getElementById('secondSlideBtnSelected').removeAttribute("id");
        let margin = event.target.closest('#secondContainerList').children[0].style.marginLeft.replace('px', '');
        if (margin < 2200) {
            margin = +margin + 440;
        }
        console.log(secondSlideBtnRef.current)
        // secondSlideBtn.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected")
        // slideBox[0].style.marginLeft = `${margin}px`;
    }

    function secondContainerSlideRightbth(event) {
    }

    function secondContainerSlideBtn(event) {
    }

    return (
        <div id="secondContainer" className="container">
            <h3> <i className="fa-solid fa-gift"></i> 특가 상품 <i className="fa-solid fa-gift"></i></h3>
            <div id="secondContainerList">
                <div className="slideBox">
                    {eventItemList.map((e, i) => <ItemBox data={e} key={i} />)}
                </div>

                <div ref={secondSlideBtnRef} id="secondSlideBtn" onClick={secondContainerSlideBtn} >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div id="secondSlideBtnSelected"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="secondContainerLeftBtn" onClick={secondContainerSlideLeftbth}><i className="fa-sharp fa-solid fa-arrow-left"></i></div>
            <div id="secondContainerRightBtn" onClick={secondContainerSlideRightbth}><i className="fa-sharp fa-solid fa-arrow-right"></i></div>
        </div>
    );
}

export default SecondContainer;