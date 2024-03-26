import { useState } from "react";
import "./Admin.css";
import InsertDataBox from "./insertDataBox/InsertDataBox";
import SelectDataBox from "./selectDataBox/SelectDataBox";
import SideMenu from './sideMenu/SideMenu';
import SelectAskBox from "./selectAskBox/SelectAskBox";
import { Route, Routes } from 'react-router-dom';




const Admin = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);

    const openSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    return (
        <>
            <SideMenu openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
            <div id="adminContents" style={{ marginLeft: sideBarOpen ? '100px' : '65px' }}>
                <Routes>
                    <Route path='/select' element={<SelectDataBox />} />
                    <Route path='/insert' element={<InsertDataBox />} />
                    <Route path='/ask' element={<SelectAskBox />} />
                </Routes>
            </div>
        </>
    );
}

export default Admin;