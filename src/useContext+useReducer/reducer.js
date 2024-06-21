import { ADD_TODO, SET_TODO_INPUT } from "./constants";


//định nghĩa state
const initState = {
  todos: [],
  todoInput: ''
}


//Hàm reducer
function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT: {
      return { ...state, todoInput: action.payload }
    }
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] }
    }
    default: {
      throw new Error('Invalid action.')
    }
  }
}

export { initState };
export default reducer;

