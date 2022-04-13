import { createStore, combineReducers } from 'redux';
import todosReducer from "../reducers/TodosReducer";

const rootReducer = combineReducers(
    { todosReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;