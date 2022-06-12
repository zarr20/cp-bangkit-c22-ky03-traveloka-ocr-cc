const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value:0
}

//reducer -> untuk menggelola store
const rootReducer = (state,action) => {
return state;
}

// store 
const store = createStore();
console.log(store.getState());

//dispatch/action -> membanggil instruksi / menjalankan reducer

//subscription -> memanggil store

