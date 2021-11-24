import styles from "./App.module.css";
import data from "../../data.js";
import Polaroid from "../Polaroid/Polaroid.js";
import QuoteItem from "../QuoteItem/QuoteItem.js";

function App() {
  return (
    <div className={styles.container}>
      {data.map((item) =>
        item.type === "polaroid" ? (
          <Polaroid data={item} />
        ) : (
          <QuoteItem data={item} />
        )
      )}
    </div>
  );
}

export default App;
