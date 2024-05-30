import { useReducer } from "react";
import Context from "./Context"
import reducer, { initState } from "./reducer";

function Provider({ children }) {


  //Khởi tạo Reducer ở đây và lưu vào Context => đây là Global State
  const [state, dispatch]  = useReducer(reducer, initState)

  //Định nghĩa Context
  return <Context.Provider value={[state, dispatch]}>
    {children}
  </Context.Provider>
}

export default Provider;