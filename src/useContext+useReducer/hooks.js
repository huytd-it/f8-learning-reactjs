import { useContext } from "react"
import Context from "./Context"


//custom Hooks
export const useStore  = ()=> {
  const [state, dispatch] = useContext(Context);// Đang lưu trữ Global State và Hàm dispatch(ACTION)

  return [state, dispatch];
}