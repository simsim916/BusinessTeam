import React, { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

const LineChart = ({ graphData }) => {
    
    const chartRef = useRef(null);
    let chartInstance = null;

    useEffect(() => {
        let DateArr = [];
        for (let a of graphData) {
            DateArr.push(a.visit_date);
        }
        DateArr = [...new Set(DateArr)];
        DateArr = DateArr.sort((a, b) => new Date(a) - new Date(b));
        // 가져온 데이터를 날짜별로 그룹짓고, 중복제거 + 오름차순 정렬

        let adminArr = [];
        let cartArr = [];
        let itemDetailArr = [];
        let itemListArr = [];
        let mainPageArr = [];

        for (let e of graphData) {
            switch (e.page) {
                case 'admin': adminArr.push(e.visit_count)
                    break;
                case 'cart': cartArr.push(e.visit_count)
                    break;
                case 'itemDetail': itemDetailArr.push(e.visit_count)
                    break;
                case 'itemList': itemListArr.push(e.visit_count)
                    break;
                case 'mainPage': mainPageArr.push(e.visit_count)
                    break;
            }
        }


        
        console.log(adminArr);
        console.log(cartArr);
        console.log(itemDetailArr);
        console.log(itemListArr);
        console.log(mainPageArr);
        // let admin = graphData.filter((e) => e.page == 'admin');
        // let cart = graphData.filter((e) => e.page == 'cart');
        // let itemDetail = graphData.filter((e) => e.page == 'itemDetail');
        // let itemList = graphData.filter((e) => e.page == 'itemList');
        // let mainPage = graphData.filter((e) => e.page == 'mainPage');





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
                    labels: DateArr,
                    datasets: [
                        {
                            label: "adminArr",
                            data: adminArr,
                            borderColor: "red",
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            pointRadius: 5, // 포인트 크기
                            pointBackgroundColor: "red", // 포인트 배경색
                            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
                            pointHoverRadius: 7, // 호버 시 포인트 크기
                            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
                            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
                            fill: false, // 라인 그래프에서 영역 채우기 비활성화
                        },
                        {
                            label: "cartArr",
                            // data: [10,50,3],
                            data: cartArr,
                            borderColor: "orange",
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            pointRadius: 5, // 포인트 크기
                            pointBackgroundColor: "orange", // 포인트 배경색
                            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
                            pointHoverRadius: 7, // 호버 시 포인트 크기
                            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
                            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
                            fill: false, // 라인 그래프에서 영역 채우기 비활성화
                        },
                        {
                            label: "itemDetailArr",
                            // data: [10,50,3],
                            data: itemDetailArr,
                            borderColor: "yellow",
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            pointRadius: 5, // 포인트 크기
                            pointBackgroundColor: "yellow", // 포인트 배경색
                            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
                            pointHoverRadius: 7, // 호버 시 포인트 크기
                            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
                            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
                            fill: false, // 라인 그래프에서 영역 채우기 비활성화
                        },
                        {
                            label: "mainPageArr",
                            // data: [10,50,3],
                            data: mainPageArr,
                            borderColor: "green",
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            pointRadius: 5, // 포인트 크기
                            pointBackgroundColor: "green", // 포인트 배경색
                            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
                            pointHoverRadius: 7, // 호버 시 포인트 크기
                            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
                            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
                            fill: false, // 라인 그래프에서 영역 채우기 비활성화
                        },
                        {
                            label: "itemListArr",
                            // data: [10,50,3],
                            data: itemListArr,
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
                            max: 400, // 최대값 설정
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