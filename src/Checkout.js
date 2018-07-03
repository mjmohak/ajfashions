import React, { Component } from "react";
import { Footer } from "./Footer.js";
import "./CSS/style.css";
import { Link, browserHistory } from "react-router";

export class Checkout extends Component {
  storeBillingInfo = () => {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var uname = document.getElementById("username").value;
    var emailId = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var address2 = document.getElementById("address2").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var obj = {
      "First Name": fname,
      "Last Name": lname,
      Username: uname,
      Email: emailId,
      Address: address,
      "Address 2": address2,
      Country: country,
      State: state,
      Zip: zip
    };
    var arr = [];
    arr.push(obj);
    console.log(arr);
    var json = JSON.stringify(arr);
    localStorage.setItem("billing", json);
    if (
      fname == 0 ||
      lname == 0 ||
      uname == 0 ||
      address == 0 ||
      country == 0 ||
      state == 0 ||
      zip == 0
    ) {
    } else {
      browserHistory.push("payment");
    }
    // document.getElementById("billForm").reset();
  };

  render() {
    return [
      <div className="container" style={{ marginLeft: 20, marginTop: 40 }}>
        <Link className="btn btn-primary" to="cart">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go
          Back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <div className="py-5 text-left">
          <h2>Checkout form</h2>
        </div>
        <div className="row">
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" id="billForm" novalidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="username">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label for="address2">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Country"
                    required
                  />
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="State"
                    required
                  />
                  <div className="invalid-feedback">State is required.</div>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <div className="mb-4">
                <button
                  // to="payment"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.storeBillingInfo}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>,
      <Footer />
    ];
  }
}
