import { useState } from "react";
import "./Admin.css";
import InsertDataBox from "./insertDataBox/InsertDataBox";
import SelectDataBox from "./selectDataBox/SelectDataBox";
import SideMenu from './sideMenu/SideMenu';
import SelectAskBox from "./selectAskBox/SelectAskBox";




const Admin = () => {
    const [whichBox, setWhichBox] = useState(1);

    let whichComponent;

    switch (whichBox) {
        case 1: whichComponent = <SelectDataBox />;
            break;
        case 2: whichComponent = <InsertDataBox />;
            break;
        case 3: whichComponent = <SelectAskBox />;
            break;

        default:
            break;
    }

    return (
        <>
            <SideMenu whichBox={whichBox} setWhichBox={setWhichBox} />
            <div id="containerYH">
                {whichComponent}
            </div>
        </>
    );
}

export default Admin;