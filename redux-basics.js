const redux = require('redux');
const createStore = redux.createStore

const initialState = {
    counter: 0
}

//reducer
const rootReducer = (state = initialState, action) => {
    console.log('root' + state);
    if (action.type === 'INC_COUNTER') {
         return {
             ...state,
             counter: state.counter + 1
         };
    }
    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

//store 
const store = createStore(rootReducer);
console.log(store.getState())


//subscription
store.subscribe(() => {
    console.log('[subscription]', store.getState());
})


//Dispatching Action
//dispatch takes argument which is action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

