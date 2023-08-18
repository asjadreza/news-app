import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './components/News/News'
import Home from './components/News/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
// import Navbar from "./components/Navbar/navbar";

import './App.css'

import {auth } from './firebase'


function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
      console.log(user)
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName}/>} />
          <Route path="/News" element={<News />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;



