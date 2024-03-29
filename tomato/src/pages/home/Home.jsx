import { Route, Routes } from "react-router-dom";
import Header from './index/header/Header';
import Index from './index/Index';
import ItemList from "./list/ItemList";
import ItemDetail from './detail/ItemDetail';
import ShopBasket from "../shopBasket/ShopBasket";


const Home = () => {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/detail' element={<ItemDetail />} />
                <Route path='/cart' element={<ShopBasket />} />
                <Route path='/' element={<Index />} />
                <Route path='/*' element={'잘못된경로'} />
            </Routes>
        </>
    )
}
export default Home;