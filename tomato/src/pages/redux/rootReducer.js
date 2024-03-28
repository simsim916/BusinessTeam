import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
});

export default rootReducer;