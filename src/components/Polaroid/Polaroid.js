import { useState, useEffect } from "react";
import styles from "./Polaroid.module.css";
import InfoPopup from "../InfoPopup/InfoPopup.js";

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default function Polaroid({ data }) {
  const [likeCount, setLikeCount] = useState(0);
  const [pinRotation] = useState(`rotateZ(${getRandomArbitrary(-20, 20)}deg)`);
  const [polaroidRotation] = useState(
    `rotateZ(${getRandomArbitrary(-10, 10)}deg)`
  );
  const [showPopup, setShowPopup] = useState(false);

  // use a useEffect hook to perform side effects like a
  // setTimeout function to change the rotation every 5 sec
  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setPinRotation(`rotateZ(${getRandomArbitrary(-20, 20)}deg)`);
  //     setPolaroidRotation(`rotateZ(${getRandomArbitrary(-10, 10)}deg)`);
  //   }, 5000);
  //   return () => clearTimeout(timeout);
  // });

  const likePhoto = () => {
    setLikeCount(likeCount + 1);
  };

  const togglePolaroidInfo = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div
        onClick={togglePolaroidInfo}
        className={styles.container}
        style={{ transform: polaroidRotation }}
      >
        <img className={styles.photo} src={`./assets/${data.img}`} />
        <img
          className={styles.polaroidFrame}
          src={
            data.subtype === "light"
              ? "./assets/polaroid.png"
              : "./assets/polaroid2.png"
          }
          alt=""
        />
        <img
          className={styles.pin}
          src={"./assets/Klammer.png"}
          style={{ transform: pinRotation }}
          alt=""
        />
        <div
          style={{ color: data.subtype === "dark" && "white" }}
          className={styles.text}
        >
          {data.title}
        </div>
      </div>
      <button onClick={likePhoto}>Like</button>
      <span>{likeCount}</span>
      {showPopup && (
        <InfoPopup popupData={data} closeHandler={togglePolaroidInfo} />
      )}
    </div>
  );
}
