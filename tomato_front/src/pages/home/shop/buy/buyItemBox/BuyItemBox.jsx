
import './BuyItemBox.css';
import BuyItemBoxRow from './BuyItemBoxRow';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuy, setUserBuyForm, setUserBuyItemList } from '../../../../redux/userBuy/actions';
import { useEffect } from 'react';
import { changeAlert } from './../../../../redux/basic/actions';
import { Link } from 'react-router-dom';

const BuyItemBox = ({ }) => {

    /* Redux */
    const dispatch = useDispatch();
    const userBuy = useSelector(state => state.userBuy.buyList);
    const userCart = useSelector(state => state.userCart.data);
    const userBuyForm = useSelector(state => state.userBuy.form)


    useEffect(() => {
        const ar = [];
        if (userBuy && userCart)
            for (let itemCode of userBuy) {
                for (let ele of userCart) {
                    if (itemCode == ele.itemCode)
                        ar.push(ele)
                }
            }
        dispatch(setUserBuy(ar))
    }, [])

    const handleAllCheck = () => {
        if (userBuyForm.itemList && userBuy.length == userBuyForm.itemList.length) {
            dispatch(setUserBuyForm({ itemList: [] }))
        } else {
            dispatch(setUserBuyForm({ itemList: userBuy }))
        }
    }

    const changeCheckedList = (item) => {
        if (userBuyForm.itemList.length < 1) {
            dispatch(setUserBuyForm({ itemList: [item] }))
            return;
        }
        if (userBuyForm.itemList.find(e => e.itemCode == item.itemCode)) {
            dispatch(setUserBuyForm({ itemList: userBuyForm.itemList.filter(e => e.itemCode != item.itemCode) }))
        } else {
            dispatch(setUserBuyForm({ itemList: [...userBuyForm.itemList, item] }))
        }
    }

    const changeItemList = (key, type) => {
        let ar = [...userBuy];
        if (type == '+') {
            ar[key].amount++;
        } else if (type == '-') {
            if (ar[key].amount > 1)
                ar[key].amount--;
            else
                dispatch(changeAlert({
                    title: '수량 변경 오류',
                    content: `수량은 1 이상으로 선택해주세요!`,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }))
        } else {
            if (type > 0)
                ar[key].amount = type
            else
                dispatch(changeAlert({
                    title: '수량 변경 오류',
                    content: `수량은 1 이상으로 선택해주세요!`,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }))

        }
        dispatch(setUserBuyForm({ itemList: ar }))
    }

    return (
        <div id='BuyItemBox'>
            <div id='BuyItemBoxCheck'>
                <label>
                    <input type="checkbox"
                        onChange={handleAllCheck}
                        checked={userBuyForm.itemList && userBuy && userBuy.length === userBuyForm.itemList.length || false} >
                    </input>전체선택
                </label>
            </div>
            <ul id="BuyItemBoxTitle">
                <li>선택</li>
                <li>상품사진</li>
                <li>상품정보</li>
                <li>수량</li>
                <li>총 상품금액</li>
                <li>배송비</li>
            </ul>
            {userBuy.length>0 ?
                userBuy.map((e, i) => <BuyItemBoxRow changeItemList={changeItemList} item={e} key={i} idx={i} changeCheckedList={changeCheckedList} />)
                :
                <div id='cartNone'>
                    장바구니에서 상품을 담아주세요.
                    <Link to='/home/cart'>
                    장바구니 가기
                    </Link>
                </div>
            }
        </div>
    );

}



export default BuyItemBox;