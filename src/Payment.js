import React, { Component } from "react";
import { Link } from "react-router";
import { Footer } from "./Footer.js";
import "./CSS/style.css";

export class Payment extends Component {
  displayCart = () => {
    var obj = JSON.parse(localStorage.getItem("cart"));
    var elements = [];
    for (let index in obj) {
      elements.push(
        <div>
          <span className="order-title">{obj[index]["title"]}-</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="order-price">Rs. {obj[index]["sellingPrice"]}</span>
          <br />
        </div>
      );
    }
    localStorage.removeItem("cart");
    return elements;
  };

  displayBill = () => {
    var obj = JSON.parse(localStorage.getItem("billing"));
    var elements = [];
    for (let index in obj) {
      elements.push(
        <div id="bill-head">
          <span>Address:</span>
          <br />
          <span>Address2:</span>
          <br />
          <span>Country:</span>
          <br />
          <span>Email:</span>
          <br />
          <span>First Name:</span>
          <br />
          <span>Last Name:</span>
          <br />
          <span>State:</span>
          <br />
          <span>Username:</span>
          <br />
          <span>Zip:</span>
          <br />
        </div>,
        <div id="bill-value">
          <span>{obj[index]["Address"]}</span>
          <br />
          <span>{obj[index]["Address 2"]}</span>
          <br />
          <span>{obj[index]["Country"]}</span>
          <br />
          <span>{obj[index]["Email"]}</span>
          <br />
          <span>{obj[index]["First Name"]}</span>
          <br />
          <span>{obj[index]["Last Name"]}</span>
          <br />
          <span>{obj[index]["State"]}</span>
          <br />
          <span>{obj[index]["Username"]}</span>
          <br />
          <span>{obj[index]["Zip"]}</span>
          <br />
        </div>
      );
    }
    return elements;
  };

  render() {
    return [
      <div>
        <br />
        <center>
          <span id="payment-head">
            &nbsp;&nbsp;Your Order has been placed successfully !!&nbsp;&nbsp;
          </span>
        </center>
      </div>,
      <br />,
      <div>
        <div>
          <div className="payment-sub-head">
            <b>
              <u>Order Details </u>&nbsp;-
            </b>
          </div>
          {this.displayCart()}
        </div>
        <br />
        <div>
          <div className="payment-sub-head">
            <b>
              <u>Delivery Details </u>&nbsp;-
            </b>
          </div>
          {this.displayBill()}
        </div>
        <br />
        <br />
        <center>
          <Link to="/" className="btn btn-outline-dark">
            Make a New Order
          </Link>
        </center>
      </div>,
      <Footer />
    ];
  }
}
