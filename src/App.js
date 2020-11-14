import React from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Product from './componentes/Product/Product';
import Shop from './componentes/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Header></Header>
      <Shop></Shop>

    </div>
  );
}

export default App;
