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
import Review from './componentes/Review/Review';
import Inventory from './componentes/Inventory/Inventory';
import NotFound from './componentes/NotFound/NotFound';

function App() {
return (
  <div>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  

  </div>
);
}

export default App;