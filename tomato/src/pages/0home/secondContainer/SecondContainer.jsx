
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
    let slideBox = useRef(null);
    let selectedBox = useRef(null);

    useEffect(() => {
        axios.get('http://localhost:8090/item/eventitem'
        ).then(res => {
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
        let margin = slideBox.current.style.marginLeft.replace('px', '');
        secondSlideBtnRef.current.children[`${5 - margin / 440}`].removeAttribute("id");
        if (slideBox.current.style.marginLeft == '') {
            slideBox.current.style.marginLeft = "440px";
            secondSlideBtnRef.current.children[`${5 - 440 / 440}`].setAttribute("id", "secondSlideBtnSelected")
            return;
        }
        if (margin < 2200) {
            margin = +margin + 440;
        }
        secondSlideBtnRef.current.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected")
        slideBox.current.style.marginLeft = `${margin}px`;
    }

    function secondContainerSlideRightbth(event) {
        let margin = slideBox.current.style.marginLeft.replace('px', '');
        secondSlideBtnRef.current.children[`${5 - margin / 440}`].removeAttribute("id");
        if (slideBox.current.style.marginLeft == '') {
            slideBox.current.style.marginLeft = "-440px";
            secondSlideBtnRef.current.children[`${5 + 440 / 440}`].setAttribute("id", "secondSlideBtnSelected")
            return;
        }
        if (margin > -2200) {
            margin -= 440;
        }
        secondSlideBtnRef.current.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected")
        slideBox.current.style.marginLeft = `${margin}px`;
    }

    function secondContainerSlideBtn(event) {
        let target = event.target;
        if (event.target.id != 'secondSlideBtn') {
            selectedBox.current.removeAttribute("id");
            selectedBox.current =event.target;
            event.target.setAttribute("id", "secondSlideBtnSelected");
            let index = 0;
            for (let a of secondSlideBtnRef.current.children) {
                if (target == a) {
                    break;
                }
                ++index;
            }
            slideBox.current.style.marginLeft = `${2200 - (440 * index)}px`;
        }
    }

    return (
        <div id="secondContainer" className="container">
            <h3> <i className="fa-solid fa-gift"></i> 특가 상품 <i className="fa-solid fa-gift"></i></h3>
            <div id="secondContainerList">
                <div ref={slideBox} className="slideBox">
                    {eventItemList.map((e, i) => <ItemBox data={e} key={i} />)}
                </div>

                <div ref={secondSlideBtnRef} id="secondSlideBtn" onClick={secondContainerSlideBtn} >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div id="secondSlideBtnSelected" ref={selectedBox}></div>
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