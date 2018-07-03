import React, { Component } from "react";
import { Link } from "react-router";

import "./CSS/dkecs.css";
import "./CSS/style.css";
import "./CSS/theme.css";

import mens from "./images/mens.jpg";
import womens from "./images/womens.jpg";
import kids from "./images/kids.jpg";

export class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="men">
              <img className="d-block w-100" src={mens} alt="First slide" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="women">
              <img className="d-block w-100" src={womens} alt="Second slide" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="kids">
              <img className="d-block w-100" src={kids} alt="Third slide" />
            </Link>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
