import React, { Component } from "react";
import { Static } from "./Static.js";
import "./CSS/dkecs.css";
import "./CSS/style.css";
import "./CSS/theme.css";

export default class App extends Component {
  render() {
    return <Static url={this.props.route.url} crumb={this.props.route.crumb} />;
  }
}
