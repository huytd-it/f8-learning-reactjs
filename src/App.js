
import './App.css';
import styles from './CSSModule/Button.module.scss'

function App() {

  return (<div><button>
    Button
  </button>
    <button className={styles.red}> Red</button></div>)


}

export default App;
