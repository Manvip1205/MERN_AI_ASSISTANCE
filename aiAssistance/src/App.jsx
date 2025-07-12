import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login"
import SignUp from "./pages/signUp";
function App() {
  return (
    
      <Routes>
        <Route path ="login" element = {<Login/>}/>
        <Route path = "signUp" element = {<SignUp/>}/>
      </Routes>
    
  );
}

export default App;
