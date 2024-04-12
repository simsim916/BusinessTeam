import React, { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

const LineChart = ({ graphData, setGraphData }) => {

    const chartRef = useRef(null);
    let chartInstance = null;


    useEffect(() => {
        // =====================
        const dateArr = [...new Set(graphData.select.map(i => i.visit_date))];
        dateArr.sort((a, b) => a - b);
        let date = dateArr.slice(0, 10); // 렉걸려

        let check = graphData.select.slice(0, 10);
        let test = [];
        check.map(e => test.push(e.visit_count));
        console.log(test);
        // =====================





        const ctx = chartRef.current.getContext("2d");

        const createChart = () => {
            Chart.register(
                LineController,
                CategoryScale,
                LinearScale,
                PointElement,
                LineElement
            );
            chartInstance = new Chart(ctx, {
                type: "line",
                data: {
                    labels: date,
                    datasets: [
                        {
                            label: "itemListArr",
                            data: test,
                            borderColor: "blue",
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            pointRadius: 5, // 포인트 크기
                            pointBackgroundColor: "blue", // 포인트 배경색
                            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
                            pointHoverRadius: 7, // 호버 시 포인트 크기
                            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
                            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
                            fill: false, // 라인 그래프에서 영역 채우기 비활성화
                        },

                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: true, // 레전드 표시 여부
                            position: 'top', // 레전드 위치 (top, bottom, left, right 중 선택)
                        },
                    },
                    scales: {
                        x: {
                            display: true,
                        },
                        y: {
                            beginAtZero: true,
                            max: 1500, // 최대값 설정
                        },
                    },
                    maintainAspectRatio: false,
                    responsive: false

                },
            });
        };

        const destroyChart = () => {
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
        };

        const initializeChart = () => {
            destroyChart(); // 이전 차트 파괴
            createChart(); // 새로운 차트 생성
        };

        // 컴포넌트가 처음 렌더링될 때 차트 초기화
        initializeChart();

        // 컴포넌트가 unmount될 때 차트 파괴
        return () => {
            destroyChart();
        };
    }, [graphData]);

    return <canvas ref={chartRef} />;
};

export default LineChart;