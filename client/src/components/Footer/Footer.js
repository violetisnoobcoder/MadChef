import React from "react";
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
            MadChef by Sikander, Nick & Ryan
          </section>
          <section className="footer-info__returns">
            Created in React
            <br />
            Bloomin Marvellous
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">madChef@madchef.com</section>
          <section className="footer-info__terms">
            <br />
            Copyright © 2022 Sikander, Nick & Ryan
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__contact">
            GitBub
            <br />
            Facebook
            <br />
            LinkedIn
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};

export default Footer;
