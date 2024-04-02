import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import ShopBasketPayBox from './../../../shopBasket/ShopBasketPayBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';


const BuyBox = () => {
    // const itemList = useSelector(state => state.itemList)
    // useEffect(() => {
    //     dispatch(getItemListAmount('/item/selectin', 'post', cart, null, cart))
    // }, [])

    // if (itemList.loading) return <Loading />
    // if (itemList.error) return <Error />

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;구매하기&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <div id='shopBasket_left'>
                <BuyItemBox />
                <BuyDeliveryBox />
            </div>

            <ShopBasketPayBox />

            {/* <BestItemBox /> */}

        </div>
    );
}

export default BuyBox;