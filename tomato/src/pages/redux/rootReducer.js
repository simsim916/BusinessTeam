import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { userReducer } from './user/userReducer';
import { basicReducer } from './basic/basicReducer';
import { itemListSortReducer } from './itemListSort/itemListSortReducer';
import { userBuyReducer } from './userBuy/userBuyReducer';
import { userCartReducer } from './userCart/userCartReducer';
import { finalOrderReducer } from './userOrder/finalOrderReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    itemListSort: itemListSortReducer,
    user: userReducer,
    basic: basicReducer,
    userBuy: userBuyReducer,
    userCart: userCartReducer,
    finalOrder : finalOrderReducer
});

export default rootReducer;