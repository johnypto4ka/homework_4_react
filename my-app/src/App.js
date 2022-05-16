import React , { useState, useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Users from "./components/pages/Users";
import UserIdPage from "./components/pages/UserIdPage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/pages/Layout";
import UserComment from './components/pages/UserComment';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:id" element={<UserIdPage/>}/>
          <Route path='/users/comment/:id' element={ <UserComment /> } />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
