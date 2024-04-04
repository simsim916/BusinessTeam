import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { userReducer } from './user/userReducer';
import { basicReducer } from './basic/basicReducer';
import { itemListSortReducer } from './itemListSort/itemListSortReducer';
import { buyItemReducer } from './buyItem/buyItemReducer';
import { userCartReducer } from './userCart/userCartReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    itemListSort: itemListSortReducer,
    user: userReducer,
    basic: basicReducer,
    buyItem: buyItemReducer,
    userCart: userCartReducer
});

export default rootReducer;