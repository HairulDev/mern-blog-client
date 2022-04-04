const createStore = require("redux").createStore;

// 2. Reducer   = Berupa function untuk mengubah value di Store
const initialState = {
    value: 0,
    age: 17
}
const rootReducer = (state = initialState, action) => {
    // console.log(action);
    switch(action.type) {
        case 'ADD_AGE':
           return {
            ...state,
            age: state.age + 1
        }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default :
            return state;
    }
}

// 1. Store = Wadah besar untuk menyimpan value/state secara global
const store = createStore(rootReducer);
console.log("Store awal: ", store.getState());

// 3. Dispatch Action   = Proses pemanggilan function di dalam reducer
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})

// 4.  Subscription = Proses penggunaan Store yang di perlukan
store.subscribe(() => {
    console.log('Store change : ', store.getState());
})
console.log("Store akhir: ", store.getState());