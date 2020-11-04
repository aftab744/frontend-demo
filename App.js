import React from 'react';
import "./App.css"
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Solution from "./Solution.js";



function App(){
  return(
    <div className="app">
    <Header/>
    <div className="app__page">
    <Sidebar/>
    <Solution />
   
    </div>

    </div>);
}
export default App;