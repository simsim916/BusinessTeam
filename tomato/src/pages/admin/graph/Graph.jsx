import { useEffect, useState } from "react";
import "./Graph.css";
import LineChart from "./lineChart/LineChart";
import { api } from "../../../model/model";
import Graph_ranking from "./graph_ranking/Graph_ranking";
import { useSelector } from 'react-redux';



const Graph = ({ myLocation }) => {
    const user = useSelector(state => state.user.data);
    const [mainCategory, setMainCategory] = useState('/visit/selectwhere');
    const [subCategory, setSubCategory] = useState('views');
    const [howManyRecords, setHowManyRecords] = useState(10);
    const [graphData, setGraphData] = useState({
        all: [],
        cart: [],
        detail: [],
        list: [],
        order: [],
        day: [],
        month: [],
        select: [],
    });



    useEffect(() => {
        myLocation();
        let orderType;
        if (mainCategory == '/item/admingraph') {
            orderType = 'views'
        } else {
            orderType = 'visit_count';
        }
        api(`${mainCategory}`, 'get', null, user.token
        ).then(res => {
            setGraphData(pre => ({
                ...pre,
                all: res.data,
                select: res.data,
            }))
        })

    }, [mainCategory])

    const checkMainCategory = (event) => {
        if (event.target.value == 'x') return
        else if (event.target.value == '');
        let uri = event.target.value;
        event.target.closest('select').nextElementSibling.style.display = 'initial';
        setMainCategory(uri);
    }

    const checkSubCategory = (event) => {

    }

    return (

        <>
            <div id="GraphContainer">
                <select name="mainCategory" id="mainCategory" onChange={checkMainCategory}>
                    <option value="x">=======</option>
                    <option value="/item/admingraph">상품 통계</option>
                    <option value="/visit/selectwhere">페이지 방문 통계</option>
                </select>
                &nbsp;&nbsp;
                {
                    mainCategory == '/item/admingraph'
                        ?
                        <select name="subCategory" id="subCategory" onChange={checkSubCategory}>
                            <option value="">========</option>
                            <option value="프레시지">프레시지</option>
                            <option value="김구원 선생">김구원 선생</option>
                        </select>
                        :
                        <select name="subCategory" id="subCategory" onChange={checkSubCategory}>
                            <option value="">========</option>
                            <option value="?">일별</option>
                            <option value="">월별</option>
                        </select>

                }

            </div>
            <div id="graphBox">
                {graphData && <LineChart setGraphData={setGraphData} graphData={graphData} />}
            </div>
            {/* <div id="graphAndRankedItemBox">
                <div id="graphBox">
                    {graphData && <LineChart setGraphData={setGraphData} graphData={graphData} />}
                </div>
                <div>
                    <div id="rankedItemBox">
                        <div>
                            {graphData && graphData.all.map((e, i) => <Graph_ranking item={e} key={i} />)}
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Graph;