import { useContext } from "react";
import { ThemeContext } from "../App";

function Paragraph() {

  const theme = useContext(ThemeContext);
  console.log(theme);
  return <div className={theme}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente in rem repellat explicabo ipsum,</div>
  
}

export default Paragraph;