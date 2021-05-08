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
import ProudctDetail from './componentes/ProuductDetail/ProudctDetail';
import Shipment from './componentes/Shipments/Shipment';
import Login from './componentes/Login/Login';



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
        {/* <Route path="/product/review">
         <Shop></Shop>
        </Route> */}
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/login">
          <Login>gi</Login>
        </Route>
        <Route path="/shipment">
          <Shipment></Shipment>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
       <Route path="/product/:productKey">
          <ProudctDetail></ProudctDetail>
       </Route>       
       {/* <Router path="/product/review">
          <NotFound></NotFound>
       </Router> */}
       <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  </div>
);
}

export default App;