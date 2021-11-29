import styles from "./InfoPopup.module.css";

export default function InfoPopup({ popupData, closeHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3>{popupData.title}</h3>
        <p>{popupData.info}</p>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
}
