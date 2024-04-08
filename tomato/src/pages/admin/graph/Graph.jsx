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



const Graph = ({ myLocation }) => {

    const [whichURL, setWhichTable] = useState('/visit/selectall');
    const [graphData, setGraphData] = useState();

    useEffect(() => {
        myLocation();
        let whichGroup = 'visit_date';
        let howManyRecords = 100;
        let user = JSON.parse(sessionStorage.getItem('userinfo'));
        api(`${whichURL}?whichGroup=${whichGroup}&howManyRecords=${howManyRecords}`, 'get', null, user.token
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


    const showUpRank = (e) => {
        // let parent = e.target.parentNode;
        // parent.children[0].style.marginTop = '100px';
        let box = document.getElementById('rankedItemBox').children[0];
        box.style.marginTop = '130px';
    }

    const showDownRank = (e) => {
        // let parent = e.target.parentNode;
        // parent.children[0].style.marginBottom = '100px';
        let box = document.getElementById('rankedItemBox').children[0];
        box.style.marginTop = '-130px';
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
                    <option value="">3일</option>
                    <option value="">7일</option>
                    <option value="">1개월</option>
                </select>
            </div>
            <div id="graphAndRankedItemBox">
                <div id="graphBox">
                    {graphData && <LineChart graphData={graphData} />}
                </div>
                <div>
                    <div id="rankedItemBox">
                        <div>
                            <div className="rankedItem">
                                <div><i class="fa-solid fa-medal"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000002_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 999</div>
                            </div>
                            <div className="rankedItem">
                                <div><i class="fa-solid fa-medal"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000003_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 888</div>
                            </div>
                            <div className="rankedItem">
                                <div><i class="fa-solid fa-medal"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000004_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 777</div>
                            </div>
                            <div className="rankedItem">
                                <div><i className="fa-solid fa-4"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000005_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 666</div>
                            </div>
                            <div className="rankedItem">
                                <div><i className="fa-solid fa-5"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000006_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 555</div>
                            </div>
                            <div className="rankedItem">
                                <div><i className="fa-solid fa-6"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000006_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 555</div>
                            </div>
                            <div className="rankedItem">
                                <div><i className="fa-solid fa-7"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000006_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 555</div>
                            </div>
                            <div className="rankedItem">
                                <div><i className="fa-solid fa-8"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000006_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 555</div>
                            </div>
                            <div className="rankedItem">
                                <div><i className="fa-solid fa-9"></i></div>
                                <div><img src={SERVER_RESOURCE + `/img/itemImg/5000006_2.jpg`} alt='' /></div>
                                <div>블랙 라벨 스테이크</div>
                                <div>조회수 : 555</div>
                            </div>
                        </div>
                    </div>
                    <div id="rankingUpBtn" className="rankingBtn" onClick={showUpRank}><i className="fa-sharp fa-solid fa-arrow-up"></i></div>
                    <div id="rankingDownBtn" className="rankingBtn" onClick={showDownRank}><i className="fa-sharp fa-solid fa-arrow-down"></i></div>
                </div>
            </div>
            {/* -=-------------------------- */}
        </>
    );
}

export default Graph;