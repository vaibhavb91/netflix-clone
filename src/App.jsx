import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Profile from "../src/pages/Profile";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export default App;
