import { useState } from "react";
import "./Admin.css";
import InsertDataBox from "./InsertDataBox";
import SelectDataBox from "./SelectDataBox";
import SideMenu from "./SideMenu";




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