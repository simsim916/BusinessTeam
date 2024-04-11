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
import { SERVER_RESOURCE } from "../../../model/server-config";
import { api } from "../../../model/model";
import Graph_ranking from "./graph_ranking/Graph_ranking";



const Graph = ({ myLocation }) => {

    const [whichURL, setWhichTable] = useState('/item/admingraph');
    const [graphData, setGraphData] = useState();


    useEffect(() => {
        myLocation();
        // let whichGroup = 'visit_date';
        let howManyRecords = 10;
        let orderType = 'views';
        let user = JSON.parse(sessionStorage.getItem('userinfo'));
        api(`${whichURL}?howManyRecords=${howManyRecords}&orderType=${orderType}`, 'get', null, user.token
        ).then(res => {
            console.log(res.data);
            setGraphData(res.data);
        })
    }, [whichURL])

    const checkMainCategory = (event) => {
        if (event.target.value == 'x') return;
        let uri = event.target.value;
        event.target.closest('select').nextElementSibling.style.display = 'initial';
        setWhichTable(uri);
    }

    const checkSubCategory = (event) => {

    }

    return (

        <>
            <div id="GraphContainer">
                <select name="mainCategory" id="mainCategory" onChange={checkMainCategory}>
                    <option value="x">=======</option>
                    <option value="/item/admingraph">상품 통계</option>
                    <option value="/visit/selectAll">페이지 방문 통계</option>
                </select>
                &nbsp;&nbsp;
                <select name="subCategory" id="subCategory">
                    <option value="">========</option>
                    <option value="?">프레시지</option>
                    <option value="">김구원선생</option>
                    <option value=""></option>
                </select>
            </div>
            <div id="graphAndRankedItemBox">
                <div id="graphBox">
                    {graphData && <LineChart graphData={graphData} />}
                </div>
                <div>
                    <div id="rankedItemBox">
                        <div>
                            {graphData && graphData.map((e, i) => <Graph_ranking item={e} key={i} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Graph;