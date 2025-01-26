import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  const iRunOnlyOnce = () => {
    console.log("render 2");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.tilte}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
