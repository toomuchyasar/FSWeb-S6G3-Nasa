import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header.js"
import Content from "./components/content/Content.js";
import axios from "axios";


function App() {

  
  const [data, setData] = useState("");
  
  useEffect(() => { 
    const key = "shfMRPVCqktrHhpIXjNnVjOmpV6WpxMtRg2EsiyY";
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=" + key)
          .then((resp) => {
            setData(resp.data)
          })
    },[])


  return (
    <div className="App">
      <div className="appImg">
      <Header />
      <Content data={data}/>
      </div>
    </div>
  );
}

export default App;



