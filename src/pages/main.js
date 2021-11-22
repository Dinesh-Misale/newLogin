import React from "react";
import Profile from "./profile";
import Login from "./login";
import Navbar from "./nav";
import {BrowserRouter as Router,
    Route,
    Routes} from "react-router-dom"



const Main = () =>{

    return(
        
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={
        <div>
        <Navbar />
        <Profile />
        </div> } />
        
      </Routes>
    </Router>
    );

}

export default Main;