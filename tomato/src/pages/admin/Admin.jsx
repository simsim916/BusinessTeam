import "./Admin.css";
import NavBar from "./NavBar";
import AddDataHead from "./AddDataHead";
import AddDataColumn from './AddDataColumn';




const Admin = () => {
    return (
        <>
            <NavBar />
            <div id="containerYH">
                <AddDataHead />
                <AddDataColumn />
            </div>
        </>
    );
}

export default Admin;