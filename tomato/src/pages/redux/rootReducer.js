import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { userReducer } from './user/userReducer';
import { basicReducer } from './basic/basicReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    user: userReducer,
    basic: basicReducer,
});

export default rootReducer;