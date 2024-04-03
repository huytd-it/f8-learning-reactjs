
import './App.css';
import { actions, StoreContext, StoreProvider, useStore } from './useContext+useReducer';
import Content from './useContext/Content';
import { createContext, useContext, useState } from 'react';


export const ThemeContext = createContext();

function App() {

  const [state, dispatch] = useStore();


  const [todos, todoInput] = state;
  console.log(state);

  return (

    <div className="" style={{ padding: 15 }}>

      <input
        value={todoInput}
        placeholder='Enter todo ...'
        onChange={e => dispatch(actions.setTodoInput(e.target.value))} />
      <Content></Content>
    </div>

  );
}

export default App;
