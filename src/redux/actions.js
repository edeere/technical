import { todosRef } from '../firebase';
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO } from "./actionTypes";

export const setTodo = (all,id) => {
  return (dispatch) => {
    
    dispatch({
      type   : SET_TODO,
      payload: {
        "all": all,
        "id": id
      }
    })
  }
}

export const addTodo = content => {
  return (dispatch) => {
    let key = todosRef.push().key
    let todoItem = {"message": content, "id":key, "completed": false}
    
    todosRef.child(key).update(todoItem)
    .then(()=>{
        dispatch({
          type   : ADD_TODO,
          payload: {
              "id": key,
              "message": content,
              "completed": false
          }
        })
      })
      .catch(()=>{
        console.log('failed')
      })
  }
}

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });