import { Route, Routes } from "react-router-dom";
import Header from './index/header/Header';
import Index from './index/Index';
import ItemList from "./list/ItemList";
import ItemDetail from './detail/ItemDetail';
import BuyBox from './shop/buy/BuyBox';
import Cart from './shop/cart/Cart';


const Home = () => {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/detail' element={<ItemDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/buy' element={<BuyBox />} />
                <Route path='/' element={<Index />} />
                <Route path='/*' element={'잘못된경로'} />
            </Routes>
        </>
    )
}
export default Home;