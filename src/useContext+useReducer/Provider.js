import { useReducer } from "react";
import Context from "./Context"
import reducer, { initState } from "./reducer";
import logger from './logger'

/**
 * Định nghĩa Provider 
 * 
 * @param {*} children
 * @returns Provider 
 */
function Provider({ children }) {


  //Khởi tạo Reducer ở đây và lưu vào Context => đây là Global State
  const [state, dispatch]  = useReducer(logger(reducer), initState)

  //Định nghĩa Context
  return <Context.Provider value={[state, dispatch]}>
    {children}
  </Context.Provider>
}

export default Provider;