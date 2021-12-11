import styles from "./Pinboard.module.css";
import Polaroid from "../Polaroid/Polaroid.js";
import PaperNote from "../PaperNote/PaperNote.js";

export default function Pinboard({ data }) {
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
