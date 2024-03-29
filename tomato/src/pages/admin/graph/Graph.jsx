import { useEffect, useState } from "react";
import "./Graph.css";
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import LineChart from "./lineChart/LineChart";

const Graph = ({ myLocation }) => {

    const [whichTable, setWhichTable] = useState("visit/selectall");
    const [graphData, setGraphData] = useState();


    useEffect(() => {
        myLocation();
        axios.get(`http://localhost:8090/visit/selectall`, {
            params: {
                page: 'admin',
            }
        }
        ).then(res => {
            setGraphData(res.data)
            console.log(res.data);
        }
        ).catch(err => console.log('*********' + err.message))
    }, [whichTable])

    const checkMainCategory = (event) => {
        if (event.target.value == 'x') return;

        let uri = "";
        switch (event.target.value) {
            case "admin": uri = "visit/selectall?page='admin'";
                break;
            case "item": uri = "item/selectall?page='itemDetail'";
                break;
            case "itemList": uri = "visit/selectall?page='itemList'";
                break;
        }
        // let url = `http://localhost:8090/${whichTable}`;
        event.target.closest('select').nextElementSibling.style.display = 'initial';
        setWhichTable(uri);
    }

    const checkSubCategory = () => {

    }



    return (

        <>
            <div id="GraphContainer">
                <select name="mainCategory" id="" onChange={checkMainCategory}>
                    <option value="x">페이지별</option>
                    <option value="item">상품 좋아요</option>
                    <option value="item">상품 조회수</option>
                    <option value="itemList">상품리스트</option>
                </select>
                &nbsp;&nbsp;
                <select name="subCategory" id="subCategory" onClick={checkSubCategory}>
                    <option value="">3일</option>
                    <option value="">7일</option>
                    <option value="">1개월</option>
                </select>
            </div>
            <div id="graphBox">
                {graphData && <LineChart graphData={graphData} />}
            </div>
        </>
    );
}

export default Graph;