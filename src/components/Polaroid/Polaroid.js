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
        src={
          data.subtype === "light"
            ? "./assets/polaroid.png"
            : "./assets/polaroid2.png"
        }
        alt=""
      />
      <img className={styles.pin} src={"./assets/Klammer.png"} alt="" />
      <div
        style={{ color: data.subtype === "dark" && "white" }}
        className={styles.text}
      >
        {data.title}
      </div>
    </div>
  );
}
