import React from "react";
import hero_img from "../../assets/hero-image.png";
import short from "../../assets/short-image.png";

function Hero() {
  return (
    <div>
      <div className="hero_left">
        <div class="text">
          <div className="title">Jobs Made Simple Dreams Made Real</div>
          <div className="description">
            The mission of transforming aspirations into tangible achievements
            through streamlined employment processes and opportunities.
          </div>
        </div>
        <div className="searchbar">
          <div>job title</div>
          <div>organization type</div>
          <div>location</div>
          <div>fond job</div>
        </div>
        <div className="hero_footer">
          <div className="professoinals">
            <div class="images">
              <img src={short} alt="people" />
            </div>
            <div>
              <div>25k+</div>
              <div>professionals</div>
            </div>
          </div>
          <div className="watchvideo">
            <div class="video_icon">
              <img src="/video_icon.png" alt="video icon" />
            </div>
            <div className="video_text">Watch Video</div>
          </div>
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_img} alt="hero" className="hero_img" />
      </div>
    </div>
  );
}

export default Hero;
