const initialState = {
    done : ['Recruit Ruby developers','Recruit FE developers','Recruit Project Manager']
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'setDone':
            return {...state, done:[...state.done,action.payload]};
        default:
            return state;
    }
}

export default reducer;