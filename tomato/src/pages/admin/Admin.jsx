import { useState } from "react";
import "./Admin.css";
import InsertDataBox from "./insertDataBox/InsertDataBox";
import SelectDataBox from "./selectDataBox/SelectDataBox";
import SideMenu from './sideMenu/SideMenu';




const Admin = () => {
    const [whichBox, setWhichBox] = useState(false);

    return (
        <>
            <SideMenu whichBox={whichBox} setWhichBox={setWhichBox} />
            <div id="containerYH">
                {whichBox ? <InsertDataBox /> : <SelectDataBox />}
            </div>
        </>
    );
}

export default Admin;