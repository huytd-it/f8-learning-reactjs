import { ADD_TODO, SET_TODO_INPUT } from "./constants"

export const setTodoInput = payload => ({
  type: SET_TODO_INPUT,
  payload
})

export const addToDo = payload => ({
  type: ADD_TODO,
  payload
})