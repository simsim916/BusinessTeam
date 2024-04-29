import { useEffect, useState } from "react";
import "./Graph.css";
import GraphDataBox from './GraphDataBox/GraphDataBox'
import { ResponsiveBar } from '@nivo/bar';
import { api } from "../../../model/model";

const Graph = ({ }) => {

    const getOneWeekAgo = () => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 6);
        return oneWeekAgo.toISOString().split('T')[0];
    };

    const [data, setData] = useState([])
    const [date, setDate] = useState({
        enddate: new Date().toISOString().split('T')[0],
        startdate: getOneWeekAgo()
    })

    const changeDate = (event) => {
        setDate(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    useEffect(() => {
        api(`/visit/select?`, 'post', {
            enddate: new Date(date.enddate),
            startdate: new Date(date.startdate)
        })
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [date])
    const handle = {
        barClick: (data) => {
            console.log(data);
        },

        legendClick: (data) => {
            console.log(data);
        },
    };

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
                        <input type="date" name="startdate" value={date.startdate} onChange={changeDate} />
                        ~
                        <input type="date" name="enddate" value={date.enddate} onChange={changeDate} />
                    </label>
                    <div id='optionBTN'>조회</div>
                </div>
            </div>
            <div id="graphBox">
                <div style={{ width: '100%', height: '100%', margin: '0 auto' }}>
                    <ResponsiveBar
                        /**
                         * chart에 사용될 데이터
                         */
                        data={data.reverse()}
                        /**
                         * chart에 보여질 데이터 key (측정되는 값)
                         */
                        keys={['homeCount', 'listCount', 'detailCount', 'orderCount']}
                        /**
                         * keys들을 그룹화하는 index key (분류하는 값)
                         */
                        indexBy="visitDate"
                        /**
                         * chart margin
                         */
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        /**
                         * chart padding (bar간 간격)
                         */
                        padding={0.3}
                        /**
                         * chart 색상
                         */
                        colors={['#CA4046', '#F2EECA', '#A0D3F9', '#F6C026']} // 커스터하여 사용할 때
                        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
                        /**
                         * color 적용 방식
                         */
                        colorBy="id" // 색상을 keys 요소들에 각각 적용
                        // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
                        theme={{
                            /**
                             * label style (bar에 표현되는 글씨)
                             */
                            labels: {
                                text: {
                                    fontSize: 14,
                                    fill: '#000000',
                                },
                            },
                            /**
                             * legend style (default로 우측 하단에 있는 색상별 key 표시)
                             */
                            legends: {
                                text: {
                                    fontSize: 12,
                                    fill: '#000000',
                                },
                            },
                            axis: {
                                /**
                                 * axis legend style (bottom, left에 있는 글씨)
                                 */
                                legend: {
                                    text: {
                                        fontSize: 20,
                                        fill: '#000000',
                                    },
                                },
                                /**
                                 * axis ticks style (bottom, left에 있는 값)
                                 */
                                ticks: {
                                    text: {
                                        fontSize: 16,
                                        fill: '#000000',
                                    },
                                },
                            },
                        }}
                        /**
                         * axis bottom 설정
                         */
                        axisBottom={{
                            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
                            tickPadding: 5, // tick padding
                            tickRotation: -10, // tick 기울기
                            // legend: '날짜', // bottom 글씨
                            legendPosition: 'middle', // 글씨 위치
                            legendOffset: 40, // 글씨와 chart간 간격
                        }}
                        /**
                         * axis left 설정
                         */
                        axisLeft={{
                            tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
                            tickPadding: 0, // tick padding
                            tickRotation: 0, // tick 기울기
                            legendPosition: 'middle', // 글씨 위치
                            legendOffset: -60, // 글씨와 chart간 간격
                        }}
                        /**
                         * label 안보이게 할 기준 width
                         */
                        labelSkipWidth={36}
                        /**
                         * label 안보이게 할 기준 height
                         */
                        labelSkipHeight={12}
                        /**
                         * bar 클릭 이벤트
                         */
                        onClick={handle.barClick}
                        /**
                         * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
                         */
                        legends={[
                            {
                                dataFrom: 'keys', // 보일 데이터 형태
                                anchor: 'bottom-right', // 위치
                                direction: 'column', // item 그려지는 방향
                                justify: false, // 글씨, 색상간 간격 justify 적용 여부
                                translateX: 120, // chart와 X 간격
                                translateY: 0, // chart와 Y 간격
                                itemsSpacing: 2, // item간 간격
                                itemWidth: 100, // item width
                                itemHeight: 20, // item height
                                itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                                itemOpacity: 0.85, // item opacity
                                symbolSize: 20, // symbol (색상 표기) 크기
                                effects: [
                                    {
                                        // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                                onClick: handle.legendClick, // legend 클릭 이벤트
                            },
                        ]}
                    />
                </div>
            </div>
            {data.length > 0 && <GraphDataBox data={data} />}
        </div>
    );
}

export default Graph;