import { useEffect, useState } from "react";
import "./Admin.css";
import InsertDataBox from "./insertDataBox/InsertDataBox";
import SelectDataBox from "./selectDataBox/SelectDataBox";
import SideMenu from './sideMenu/SideMenu';
import SelectAskBox from "./selectAskBox/SelectAskBox";
import Graph from "./graph/Graph";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';




const Admin = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [currLocation, setCurrLocation] = useState(null);

    const myLocation = () => {
        let location = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        switch (location) {
            case 'select': location = "상품조회"
                break;
            case 'ask': location = "문의목록"
                break;
            case 'insert': location = "상품입력"
                break;
            case 'graph': location = "통계"
                break;
            default: location = "";
                break;
        }
        setCurrLocation(location);
    }


    const openSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'admin'
            }
        })
    })

    return (
        <>
            <SideMenu currLocation={currLocation} openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
            <div id="adminContents" style={{ marginLeft: sideBarOpen ? '100px' : '65px' }}>
                <Routes>
                    {/* <Route path='/select' element={<SelectDataBox />} /> */}
                    <Route path='/select' element={<SelectDataBox myLocation={myLocation} />} />
                    <Route path='/insert' element={<InsertDataBox myLocation={myLocation} />} />
                    <Route path='/ask' element={<SelectAskBox myLocation={myLocation} />} />
                    <Route path='/graph' element={<Graph myLocation={myLocation} />} />
                </Routes>
            </div>
        </>
    );
}

export default Admin;