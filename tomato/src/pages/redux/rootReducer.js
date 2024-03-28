import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { basicReducer } from './basic/basicReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    basic: basicReducer,
});

export default rootReducer;