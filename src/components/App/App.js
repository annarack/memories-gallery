import styles from "./App.module.css";
import data from "../../data.js";
import Polaroid from "../Polaroid/Polaroid.js";
import PaperNote from "../PaperNote/PaperNote.js";

function App() {
  return (
    <>
      <div className={styles.bgContainer} />
      <div className={styles.container}>
        {data.map((item) =>
          item.type === "polaroid" ? (
            <Polaroid data={item} key={item.id} />
          ) : (
            <PaperNote data={item} key={item.id} />
          )
        )}
      </div>
    </>
  );
}

export default App;
