import { useSearchParams } from 'react-router-dom';
import Header from '../0home/header/Header';
import ItemDetailBox from './ItemDetailBox';


const ItemDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const itemCode = searchParams.get("code");
    return (
        <>
            <Header />
            <ItemDetailBox itemCode={itemCode} />
        </>
    );
}

export default ItemDetail