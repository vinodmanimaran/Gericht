import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            At our restaurant, we believe in the power of food to bring people
            together and create memorable experiences. We believe in using only
            the freshest ingredients, prepared with care and attention to
            detail.We believe in providing exceptional service and creating an atmosphere
            that is warm, inviting, and welcoming to all. Above all, we believe in
            sharing our passion for food with each and every guest who walks
            through our doors.
          </p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Kevin</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
