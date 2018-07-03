import React, { Component } from "react";
import { Navbar } from "./Navbar.js";
import { Link } from "react-router";
import { Footer } from "./Footer.js";

import "./CSS/dkecs.css";
import "./CSS/style.css";
import "./CSS/theme.css";

const setData = (
  prodId,
  title,
  imageUrl,
  imageUrlMed,
  mrp,
  sellingPrice,
  discount,
  description,
  productUrl,
  productBrand,
  sellerName,
  sellerAverageRating
) => {
  window.productID = prodId;
  window.title = title;
  window.imageUrl = imageUrl;
  window.imageUrlMed = imageUrlMed;
  window.mrp = mrp;
  window.sellingPrice = sellingPrice;
  window.discount = discount;
  window.description = description;
  window.productUrl = productUrl;
  window.productBrand = productBrand;
  window.sellerName = sellerName;
  window.sellerAverageRating = sellerAverageRating;
};

const Card = ({
  prodId,
  title,
  imageUrl,
  imageUrlMed,
  mrp,
  sellingPrice,
  discount,
  handleClick,
  description,
  productUrl,
  productBrand,
  sellerName,
  sellerAverageRating
}) => {
  // setID();
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 dk_mf2_153">
      <div className="col-xs-12 dk_mf2_154">
        <div className="col-xs-12 dk_mf2_156">
          {/* <Link to="product" className="dk_mf2_155"> */}
          <Link
            to="product"
            className="dk_mf2_155"
            onClick={() =>
              setData(
                { prodId },
                { title },
                { imageUrl },
                { imageUrlMed },
                { mrp },
                { sellingPrice },
                { discount },
                { description },
                { productUrl },
                { productBrand },
                { sellerName },
                { sellerAverageRating }
              )
            }
          >
            <div className="dk_mf2_157">
              <img src={imageUrl} className="dk_mf2_158 img-responsive" />
            </div>
            <div className="dk_mf2_159">
              <span className="dk_mf2_160">{title}</span>
            </div>
            <div className="dk_mf2_163">
              <span className="dk_mf2_164">Rs. {sellingPrice}</span>
              <span className="dk_mf2_165">Rs. {mrp}</span>
              <span className="dk_mf2_166">({discount.toFixed(0)}% OFF)</span>
            </div>
          </Link>
          {/* </Link> */}
          <div className="text-center">
            <button
              id={prodId}
              onClick={handleClick}
              type="button"
              className="btn btn-outline-danger"
            >
              ADD TO <i id="btncart" className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    };
  }
  addToCart = prodId => {
    var description;
    var imageUrlStr;
    var mrp;
    var productBrand;
    var productId;
    var productUrl;
    var sellerAverageRating;
    var sellerName;
    var sellerNoOfRatings;
    var sellerNoOfReviews;
    var sellingPrice;
    var title;
    for (let i in this.state.data) {
      if (this.state.data[i]["productId"] == prodId) {
        description = this.state.data[i]["description"];
        imageUrlStr = this.state.data[i]["imageUrlStr"].split(";")[1];
        mrp = this.state.data[i]["mrp"];
        productBrand = this.state.data[i]["productBrand"];
        productId = this.state.data[i]["productId"];
        productUrl = this.state.data[i]["productUrl"];
        sellerAverageRating = this.state.data[i]["sellerAverageRating"];
        sellerName = this.state.data[i]["sellerName"];
        sellerNoOfRatings = this.state.data[i]["sellerNoOfRatings"];
        sellerNoOfReviews = this.state.data[i]["sellerNoOfReviews"];
        sellingPrice = this.state.data[i]["sellingPrice"];
        title = this.state.data[i]["title"];
        break;
      }
    }
    var obj = {
      description: description,
      imageUrlStr: imageUrlStr,
      mrp: mrp,
      productBrand: productBrand,
      productId: prodId,
      productUrl: productUrl,
      sellerAverageRating: sellerAverageRating,
      sellerName: sellerName,
      sellerNoOfRatings: sellerNoOfRatings,
      sellerNoOfReviews: sellerNoOfReviews,
      sellingPrice: sellingPrice,
      title: title
    };
    var newArray;
    newArray = this.state.cart.slice();
    newArray.push(obj);
    this.setState({ cart: newArray }, () => {
      var json = JSON.stringify(this.state.cart);
      localStorage.setItem("cart", json);
      var obj1 = JSON.parse(localStorage.getItem("cart"));
      var e = this.props.items + 1;
      this.props.handler(e);
    });
  };
  componentDidMount() {
    var url = this.props.url;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        var key;
        var newArray = [];
        for (key in response) {
          if (response.hasOwnProperty(key)) {
            newArray.push(response[key]);
          }
        }
        this.setState({ data: newArray }, () => {
          // console.log(this.state.data);
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      var url = this.props.url;
      fetch(url)
        .then(response => response.json())
        .then(response => {
          var key;
          var newArray = [];
          for (key in response) {
            if (response.hasOwnProperty(key)) {
              newArray.push(response[key]);
            }
          }
          this.setState({ data: newArray }, () => {
            // console.log(this.state.data);
          });
        });
    }
  }
  renderProducts = () => {
    const elements = [];
    if (this.state.data == 0) {
      return elements;
    } else {
      for (let index in this.state.data) {
        let disc =
          ((this.state.data[index]["mrp"] -
            this.state.data[index]["sellingPrice"]) /
            this.state.data[index]["mrp"]) *
          100;
        elements.push(
          <div key={index}>
            <Card
              prodId={this.state.data[index]["productId"]}
              title={this.state.data[index]["title"]}
              imageUrl={this.state.data[index]["imageUrlStr"].split(";")[0]}
              imageUrlMed={this.state.data[index]["imageUrlStr"].split(";")[1]}
              mrp={this.state.data[index]["mrp"]}
              sellingPrice={this.state.data[index]["sellingPrice"]}
              discount={disc}
              handleClick={() =>
                this.addToCart(this.state.data[index]["productId"])
              }
              description={this.state.data[index]["description"]}
              productUrl={this.state.data[index]["productUrl"]}
              productBrand={this.state.data[index]["productBrand"]}
              sellerName={this.state.data[index]["sellerName"]}
              sellerAverageRating={
                this.state.data[index]["sellerAverageRating"]
              }
            />
          </div>
        );
      }
    }
    return elements;
  };
  render() {
    // this.display();
    return [
      <div className="container-fluid dk_mf2_151">
        <div className="container dk_mf2_152">{this.renderProducts()}</div>
      </div>
    ];
  }
}

