import styles from "./QuoteItem.module.css";

export default function QuoteItem({ data }) {
  return (
    <div className={styles.container}>
      <img className={styles.pin} src={"./assets/pin.png"} alt="" />
      <img
        className={styles.backgroundImg}
        src={"./assets/paperBG.png"}
        alt=""
      />
      <div className={styles.textBox}>
        <h3>{data.note}</h3>
      </div>
    </div>
  );
}
