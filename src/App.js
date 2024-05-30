
import './App.css';
import { actions, useStore } from './useContext+useReducer';

function App() {

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;

  console.log(todos);
  return (

    <div className="" style={{ padding: 15 }}>

      <input
        value={todoInput}
        placeholder='Enter todo ...'
        onChange={e => dispatch(actions.setTodoInput(e.target.value))} />
     
    </div>

  );
}

export default App;
