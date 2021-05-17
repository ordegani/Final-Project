import React from "react";
import "./maincontainer.css";
// import Form from "./Form";



const Painting = ({

  image,
  artistName,
  title,
  completitionYear,
  buttonText,
  onClick
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
      
    </div>
    
  );
};

export default Painting;
