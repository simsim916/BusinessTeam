import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { userReducer } from './user/userReducer';
import { basicReducer } from './basic/basicReducer';
import { itemListSortReducer } from './itemListSort/itemListSortReducer';
import { buyItemReducer } from './buyItem/buyItemReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    itemListSort: itemListSortReducer,
    user: userReducer,
    basic: basicReducer,
    buyItem: buyItemReducer
});

export default rootReducer;