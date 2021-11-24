import styles from "./Polaroid.module.css";

export default function Polaroid({ data }) {
  const showPolaroidInfo = () => {
    alert(data.info);
  };

  return (
    <div onClick={showPolaroidInfo} className={styles.container}>
      <img className={styles.photo} src={`./assets/${data.img}`} alt="" />
      <img
        className={styles.polaroidFrame}
        src={"./assets/polaroid.png"}
        alt=""
      />
      <img className={styles.pin} src={"./assets/Klammer.png"} alt="" />
      <div className={styles.text}>{data.title}</div>
    </div>
  );
}
