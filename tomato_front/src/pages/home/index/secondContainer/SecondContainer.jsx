
import { useEffect, useRef, useState } from 'react';
import './SecondContainer.css'
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import ItemBox from './../../../components/ItemBox';
import { api } from '../../../../model/model'

const SecondContainer = () => {
    const user = JSON.parse(sessionStorage.getItem('userinfo'))
    const [eventItemList, setEventItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let secondSlideBtnRef = useRef(null);
    let slideBox = useRef(null);
    let slideidx = useRef(null);

    useEffect(() => {
        api('/item/selectnotnull?column=item.itemEventCode', 'get', null, user && user.token
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

    function secondContainerSlideLeft(margin){
        slideBox.current.style.transition = '150ms ease'
        if (margin == -2640) {
            secondSlideBtnRef.current.children[0].removeAttribute("id");
        } else {
            if (margin == 2640)
                margin = -2200
            secondSlideBtnRef.current.children[`${5 - margin / 440}`].removeAttribute("id");
        }
        if (margin < 2200) {
            margin = +margin + 440;
            secondSlideBtnRef.current.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected")
            slideBox.current.style.marginLeft = `${margin}px`;
        }
        setTimeout(() => {
            slideBox.current.style.transition = null;
            if (margin >= 2200) {
                slideBox.current.style.marginLeft = `-2640px`;
            }
        }, 150);
    }

    function secondContainerSlideLeftbth(event) {
        let margin = slideBox.current.style.marginLeft.replace('px', '');
        if (margin == 2640) {
            slideBox.current.style.marginLeft = `-2200px`;
        }
        setTimeout(() => secondContainerSlideLeft(margin), 10);
    }

    function secondContainerSlideRight(margin){
        slideBox.current.style.transition = '150ms ease'
        if (margin == 2640) {
            secondSlideBtnRef.current.children[10].removeAttribute("id");
        } else {
            if (margin == -2640)
                margin = 2200
            secondSlideBtnRef.current.children[`${5 - margin / 440}`].removeAttribute("id");
        }
        if (margin > -2200) {
            margin -= 440;
            secondSlideBtnRef.current.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected")
            slideBox.current.style.marginLeft = `${margin}px`;
        }
        setTimeout(() => {
            slideBox.current.style.transition = null;
            if (margin == -2200) {
                slideBox.current.style.marginLeft = `2640px`;
            }
        }, 150);
    }
    function secondContainerSlideRightbth() {
        let margin = slideBox.current.style.marginLeft.replace('px', '');
        if(margin == -2640){
            slideBox.current.style.marginLeft = `2200px`;
        }
        setTimeout(()=>secondContainerSlideRight(margin), 10);
    }

    function secondContainerSlideBtn(event) {
        slideBox.current.style.transition = '150ms ease'
        let target = event.target;
        document.getElementById("secondSlideBtnSelected").removeAttribute("id");
        target.setAttribute("id", "secondSlideBtnSelected");
        let index = 0;
        for (let a of secondSlideBtnRef.current.children) {
            if (target == a) {
                break;
            }
            ++index;
        }
        slideBox.current.style.marginLeft = `${2200 - (440 * index)}px`;
        setTimeout(() => {
            slideBox.current.style.transition = null;
        }, 150);
    }

    return (
        <div id="secondContainer" className="container">
            <h3> <i className="fa-solid fa-gift"></i> 특가 상품 <i className="fa-solid fa-gift"></i></h3>
            <div id="secondContainerList">
                <div ref={slideBox} className="slideBox" style={{ marginLeft: '0px' }}>
                    {eventItemList.slice(eventItemList.length - 3).map((e, i) => <ItemBox item={e} key={i} />)}
                    {eventItemList.map((e, i) => <ItemBox item={e} key={i} slideidx={slideidx} />)}
                    {eventItemList.slice(0, 3).map((e, i) => <ItemBox item={e} key={i} />)}
                </div>

                <div ref={secondSlideBtnRef} id="secondSlideBtn"  >
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div id="secondSlideBtnSelected" onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                    <div onClick={secondContainerSlideBtn}></div>
                </div>
            </div>
            <div id="secondContainerLeftBtn" onClick={secondContainerSlideLeftbth}><i className="fa-sharp fa-solid fa-arrow-left"></i></div>
            <div id="secondContainerRightBtn" onClick={secondContainerSlideRightbth}><i className="fa-sharp fa-solid fa-arrow-right"></i></div>
        </div>
    );
}

export default SecondContainer;