import { useState } from "react";
import "./Admin.css";
import InsertDataBox from "./insertDataBox/InsertDataBox";
import SelectDataBox from "./selectDataBox/SelectDataBox";
import SideMenu from './sideMenu/SideMenu';
import SelectAskBox from "./selectAskBox/SelectAskBox";
import { Route, Routes } from 'react-router-dom';




const Admin = () => {


    return (
        <>
            <SideMenu />
            <div id="adminContents">
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