import Todo from '../models/Todo';
import { ADD_TODO, SAVE_TODO, DELETE_ACTIVE_TODO } from "../constants/index";



const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {

  const { todos } = state;

  const activeTodos = todos;

  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      console.log(payload);

      return {
        ...state, todos: [...activeTodos, payload]
      }
    case SAVE_TODO:
      var indexItem = action.payload.index
      return {
        ...state, todos: activeTodos.map((todo, index) => {
          if (index == indexItem) {
            return action.payload.todo;
          }else{
            return todo;
          }
          
        })
      }
    case DELETE_ACTIVE_TODO:
      console.log(payload);
      return {
        ...state,
        todos:
          activeTodos.filter((todo, i) => payload != i)

      }
    default: return state;
  };
};

export default todosReducer;
