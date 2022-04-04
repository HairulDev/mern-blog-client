import { createStore } from "redux";

const initialState = {
    dataBlogs: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;