
import './App.css';
import { actions, useStore } from './useContext+useReducer';

function App() {

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;

 
  const handleAdd = () => {
    dispatch(actions.addToDo(todoInput))
  }

  return (

    <div className="" style={{ padding: 15 }}>

      <input
        value={todoInput}
        placeholder='Enter todo ...'
        onChange={e => dispatch(actions.setTodoInput(e.target.value))} />
     
     <button onClick={handleAdd}>Add</button>

     <ul>
      {
        todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))
      }
     </ul>
    </div>

  );
}

export default App;
