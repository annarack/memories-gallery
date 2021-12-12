import { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const crossFadeTimer = 20000;

export default function Slideshow({ imageData }) {
  const [currentItemID, setCurrentItemID] = useState(0);

  useEffect(() => {
    console.log("init slideshow timeout");
    const timeout = setTimeout(() => {
      console.log("change item to " + ((currentItemID + 1) % imageData.length));
      setCurrentItemID((currentItemID + 1) % imageData.length);
    }, crossFadeTimer / 2);

    return () => clearInterval(timeout);
  }, [currentItemID, imageData.length]);

  // fade style is defined in index.css to have it globally accessible
  return (
    <TransitionGroup className={styles.container}>
      <CSSTransition
        key={currentItemID}
        timeout={crossFadeTimer}
        classNames="fade"
      >
        <img src={`./assets/${imageData[currentItemID].img}`} />
      </CSSTransition>
    </TransitionGroup>
  );
}
