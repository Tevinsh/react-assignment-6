import {createStore,combineReducers} from 'redux';
import backlogReducer from './reducers/backlogReducer';
import inProgressReducer from './reducers/inProgressReducer';
import evaluationReducer from './reducers/evaluationReducer';
import doneReducer from './reducers/doneReducer';

const reducers = combineReducers({
    backlog: backlogReducer,
    inProgress: inProgressReducer,
    evaluation: evaluationReducer,
    done: doneReducer 
})
const store = createStore(reducers);

export default store;