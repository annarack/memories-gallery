import styles from "./MainMenu.module.css";
import Button from "../Button/Button.js";
import { useState } from "react";

// https://hamburger-react.netlify.app/
import { Squash as Hamburger } from "hamburger-react";

export default function MainMenu(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (page) => {
    props.pageHandler(page);
    setOpen(false);
  };

  return (
    <div className={`${styles.container} ${!open && styles.closed}`}>
      <div className={styles.menuContainer}>
        <h4>Memories-Gallery</h4>
        <Button
          isSelected={props.currentPage === "pinboard"}
          onClickHandler={() => handleClick("pinboard")}
        >
          Pinboard
        </Button>
        <Button
          isSelected={props.currentPage === "slideshow"}
          onClickHandler={() => handleClick("slideshow")}
        >
          Slideshow
        </Button>
      </div>
      <Hamburger
        toggled={open}
        toggle={setOpen}
        color="white"
        size={25}
        label="Menu"
        rounded
      />
    </div>
  );
}
