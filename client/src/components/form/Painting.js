import React from "react";
import "./maincontainer.css";
import { Link } from "react-router-dom";

const Painting = ({

  image,
  artistName,
  title,
  completitionYear,
  buttonText,
  onClick,
  refreshPage,

}) => {
  return (
    <div className="paintingsContainer">
      
       <h3>{artistName}, {title} {completitionYear}</h3>
       
      <img className="image" src={image} alt="" />
      <button
        className="savedList"
        onClick={() => onClick({ title, image, artistName, completitionYear })}
        type="Submit"
      >
        {buttonText}
      </button>
      {document.getElementsByClassName("savedList")
   .addEventListener('click', refreshPage())}
    </div>
    
  );
};

export default Painting;
