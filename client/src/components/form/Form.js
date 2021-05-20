import Painting from "./Painting";
import React, { useEffect, useState } from "react";
import "./maincontainer.css";



const Form = ({setsave}) => {
  const [paintings, setPaintings] = useState([]);
  const [search, setSearch] = useState("");
 
  const [SessionKey, setSessionKey] = useState("");


  
  const getSessionKey = async () => {
    const response = await fetch(
      `https://api.codetabs.com/v1/proxy?quest=https://www.wikiart.org/en/Api/2/login?accessCode=8152dc79d3a84b65&secretCode=8e713d5e00346e24`
    );
    const Data1 = await response.json();
    setSessionKey(Data1.hits);
    console.log(Data1.hits);
  };
  useEffect(() => {
    getSessionKey();
  }, []);
  console.log(SessionKey);

  const getPaintings = async () => {
    console.log("fetching");
    const response = await fetch(
      `https://api.codetabs.com/v1/proxy?quest=http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${query}&json=2&authSessionKey=${SessionKey}`
    );
    const Rawdata = await response.json();
    // const data = JSON.stringify(Rawdata).toLowerCase().replace(/ /g,"-");
    setPaintings(Rawdata);
    console.log(Rawdata);
    //  console.log(data[100].image); 
    //  console.log(data[1].image); 
    //  console.log(data[2].image); 
    //  console.log(data[3].image); 
    //  console.log(data[4].image); 
    //  console.log(data[5].image); 
    // setPaintings(data.hits);
    // console.log(data.hits);
  };

  const flavourArray = ["john-everett-millais", "edward-hopper", "michelangelo-merisi-da-caravaggio", "gustav-klimt", "leon-spilliaert"];
  const ran = Math.floor(Math.random() * flavourArray.length);
  const searcher = flavourArray[ran];
  const [query, setQuery] = useState (searcher);

  useEffect(() => {
    getPaintings();
  }, [query]);

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search.toLowerCase().replace(/ /g,"-"));
    setSearch("");
  };
///////////
const [favourites, setFavourites] = useState([]);

const addTofavourites = (saved) => {


    setFavourites([...favourites, saved]);
    
    // alert(`Good Choice!`);
   setsave(saved);
   console.log(favourites);

    // localStorage.setItem(`user`, saved.title)
    // localStorage.setItem(`user1`, saved.image)
    // localStorage.setItem(`user2`, query)
    
 
  
  //   window.localStorage.setItem(i, saved.title);
  
    
    // localStorage.setItem(`${user}`, JSON.stringify(favourites))
};


// window.localStorage.setItem('user3', ...favourites);
// JSON.parse(window.localStorage.getItem('user3'));
// window.localStorage.setItem('user1', favourites);
function refreshPage(){
  window.location.reload();
} 



///////////
  return (
   

  
    <div className="maincontainer">

    <div className="paintings">
        <div className="explore">Explore our suggestion: <br/>{query}'s work
        
        <button className="refresh" type="submit" onClick={refreshPage}>Give me a new suggestion</button></div>
      {/* <form onSubmit={getSearch} className="search-form"> */}
      
        {/* <input
          className="search-bar"
          placeholder="Or type here your search"
          type="text"
          value={search}
          onChange={updateSearch}
        /> */}
      
        {/* <button
          className="search-button"
          type="Submit"
        >
          Search
        </button> */}
      
      {/* </form> */}
      

        
      {/* <div>{painting.artistname}</div> */}
        {paintings.slice(paintings.length-10).map((painting, index) => (
          <Painting
            key={painting.index}
            id={painting.index}
            image={painting.image.replace('!Large.jpg','')
              //TODO add css to control size
              // !Large.jpg + copy api
            }
            artistName={painting.artistName}
            title={painting.title}
            completitionYear={painting.completitionYear}
            onClick={addTofavourites}
            buttonText="Save"
            // onClick={AddTofavourites}
            // buttonText="Save"
            
            
          />
          
        ))}
        
      </div>
      
    </div>
  );
};

export default Form;

