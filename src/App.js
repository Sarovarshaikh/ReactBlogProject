import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technology from './Components/Technology';
import Bollywood from './Components/Bollywood';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import NavBar from './Components/NavBar';
import Data from './Components/Data';
import BlogDetail from './Components/Blog-Detail';

function App() {
  return (
  <div>
    <Data>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category/bollywood" element={<Bollywood />} />
          <Route path="/category/technology" element={<Technology />} />
          <Route path="/category/hollywood" element={<Hollywood />} />
          <Route path="/category/fitness" element={<Fitness />} />
          <Route path="/category/food" element={<Food />} />
          <Route path="/bollywood/:id" element={<BlogDetail />} />
          <Route path="/technology/:id" element={<BlogDetail />} />
          <Route path="/hollywood/:id" element={<BlogDetail />} />
          <Route path="/fitness/:id" element={<BlogDetail />} />
          <Route path="/food/:id" element={<BlogDetail />} />

        </Routes>
      </BrowserRouter>
    </Data>
    

    
  </div>
  );
}

export default App;