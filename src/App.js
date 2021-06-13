import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext()

function App() {
  const [category, setCategory] = useState("Laptop")
  
  return (

    <CategoryContext.Provider value={[category, setCategory]}>
      <h1>This is App.js: {category} </h1>
      <Header></Header>
      <Menu></Menu>
      <Shipment></Shipment>
    </CategoryContext.Provider>
      
  );
}

export default App;
