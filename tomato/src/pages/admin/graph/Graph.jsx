import { useEffect, useState } from "react";
import "./Graph.css";
import LineChart from "./lineChart/LineChart";
import { api } from "../../../model/model";
import { useSelector } from 'react-redux';
import GraphDataBox from './GraphDataBox/GraphDataBox'


const Graph = ({ myLocation }) => {
    const user = useSelector(state => state.user.data);
    const [mainCategory, setMainCategory] = useState('/item/admingraph');
    const [subCategory, setSubCategory] = useState('views');
    const [howManyRecords, setHowManyRecords] = useState(10);
    const [graphData, setGraphData] = useState();


    useEffect(() => {
        myLocation();
        let howManyRecords = 10;
        let orderType;
        if (mainCategory == '/item/admingraph') {
            orderType = 'views'
        } else {
            orderType = 'visit_count';
        }
        api(`${mainCategory}?howManyRecords=${howManyRecords}&orderType=${orderType}`, 'get', null, user.token
        ).then(res => {
            console.log(res.data);
            setGraphData(res.data);
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
        <div id="GraphContainer">
            <div id="graphHead">
                <h3>
                    <i className="fa-solid fa-list"></i>자료 조회
                </h3>
                <div id='optionBar'>
                    <label htmlFor=""> DATA -
                        <select name="" id="">
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="">페이지</option>
                            <option value="">상품</option>
                        </select>
                    </label>
                    <label htmlFor=""> 조회대상 -
                        <select name="" id="">
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="">페이지</option>
                            <option value="">상품</option>
                        </select>
                    </label>
                    <label htmlFor=""> 조회기준 -
                        <select name="" id="">
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="">일별</option>
                            <option value="">월별</option>
                            <option value="">누적</option>
                        </select>
                    </label>
                    <label htmlFor=""> 조회기간 -
                        <input type="month" />
                        ~
                        <input type="month" />
                    </label>
                    <div id='optionBTN'>조회</div>
                </div>
            </div>
            <div id="graphBox">
                {graphData && <LineChart graphData={graphData} />}
            </div>
            <GraphDataBox />
        </div>
    );
}

export default Graph;