import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google_brand" />
      </div>
      <div>
        <img src={slack} alt="slack_brand" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian_brand" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox_brand" />
      </div>
      <div>
        <img src={shopify} alt="shopify_brand" />
      </div>
    </div>
  );
};

export default brand;
