import React, { Component } from "react";
import "./CSS/dkecs.css";
import "./CSS/style.css";
import "./CSS/theme.css";
import mens from "./images/mens.jpg";
import womens from "./images/womens.jpg";
import kids from "./images/kids.jpg";
import menu from "./images/menu.png";
import image from "./images/image.jpg";
import mens1 from "./images/mens1.jpg";
import womens1 from "./images/womens1.jpg";
import kid1 from "./images/kid1.jpg";

export class Modal extends Component {
  state = {
    arr: []
  };
  signup = () => {
    var name = document.getElementById("name1").value;
    var age = document.getElementById("age1").value;
    var uname = document.getElementById("uname1").value;
    var pwd = document.getElementById("psw1").value;
    var obj = { name: name, age: age, uname: uname, pwd: pwd };
    var newArray = this.state.arr.slice();
    console.log("xx");
    newArray.push(obj);
    this.setState({ arr: newArray }, () => {
      console.log("yayy");
      var json = JSON.stringify(this.state.arr);
      localStorage.setItem("data", json);
      alert("Sign up successfull");
      document.getElementById("dusra").reset();
    });
  };
  signin = () => {
    var obj = JSON.parse(localStorage.getItem("data"));
    var uname = document.getElementById("uname2").value;
    var pwd = document.getElementById("psw2").value;
    var check = 0;
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].uname == uname && obj[i].pwd == pwd) {
        check = 1;
        break;
      }
    }
    if (check == 1) alert("Log In successfull");
    else alert("Invalid username or password");
    document.getElementById("pehla").reset();
  };

  render() {
    return [
      <div
        className="modal fade"
        id="register1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Sign Up
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="dusra">
              <div className="modal-body">
                <div class="modal-head">
                  <label>
                    <b>Name </b>
                  </label>&emsp;
                  <br />
                  <label>
                    <b>Age </b>
                  </label>&emsp;
                  <br />
                  <label>
                    <b>Username </b>
                  </label>&emsp;
                  <br />
                  <label>
                    <b>Password </b>
                  </label>&emsp;
                </div>
                <div className="modal-data">
                  <input
                    type="text"
                    id="name1"
                    placeholder="Enter your Name"
                    required
                  />
                  <br />
                  <input
                    type="number"
                    id="age1"
                    placeholder="Enter your Age"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    id="uname1"
                    placeholder="Enter Username"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    id="psw1"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer" id="signup-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.signup}
                  data-dismiss="modal"
                >
                  Sign UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>,
      <div
        className="modal fade"
        id="login1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Sign In
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="pehla">
              <div className="modal-body">
                <div class="modal-head">
                  <label>
                    <b>Username </b>
                  </label>&emsp;
                  <br />
                  <label>
                    <b>Password </b>
                  </label>&emsp;
                </div>
                <div className="modal-data">
                  <input
                    type="text"
                    id="uname2"
                    placeholder="Enter Username"
                    name="uname"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    id="psw2"
                    placeholder="Enter Password"
                    name="psw"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer" id="signin-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.signin}
                  data-dismiss="modal"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ];
  }
}
