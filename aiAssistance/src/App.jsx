import React from "react";
import { Route, Routes } from "react-router-dom";

import signUp from "./pages/signUp"
import login from "./pages/login"
function App() {
  return (
    
      <Routes>
        <Route path ="login" element = {<login/>}/>
        <Route path = "signUp" element = {<signUp/>}/>
      </Routes>
    
  );
}

export default App;