export class Product extends Component {
  addToCarts = () => {
    var prodId = window.productID.prodId;
    var title = window.title.title;
    var image = window.imageUrl.imageUrl;
    var mrp = window.mrp.mrp;
    var sellingPrice = window.sellingPrice.sellingPrice;
    var discount = window.discount.discount;
    var description = window.description.description;
    var productUrl = window.productUrl.productUrl;
    var productBrand = window.productBrand.productBrand;
    var sellerName = window.sellerName.sellerName;
    var sellerRating = window.sellerAverageRating.sellerAverageRating;
    var obj = {
      description: description,
      imageUrlStr: image,
      mrp: mrp,
      productBrand: productBrand,
      productId: prodId,
      productUrl: productUrl,
      sellerAverageRating: sellerRating,
      sellerName: sellerName,
      sellingPrice: sellingPrice,
      title: title
    };
    var newArray = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    newArray.push(obj);
    var json = JSON.stringify(newArray);
    localStorage.setItem("cart", json);
    var x = this.state.count + 1;
    this.setState({
      count: x
    });
  };

  state = {
    count: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0
  };
  render() {
    if (window.productID == undefined) {
      return <h3>kucho</h3>;
    } else {
      return [
        <Navbar items={this.state.count} />,
        <div id="product-div">
          <div className="product-image">
            <img
              src={window.imageUrlMed.imageUrlMed}
              className="dk_mf2_158 img-responsive"
            />
          </div>
          <div id="product-data">
            <h1>{window.title.title}</h1>
            <h3>
              <span class="product-head">Brand:- </span>
              {window.productBrand.productBrand}
            </h3>
            <h4>
              <span class="product-head">Seller:- </span>
              {window.sellerName.sellerName} ({
                window.sellerAverageRating.sellerAverageRating
              }/5)
            </h4>
            <br />
            <span id="product-mrp">Rs. {window.mrp.mrp}</span>
            <span id="product-sp">
              &nbsp;&nbsp;Rs. {window.sellingPrice.sellingPrice}&nbsp;&nbsp;
            </span>
            <span id="product-disc">
              {window.discount.discount.toFixed(0)}% OFF
            </span>
            <br />
            <br />
            <p>{window.description.description}</p>
            <a href={window.productUrl.productUrl} className="btn btn-success">
              View On Flipkart
            </a>&nbsp;&nbsp;&nbsp;
            <button
              id={window.productId}
              onClick={() => {
                this.addToCarts();
              }}
              type="button"
              className="btn btn-outline-danger"
            >
              ADD TO <i id="btncart" className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>,
        <Footer />
      ];
    }
  }
}
