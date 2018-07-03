import React, { Component } from "react";
import { Link } from "react-router";
import "./CSS/dkecs.css";
import "./CSS/style.css";
import "./CSS/theme.css";

export class Crumbs extends Component {
  render() {
    if (this.props.crumb.indexOf("/") > -1) {
      var temp = this.props.crumb.split("/");
      return [
        <nav class="mycrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={temp[0].toLowerCase()}>{temp[0]}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {temp[1]}
            </li>
          </ol>
        </nav>
      ];
    } else {
      return [
        <nav class="mycrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {this.props.crumb}
            </li>
          </ol>
        </nav>
      ];
    }
  }
}
