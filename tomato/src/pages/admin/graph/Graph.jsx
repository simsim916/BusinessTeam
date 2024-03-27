import { useEffect, useState } from "react";
import "./Graph.css";
import axios from 'axios';


const Graph = ({ myLocation }) => {

    const [whichTable, setWhichTable] = useState("visit/selectall");
    const [graphData, setGraphData] = useState();

    console.log("========================================")
    console.log(graphData);
    console.log("========================================")

    useEffect(() => {
        myLocation();
        // axios.get(`http://localhost:8090/${whichTable}`
        // ).then(res => {
        //     setGraphData(res.data)
        //     console.log(res.data);
        // }
        // ).catch(err => console.log(err.message))
    }, [whichTable])

    const checkMainCategory = (event) => {
        let uri = "";
        switch (event.target.value) {
            case "visit": uri = "visit/selectall";
                break;
            case "item_views": uri = "item/selectall"
                break;
            case "item_likes": uri = "item/selectall"
                break;
        }
        event.target.closest('select').nextElementSibling.style.display = 'initial';
    }

    const checkSubCategory = () => {

    }



    return (

        <>
            <div id="GraphContainer">
                <select name="mainCategory" id="" onChange={checkMainCategory}>
                    <option value="visit">방문 통계</option>
                    <option value="item_views">상품 조회수</option>
                    <option value="item_likes">상품 좋아요</option>
                </select>
                &nbsp;&nbsp;
                <select name="subCategory" id="subCategory" onClick={checkSubCategory}>
                    <option value="">3일</option>
                    <option value="">7일</option>
                    <option value="">1개월</option>
                </select>
            </div>
            <div id="graphBox">

            </div>
        </>
    );
}

export default Graph;