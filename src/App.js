import React, { useState } from "react";
import Index  from "./Components/routes/Index";

import './App.css';
// import Lottie from 'lottie-react';
// import underConstruction from '../src/assests/images/underConstruction1.json';
import Navbar from './Components/Navbar';

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar />
      <Index />

    </>
  );
}


export default App;