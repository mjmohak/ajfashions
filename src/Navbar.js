import React, { Component } from "react";
import { Link } from "react-router";
import "./CSS/dkecs.css";
import "./CSS/style.css";
import "./CSS/theme.css";
import { Cards } from "./Cards.js";
import mens from "./images/mens.jpg";
import womens from "./images/womens.jpg";
import kids from "./images/kids.jpg";
import menu from "./images/menu.png";
import image from "./images/image.jpg";
import mens1 from "./images/mens1.jpg";
import womens1 from "./images/womens1.jpg";
import kid1 from "./images/kid1.jpg";

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("innerMyNav").style.width = "0%";
  }
  openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("innerMyNav").style.width = "45%";
  }
  render() {
    console.log("x", this.props.items);
    return [
      <div className="container-fluid dk_mf2_21">
        <div className="dk_mf2_21_a">
          <div className="col-xs-1 dk_m2f_22">
            <span onClick={this.openNav} id="myNavButton">
              &#9776;
            </span>
            <div id="myNav" className="overlay">
              <div id="innerMyNav">
                <a
                  href="javascript:void(0)"
                  className="btnclose2"
                  onClick={this.closeNav}
                >
                  &times;
                </a>
                <div className="overlay-content">
                  <Link to="men">Men</Link>
                  <ul className="dk_mf2_58">
                    <li>
                      <Link to="men_topwear">Top Wear</Link>
                    </li>
                    <li>
                      <Link to="men_bottomwear">Bottom Wear</Link>
                    </li>
                    <li>
                      <Link to="men_ethnicwear">Ethnic Wear</Link>
                    </li>
                    <li>
                      <Link to="men_jackets">Jackets</Link>
                    </li>
                    <li>
                      <Link to="men_innerwear">Inner Wear</Link>
                    </li>
                  </ul>
                  <Link to="women">Women</Link>
                  <ul className="dk_mf2_58">
                    <li>
                      <Link to="women_westernwear">Western Wear</Link>
                    </li>
                    <li>
                      <Link to="women_indianwear">Indian Wear</Link>
                    </li>
                    <li>
                      <Link to="women_activewear">Active Wear</Link>
                    </li>
                    <li>
                      <Link to="women_sleepwear">Sleepwear</Link>
                    </li>
                  </ul>
                  <Link to="kids">Kids</Link>
                  <ul className="dk_mf2_58">
                    <li>
                      <Link to="kids_boys">Boys Clothing</Link>
                    </li>
                    <li>
                      <Link to="kids_girls">Girls Clothing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-9 dk_mf2_23">
            <Link to="/">
              <img src={image} className="dk_mf2_32" />
            </Link>
          </div>
          <div className="col-xs-1 dk_mf2_24">
            <a
              className="dk_mf2_33 dropbtn_dk1"
              data-toggle="modal"
              data-target="#login"
            >
              <i
                data-toggle="modal"
                data-target="#login1"
                className="fas fa-user user"
              >
                <span className="dk_mf2_34" />
              </i>
            </a>
          </div>
          <div className="col-xs-1 dk_mf2_25">
            <Link to="cart" className="dk_mf2_36">
              <i id="cart" className="fas fa-shopping-cart dk_mf2_35">
                <span className="dk_mf2_35plus">{this.props.items}</span>
              </i>
            </Link>
          </div>
        </div>
        <div className="dk_mf2_21_a">
          <div className="col-xs-9 dk_mf2_41">
            <input
              type="text"
              className="dk_mf2_42 website_search"
              placeholder="Search..."
            />
          </div>
          <div className="col-xs-3 dk_mf2_43">
            <input
              type="submit"
              className="dk_mf2_44 website_search_btn"
              value="Search"
            />
          </div>
        </div>
      </div>,
      <div className="container-fluid dk_mf2_1">
        <div className="dk_mf2_81">
          <ul className="dk_mf2_82">
            <li className="dk_mf2_83">
              <Link to="/" className="dk_mf2_84">
                100% buyer protection | Free Shipping above INR 999
              </Link>
            </li>
          </ul>
          <ul className="dk_mf2_82 dk_mf2_85">
            <li className="dk_mf2_83">
              <a
                className="dk_mf2_84"
                data-toggle="modal"
                data-target="#login1"
              >
                Sign In
              </a>
              <a
                data-toggle="modal"
                data-target="#register1"
                className="dk_mf2_84"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        <div className="dk_mf2_2">
          <div className="dk_mf2_3 logo">
            <Link to="/">
              <img src={image} className="dk_mf2_4" />
            </Link>
          </div>
          <div className="dk_mf2_5">
            <div className="dk_mf2_6 search_input">
              <input
                type="text"
                id="SearchQuery"
                className="dk_mf2_8 website_search"
                placeholder="Search..."
              />
            </div>
            <div className="dk_mf2_7 serach_button">
              <input
                type="submit"
                className="dk_mf2_11 website_search_btn"
                value="Search"
              />
            </div>
          </div>
          <div className="dk_mf2_15 cart-button">
            <Link to="cart" className="dk_mf2_16">
              <i id="cart" className="fas fa-shopping-cart fa-2x dk_mf2_17">
                <span className="dk_mf2_18plus">{this.props.items}</span>
              </i>
            </Link>
          </div>
        </div>
        <div className="dk_mf2_51">
          <nav className="dk_mf2_55">
            <ul className="dk_mf2_56">
              <li>
                <Link to="men">Men</Link>
                <ul className="dk_mf2_58">
                  <li>
                    <Link to="men_topwear">Top Wear</Link>
                  </li>
                  <li>
                    <Link to="men_bottomwear">Bottom Wear</Link>
                  </li>
                  <li>
                    <Link to="men_ethnicwear">Ethnic Wear</Link>
                  </li>
                  <li>
                    <Link to="men_jackets">Jackets</Link>
                  </li>
                  <li>
                    <Link to="men_innerwear">Inner Wear</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="women">Women</Link>
                <ul className="dk_mf2_58">
                  <li>
                    <Link to="women_westernwear">Western Wear</Link>
                  </li>
                  <li>
                    <Link to="women_indianwear">Indian Wear</Link>
                  </li>
                  <li>
                    <Link to="women_activewear">Active Wear</Link>
                  </li>
                  <li>
                    <Link to="women_sleepwear">Sleepwear</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="kids">Kids</Link>
                <ul className="dk_mf2_58">
                  <li>
                    <Link to="kids_boys">Boys Clothing</Link>
                  </li>
                  <li>
                    <Link to="kids_girls">Girls Clothing</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      // <Cards handler={handler.bind(this)} />
    ];
  }
}
