import Header from '../0home/header/Header';
import ShopBasket from './ShopBasket.css';
import ShopBasketSelectBox from './ShopBasketSelectBox';


const ShopBasket = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(item)
    useEffect(() => {
        axios.get(`http://localhost:8090/item/`
        ).then(res => {
            setItem(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />


    return (
        <>
            <Header />
            <ShopBasketSelectBox />
        
        
        
        </>





    );
}

export default ShopBasket;