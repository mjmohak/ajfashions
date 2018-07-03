import React, { Component } from "react";
import { Link } from "react-router";
import { Modal } from "./Modal.js";
import { Carousel } from "./Carousel.js";
import { Navbar } from "./Navbar.js";
import { Cards } from "./Cards.js";
import { Crumbs } from "./Crumbs.js";
import { Footer } from "./Footer.js";
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

class Categories extends Component {
  render() {
    return [
      <div className="container-fluid dk_mf2_101">
        <div className="container dk_mf2_102">
          <div className="col-xs-12 dk_mf2_103">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dk_mf2_104">
              <Link to="men">
                <div className="col-sm-12 col-xs-12 dk_mf2_105">
                  <img src={mens1} className="dk_mf2_106" />
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dk_mf2_104">
              <Link to="women">
                <div className="col-sm-12 col-xs-12 dk_mf2_105">
                  <img src={womens1} className="dk_mf2_106" />
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dk_mf2_104">
              <Link to="kids">
                <div className=" col-sm-12 col-xs-12 dk_mf2_105">
                  <img src={kid1} className="dk_mf2_106" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ];
  }
}

export class Static extends Component {
  state = {
    itemsInCart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0
  };

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState({
      itemsInCart: e
    });
  }

  render() {
    // this.forceUpdate();
    // console.log("sjb", this.props.url);
    var handler = this.handler;
    if (
      this.props.url ===
      "http://101.53.137.41/api/?cat=Apparels&count=100&offset=1377;"
    ) {
      return [
        <Navbar items={this.state.itemsInCart} />,
        <div className="margin-div_dk" />,
        <Carousel />,
        <Categories />,
        <a href="#" id="back-top" title="Back to top">
          {" "}
          &uarr;
        </a>,
        <Modal />,
        <Cards
          url={this.props.url}
          handler={handler.bind(this)}
          items={this.state.itemsInCart}
        />,
        <Footer />
      ];
    } else {
      return [
        <Navbar items={this.state.itemsInCart} />,
        <div className="margin-div_dk" />,
        <a href="#" id="back-top" title="Back to top">
          {" "}
          &uarr;
        </a>,
        <Modal />,
        <Crumbs crumb={this.props.crumb} />,
        <Cards
          url={this.props.url}
          handler={handler.bind(this)}
          items={this.state.itemsInCart}
        />,
        <Footer />
      ];
    }
  }
}
