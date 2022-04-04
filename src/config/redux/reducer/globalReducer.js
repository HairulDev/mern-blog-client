const initialState = {
    name: 'Hairul'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Ganteng'
        }
    }
    return state;
}

export default globalReducer;