import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="description">
          <div className="title">
            <img src="/footerLogo.png" alt="" />
            jobintro
          </div>
          <div className="desc">
            Excellent resource for job seekers that have a strong interest in
            startups. It's easier to land your ideal job.
          </div>
        </div>
        <div className="links">
          <div className="about">
            <ul>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
            </ul>
          </div>
          <div className="resources">
            <ul>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
              <li>companies</li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <div>
            <div className="title">subscribe</div>
            <div className="desc">
              Subscribe to our newsletter to get the latest updates.
            </div>
          </div>

          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <div className="footer_text">© 2025 JobInto. All rights reserved.</div>
        <ul className="footer_links">
          <li>
            <a href="/fb">facebook</a>
          </li>
          <li>
            <a href="/insta">instagram</a>
          </li>
          <li>
            <a href="/x">x</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
