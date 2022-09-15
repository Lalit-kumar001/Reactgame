// import React, { useState } from 'react';
import Home from "./Home"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./style2.css"
import "./style.css"
import { Mainscreen } from './Mainscreen';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="Main" element={<Mainscreen/> }/>
</Routes>
</BrowserRouter> 
  )
}
  

export default App;
