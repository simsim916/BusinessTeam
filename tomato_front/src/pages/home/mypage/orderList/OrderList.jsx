import { useEffect, useState } from 'react';
import '../../shop/buyComplete/BuyComplete.css'
import { api } from '../../../../model/model';
import OrderTitle2 from '../../../components/orderTitle/OrderTitle2';

const OrderList = () => {
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const [data, setData] = useState([]);
    useEffect(() => {
        api('/order/select', 'get', null, user && user.token)
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err.message);
            })
    }, [])

    console.log(data)
    return (
        <div>
            {data && data.map((e, i) => <OrderTitle2 userBuyResult={e} key={i} />)}
        </div>
    );
}

export default OrderList;