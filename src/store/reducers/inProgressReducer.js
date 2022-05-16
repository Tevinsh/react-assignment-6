const initialState = {
    inProgress: ['initiate Docker for the project']
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'addInProgress':
            return {...state,inProgress:[...state.inProgress,action.payload]};
        case 'updateInProgress':
            return {...state,inProgress: action.payload}
        default:
            return state;
    }
}

export default reducer;