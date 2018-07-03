import React, { Component } from "react";
import { Footer } from "./Footer.js";
import "./CSS/style.css";
import { Link, browserHistory } from "react-router";

const Product = ({
  description,
  mrp,
  title,
  image,
  prodId,
  seller,
  sellingPrice,
  discount,
  sellerRating,
  Remove
}) => (
  <tr>
    <td className="link">
      <Link to="cart" onClick={Remove}>
        <i class="fas fa-times-circle rembtn" />
      </Link>
    </td>
    <td className="product">
      <div className="product-img">
        <img src={image} />
      </div>
      <div className="product-name">
        <a href="#">{title}</a>
        <br />
        <span>Sold By- {seller}</span>
        <br />
        <span>Seller Rating- {sellerRating}/5</span>
      </div>
    </td>
    <td className="price">
      <span id="mrp" style={{ color: "grey" }}>
        Rs. {mrp}
      </span>&nbsp;&nbsp; Rs. {sellingPrice}
      <br />
      <span className="disc">{discount}% OFF</span>
    </td>
    <td className="quantity">1</td>
    <td className="price">Rs. {sellingPrice}</td>
  </tr>
);

export class Cart extends Component {
  RemoveFromCart = prodId => {
    console.log("afaef");
    var items = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < items.length; i++) {
      if (items[i]["productId"] == prodId) {
        items.splice(i, 1);
        break;
      }
    }
    var item = JSON.stringify(items);
    localStorage.setItem("cart", item);
  };
  renderProductsInCart = () => {
    const elements = [];
    var total = 0;
    var obj = JSON.parse(localStorage.getItem("cart"));
    for (let index in obj) {
      let disc =
        ((obj[index]["mrp"] - obj[index]["sellingPrice"]) / obj[index]["mrp"]) *
        100;
      total = total + obj[index]["sellingPrice"];
      elements.push(
        <Product
          description={obj[index]["description"]}
          mrp={obj[index]["mrp"]}
          title={obj[index]["title"]}
          image={obj[index]["imageUrlStr"]}
          prodId={obj[index]["productId"]}
          seller={obj[index]["sellerName"]}
          sellingPrice={obj[index]["sellingPrice"]}
          discount={disc.toFixed(0)}
          sellerRating={obj[index]["sellerAverageRating"]}
          Remove={() => this.RemoveFromCart(obj[index]["productId"])}
        />
      );
    }
    elements.push(
      <tr class="totals">
        <td colspan="2">
          <input type="submit" name="submit" value="Update cart" hidden />
        </td>
        <td class="quantity-span" colspan="2">
          Total-
        </td>
        <td class="price">Rs. {total}</td>
      </tr>
    );
    return elements;
  };

  checkCart = () => {
    console.log("SAxs)");
    var o = localStorage.getItem("cart");
    if (o != null) {
      var obj = JSON.parse(o);
      if (obj.length == 0) {
        console.log("here");
        alert("Cart empty!");
        browserHistory.push("cart");
      } else {
        browserHistory.push("checkout");
      }
    } else {
      alert("Cart empty!");
      browserHistory.push("cart");
    }
  };

  render() {
    return [
      <p id="cart-heading">
        <b>SHOPPING CART</b>
      </p>,
      <Link to="/" className="continue-shopping btn btn-primary">
        Continue Shopping
      </Link>,
      <button
        // to="checkout"
        // id="checkout1"
        onClick={() => this.checkCart()}
        className="checkout-button btn btn-primary"
      >
        Checkout
      </button>,
      <table cellspacing="0" className="shopping-cart">
        <thead>
          <tr className="headings">
            <th
              className="shopping-cart-head link"
              style={{ backgroundColor: "black", color: "white" }}
            >
              &nbsp;
            </th>
            <th
              className="shopping-cart-head product"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Item
            </th>
            <th
              className="shopping-cart-head price"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Price
            </th>
            <th
              className="shopping-cart-head quantity"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Quantity
            </th>
            <th
              className="shopping-cart-head price"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>{this.renderProductsInCart()}</tbody>
      </table>,
      <Footer />
    ];
  }
}
