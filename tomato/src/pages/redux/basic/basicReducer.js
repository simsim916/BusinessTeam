import { CHANGEKEYWORD } from "./actions";


const initialState = {
    basic: {
        keyword: '',
    }
};

const basicReducer = (state = initialState.basic, action) => {
    switch (action.type) {
        case CHANGEKEYWORD:
            return {
                ...state,
                keyword: action.nkeyword
            };
        default:
            return state;
    }
};

export { basicReducer };