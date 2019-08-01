import { combineReducers } from 'redux'; //쪼개진 리듀서를 하나로 합쳐줌
import todos from './todos';

const rootReducer = combineReducers({
    todos
})

export default rootReducer;