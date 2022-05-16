const initialState  = {
    backlog: ['Create Template','Create Mockup','Adjust the web header']
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'addBacklog':
            return {...state, backlog: [...state.backlog,action.payload] }
        case 'updateBacklog':
            console.log(action.payload);
            return {...state, backlog: action.payload}
        default:
            return state;
    }
}

export default reducer;