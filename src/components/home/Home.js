import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Card from "../card/Card";

import Iphone from "../../assets/iPhone6.png";
import shipping from "../../assets/shipping.svg";
import refund from "../../assets/refund.svg";
import support from "../../assets/support.svg";
import arrow_back from "../../assets/arrow_back.svg";
import arrow_forward from "../../assets/arrow_forward.svg";

import "./home.css";
import Banner2 from "../banner2/Banner2";
import ListCard from "../listCard/ListCard";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loadMore: {
        height: 350,
        text: "Load More",
        overflow: "hidden",
      },
      inputVal: "",
      product: this.product,
      swipe: "0px",
    };
  }
  product = [
    {
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg",
      title: "Apple MacBook Air",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UL320_.jpg",
      title: "Apple iPhone 13 Pro Max",
      offeredPrice: "$399",
      actualPrice: "$599",
    },
    {
      image: "https://m.media-amazon.com/images/I/71Tlukf9FTL._AC_UY218_.jpg",
      title: "Apple Watch Series 7",
      offeredPrice: "$299",
      actualPrice: "$499",
    },
    {
      image: "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg",
      title: "Apple AirPods",
      offeredPrice: "$249",
      actualPrice: "$499",
    },
    {
      image: "https://m.media-amazon.com/images/I/71umlOrdukL._AC_UY218_.jpg",
      title: "Apple MacBook Fujitsu UH-X",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/61YldGHdqCL._AC_UY218_.jpg",
      title: "Apple MacBook Air",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_UY218_.jpg",
      title: "Apple MacBook 2021",
      offeredPrice: "$499",
      actualPrice: "$699",
    },
    {
      image: "https://m.media-amazon.com/images/I/619m8rLBQSL._AC_UY218_.jpg",
      title: "Apple iPhone 15 Pro",
      offeredPrice: "$399",
      actualPrice: "$699",
    },
  ];
  shippingSupport = [
    {
      image: shipping,
      title: "FREE SHIPPING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      image: refund,
      title: "100% REFUND",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      image: support,
      title: "SUPPORT 24/7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  handleOverflow = () => {
    if (this.state.loadMore.height === 350) {
      this.setState({
        loadMore: {
          height: 750,
          text: "See Less",
        },
      });
    } else {
      this.setState({
        loadMore: {
          height: 350,
          text: "Load More",
          overflow: "hidden",
        },
      });
    }
  };
  handleSearch = (e) => {
    this.setState({
      inputVal: e.target.value,
      product: this.product.filter((item) =>
        item.title.toLowerCase().match(this.state.inputVal)
      ),
    });
  };
  handleSwipe = () => {
    if (this.state.swipe === "0px") {
      this.setState({
        swipe: "100px",
      });
    } else {
      this.setState({
        swipe: "0px",
      });
    }
  };
  render() {
    return (
      <div>
        <Header
          product={this.product}
          search={this.handleSearch}
          handleHover={this.handleHover}
        />
        <div className="banner1">
          <img src={Iphone} alt="iphone" width={300} />
        </div>
        <div className="best-seller">
          <div className="best-seller-title">BEST SELLER</div>
          <ul className="best-seller-menu">
            <li>All</li>
            <li>Mac</li>
            <li>iPhone</li>
            <li>iPad</li>
            <li>iPod</li>
            <li>Accessories</li>
          </ul>
          <div
            className="card-container"
            style={{
              height: this.state.loadMore.height,
              overflowY: this.state.loadMore.overflow,
            }}
          >
            {this.state.product.map((item, index) => {
              return (
                <>
                  <Card
                    image={item.image}
                    title={item.title}
                    offeredPrice={item.offeredPrice}
                    actualPrice={item.actualPrice}
                    key={index}
                  />
                </>
              );
            })}
          </div>
          <div className="load-more" onClick={this.handleOverflow}>
            {this.state.loadMore.text}
          </div>
        </div>
        <Banner2 width={300} height={"350px"} />
        <div className="shipping-support-container">
          {this.shippingSupport.map((item, index) => {
            return (
              <div className="shipping-support" key={index}>
                <div className="shipping-support-image">
                  <img src={item.image} alt="wait" />
                </div>
                <div className="shipping-support-title">{item.title}</div>
                <div className="shipping-support-description">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="featured-title">FEATURED PRODUCTS</div>
        <div className="featured-container">
          <div className="arrow">
            <img src={arrow_back} alt="arrow" />
          </div>
          <div
            className="featured-container2"
            style={{ transform: "translate(" + this.state.swipe + ")" }}
          >
            {this.product
              .filter((item) => item.offeredPrice <= "$399")
              .map((item, index) => {
                return (
                  <ListCard
                    key={index}
                    image={item.image}
                    offeredPrice={item.offeredPrice}
                    title={item.title}
                  />
                );
              })}
          </div>
          <div className="arrow">
            <img src={arrow_forward} alt="arrow" onClick={this.handleSwipe} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
