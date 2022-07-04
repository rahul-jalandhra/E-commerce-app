import React, { Component } from "react";

import "./footer.css";

import paypal from "../../assets/Paypal.svg";
import visa from "../../assets/visa.svg";
import master from "../../assets/master_card.svg";
import western from "../../assets/Western_union.svg";

export default class Footer extends Component {
  social = [
    {
      title: "iSHOP",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Follow Us",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Contact Us",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  links = [
    {
      title: "Information",
      aboutus: "About Us",
      information: "Information",
      privacyPolicy: "Privacy Policy",
      termCondition: "Term & Conditions",
    },
    {
      title: "Extras",
      aboutus: "About Us",
      information: "Information",
      privacyPolicy: "Privacy Policy",
      termCondition: "Term & Conditions",
    },
    {
      title: "Services",
      aboutus: "About Us",
      information: "Information",
      privacyPolicy: "Privacy Policy",
      termCondition: "Term & Conditions",
    },
    {
      title: "Offers",
      aboutus: "Sales",
      information: "Festival Offer",
      privacyPolicy: "Credit Card Offer",
      termCondition: "Buy 1, Get 1 free",
    },
  ];
  paycards = [
    { card: paypal },
    { card: visa },
    { card: master },
    { card: western },
  ];
  render() {
    return (
      <>
        <div className="footer-container">
          <div className="social-container">
            {this.social.map((item) => {
              return (
                <div className="social-links">
                  <div className="social-title">{item.title}</div>
                  <div className="social-description">{item.description}</div>
                </div>
              );
            })}
          </div>
          <div className="links-container">
            {this.links.map((item) => {
              return (
                <div className="links">
                  <div className="links-title">{item.title}</div>
                  <div className="other-links">
                    <div>{item.aboutus}</div>
                    <div>{item.information}</div>
                    <div>{item.privacyPolicy}</div>
                    <div>{item.termCondition}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="payment-cards">
          {this.paycards.map((item) => {
            return (
              <>
                <img src={item.card} alt="card" />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
