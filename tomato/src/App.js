import "./default.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/0home/Home";
import ItemList from "./pages/1list/ItemList";

function App() {


    return (

        <div className="App">
            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={"잘못된 접근"} />
            </Routes>
        </div>
    );
}

export default App;
