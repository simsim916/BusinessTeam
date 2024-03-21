import "./Admin.css";
import InsertDataBox from "./InsertDataBox";
import SelectDataBox from "./SelectDataBox";
import SideMenu from "./SideMenu";




const Admin = () => {
    return (
        <>
            <SideMenu />
            <div id="containerYH">
                {/* <InsertDataBox /> */}
                <SelectDataBox />
            </div>
        </>
    );
}

export default Admin;