import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a
          href="/"
          className="footerLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          MadChef
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            MadChef by <a href="https://github.com/sikandersultan">Sikander</a>,{" "}
            <a href="https://github.com/nkc27">Nick</a> &{" "}
            <a href="https://github.com/Ryocon">Ryan</a>
          </section>
          <section className="footer-info__returns">MERN Application</section>
        </section>
        <section className="footer-info-center">
          {/* <section className="footer-info__email">info@madchef.com</section> */}
          <section className="footer-info__terms">
            <br />
            Copyright © 2022 Sikander, Nick & Ryan
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__contact">
            <a href="https://instagram.com" className="socialIcons">
              <InstagramIcon sx={{ fontSize: 50 }} />
            </a>
            <a href="https://twitter.com" className="socialIcons">
              <TwitterIcon sx={{ fontSize: 50 }} />
            </a>
            <a href="https://facebook.com" className="socialIcons">
              <FacebookIcon sx={{ fontSize: 50 }} />
            </a>
            <a href="https://youtube.com" className="socialIcons">
              <YouTubeIcon sx={{ fontSize: 50 }} />
            </a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};

export default Footer;
