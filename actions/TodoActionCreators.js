import Todo from "../models/Todo";
import {ADD_TODO,SAVE_TODO,DELETE_ACTIVE_TODO,COMPLETE_TODO,DELETE_COMPLETED_TODO} from "../constants/index";

export function addTodo() {
  return {
    type: ADD_TODO,
    payload: new Todo('','','')
  };
};


export function saveTodo(todo,index) {
  console.log('todo:::::::::::::::  todo}',todo);
  return {
    type: SAVE_TODO,
    payload:{todo,index}
  };
};



export function deleteActiveTodo(index) {
  return {
    type: DELETE_ACTIVE_TODO,
    payload: index
  };
};

export function deleteCompletedTodo(index) {
  return {
    type:DELETE_COMPLETED_TODO,
    payload: index
  };
};

export function completeTodo(index) {
  return {
    type:COMPLETE_TODO,
    payload: index
  };
};
