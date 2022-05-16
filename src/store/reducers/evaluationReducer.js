const initialState = {
    evaluation: ['Finalize the T.O.R']
}

const reducer = (state=initialState,action) => {
    switch (action.type){
        case 'addEvaluation':
            return {...state,evaluation:[...state.evaluation,action.payload]};
        case 'updateEvaluation':
            return {...state, evaluation: action.payload }
        default:
            return state;
    }
}

export default reducer;