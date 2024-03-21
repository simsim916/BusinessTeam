import { useRef } from "react";
import "./PagingBox.css";



const PagingBox = () => {

    const test = (event) => {
        console.log(event.target.getAttribute('data-value'));
    };
    return (
        <div id="pagingBox">
            <div onClick={test} data-value="-100"><i className="fa-solid fa-angles-left"></i></div>
            <div onClick={test} data-value="-10"><i className="fa-solid fa-chevron-left"></i></div>
            <div onClick={test} data-value="1">1</div>
            <div onClick={test} data-value="2">2</div>
            <div onClick={test} data-value="3">3</div>
            <div onClick={test} data-value="4">4</div>
            <div onClick={test} data-value="5">5</div>
            <div onClick={test} data-value="10"><i className="fa-solid fa-chevron-right"></i></div>
            <div onClick={test} data-value="100"><i className="fa-solid fa-angles-right"></i></div>
        </div>
    );
}

export default PagingBox;