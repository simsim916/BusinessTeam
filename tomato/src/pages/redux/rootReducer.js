import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { userReducer } from './user/userReducer';
import { basicReducer } from './basic/basicReducer';
import { itemListSortReducer } from './itemListSort/itemListSortReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    itemListSort: itemListSortReducer,
    user: userReducer,
    basic: basicReducer,
});

export default rootReducer;