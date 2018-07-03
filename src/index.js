import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import App from "./App";
import { Cart } from "./Cart.js";
import { Checkout } from "./Checkout.js";
import { Payment } from "./Payment.js";
import { Product } from "./Cards.js";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route
      path="/"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels&count=100&offset=1377;"
      crumb="not used"
    />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/payment" component={Payment} />
    <Route
      path="/men"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_CasualShirts&count=100&offset=5;"
      crumb="Men"
    />
    <Route
      path="/women"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_FusionWear_Shirts,Tops-Tunics_Tunics&count=100&offset=12;"
      crumb="Women"
    />
    <Route
      path="/kids"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels&count=100&offset=0"
      crumb="Kids"
    />
    <Route
      path="/men_topwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Sportswear_Polos-T-Shirts&count=100&offset=0;"
      crumb="Men/Topwear"
    />
    <Route
      path="/men_bottomwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Jeans&count=100&offset=0;"
      crumb="Men/Bottomwear"
    />
    <Route
      path="/men_ethnicwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Ethnicwear_EthnicSets&count=100&offset=0"
      crumb="Men/EthnicWear"
    />
    <Route
      path="/men_jackets"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Winterwear-Seasonalwear_Jackets&count=100&offset=7;"
      crumb="Men/Jackets"
    />
    <Route
      path="/men_innerwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Innerwear-Sleepwear_Shapewears&count=100&offset=0;"
      crumb="Men/Innerwear"
    />
    <Route
      path="/women_westernwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_WesternWear_Dresses-Skirts_Dresses&count=100&offset=0;"
      crumb="Women/Westernwear"
    />
    <Route
      path="/women_indianwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_EthnicWear_LehengaCholis_LehengaCholis&count=100&offset=0;"
      crumb="Women/Indianwear"
    />
    <Route
      path="/women_activewear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_Sports-GymWear_Shorts&count=100&offset=28;"
      crumb="Women/Activewear"
    />
    <Route
      path="/women_sleepwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_Lingerie-Sleepwear_NightSuits&count=100&offset=11;"
      crumb="Women/Sleepwear"
    />
    <Route
      path="/kids_boys"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Kids&count=100&offset=4"
      crumb="Kids/Boys"
    />
    <Route
      path="/kids_girls"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Kids_Girls_Dungarees-Jumpsuits_Dungarees&count=100&offset=0"
      crumb="Kids/Girls"
    />
    <Route path="/product" component={Product} />
  </Router>,
  document.getElementById("root")
);
