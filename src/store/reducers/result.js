import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = ( state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // const newArray = [...state.results]  
            // newArray.splice(id, 1)
            //state.results.splice(id,1) // but it will mutate the state
            const updatedArray = state.results.filter(element => element.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}


export default reducer;
