import MainMenu from "../MainMenu/MainMenu";
import Pinboard from "../Pinboard/Pinboard";
import Slideshow from "../Slideshow/Slideshow";
import data from "../../data.js";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("pinboard");

  const filteredData = data.filter((item) => item.type === "polaroid");
  console.log(filteredData);

  return (
    <>
      {currentPage === "pinboard" ? (
        <Pinboard data={data} />
      ) : (
        <Slideshow imageData={filteredData} />
      )}
      <MainMenu pageHandler={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
