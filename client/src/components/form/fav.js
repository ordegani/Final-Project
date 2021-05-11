import Painting from "./Painting";

import "./maincontainer.css";
import Form from "./Form";
import React, { useEffect, useState } from "react";

// const Fav =()=>{
//           <div className="favourites">
          
//           {favourites.map((favourite, index) => (
//             <Painting
//               key={index}
           
//               image={favourite.image}
//               onClick={deleteFromfavourites}
//               buttonText="DELETE"
              
//             />
            
//           ))}
//         </div>
//         {/* <button className="print">Print</button> */}
  
// }
// export default Fav;








// const AddTofavourites=()=>{
//     const [favourites, setFavourites] = useState([]);
//     const add = (savedRecipe) => {
//       let isExists = false;
    
//       favourites.find((favorite) => {
//         if (favorite.image === savedRecipe.image) {
//           isExists = true;
//           alert("already saved");
//         }
//       });
    
//       if (!isExists) {
//         setFavourites([...favourites, savedRecipe]);
//         alert(`Saved`);
//         console.log(favourites);
//       }
    
    
    
//     return (
//       <div className="maincontainer">
    
//         <div className="paintings">
//           {favourites.map((favourite, index) => (
//             <Painting
//               key={favourite.index}
//               id={favourite.index}
//               image={favourite.image}
    
//               //onClick={addTofavourites}
//             />
//           ))}
//         </div>
//       </div>
//     );}}
//     export default AddTofavourites;
    
    
