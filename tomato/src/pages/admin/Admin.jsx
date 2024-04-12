import { useEffect, useState } from "react";
import "./Admin.css";
import SelectDataBox from "./selectDataBox/SelectDataBox";
import SideMenu from './sideMenu/SideMenu';
import SelectAskBox from "./selectAskBox/SelectAskBox";
import Graph from "./graph/Graph";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Admin_Chatbot from './chatbot_admin/Admin_Chatbot';





const Admin = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [currLocation, setCurrLocation] = useState(null);

    const openSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'admin'
            }
        })
    }, [])


    return (
        <>
            <SideMenu currLocation={currLocation} openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
            <div id="adminContents" style={{ marginLeft: sideBarOpen ? '100px' : '65px' }}>
                <Routes>
                    <Route path='/select' element={<SelectDataBox />} />
                    <Route path='/ask' element={<SelectAskBox />} />
                    <Route path='/graph' element={<Graph />} />
                    <Route path='/chatbot' element={<Admin_Chatbot />} />
                </Routes>
            </div>
        </>
    );
}

export default Admin;