import "./Admin.css";
import AddDataHead from "./AddDataBox";
import SideMenu from "./SideMenu";




const Admin = () => {
    return (
        <>
            <SideMenu />
            <div id="containerYH">
                <AddDataHead />
            </div>
        </>
    );
}

export default Admin;