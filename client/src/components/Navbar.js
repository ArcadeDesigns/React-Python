import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  };

  return (
    <>
      <div className={`navCtn ${isMenuOpen ? "active" : ""}`}>
        <div className="navLogo">
          <a href="/home">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
              alt="Quinn Daisies Images"
            />
          </a>
        </div>

        <nav className="navLinks">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/services">Our Services</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>

          <li>
            <div className="openMenuBtn" onClick={toggleMenu}>
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729544556/Quinn%20Daisies%20Tech/Menu_5_dqfetg.png"
                alt="Open Menu"
              />
            </div>
          </li>
        </nav>

        <div className="responsiveOpenMenuBtn" onClick={toggleResponsiveMenu}>
          <img
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729544556/Quinn%20Daisies%20Tech/Menu_5_dqfetg.png"
            alt="Open menu"
          />
        </div>
      </div>

      <div className={`slideInNavigation ${isMenuOpen ? "active" : ""}`}>
        <img
          className="closeBtn"
          src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729543690/Quinn%20Daisies%20Tech/Close_5_a8rfds.png"
          alt="Close Menu"
          onClick={toggleMenu}
        />

        <div className="slideInNavigationContainer">
          <div className="slideInNavSection">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542719/Quinn%20Daisies%20Logistics/24177_szucic.jpg"
              alt="Quinn Daisies Images"
            />

            <div className="slideInNavContent">
              <h1>Logistics</h1>
              <p>
                We offer comprehensive logistics services, including
                transportation, warehousing, and supply chain management. Our
                team ensures efficient and reliable delivery of goods and
                materials, optimizing your supply chain for maximum efficiency.
              </p>

              <a className="Btn" href="https://logistics.quinndaisies.com/">
                Explore Our Logistics Services
              </a>
            </div>
          </div>

          <div className="slideInNavSection">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167388/Quinn%20Daisies%20Tech/person-wearing-high-tech-vr-glasses-while-surrounded-by-bright-blue-neon-colors_2_w4f91y.jpg"
              alt="Quinn Daisies Images"
            />

            <div className="slideInNavContent">
              <h1>Applications</h1>
              <p>
                Discover our suite of cutting-edge PaaS and SaaS solutions
                designed to streamline your business operations. From
                cloud-based productivity tools to advanced analytics platforms,
                our applications empower your team to work smarter and more
                efficiently.
              </p>

              <a className="Btn" href="/applications">
                Explore Our Applications
              </a>
            </div>
          </div>

          <div className="slideInNavSection">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729544963/Quinn_Daisies_Blog/man-using-laptop-with-words-it_1030879-10055_isrbcs.jpg"
              alt="Quinn Daisies Images"
            />

            <div className="slideInNavContent">
              <h1>Backlink Services</h1>
              <p>
                Boost your website's authority and search engine rankings with
                our professional backlink services. Our platform connects you
                with high-quality websites for guest posting opportunities,
                helping you build a strong and diverse backlink profile.
              </p>

              <a className="Btn" href="/backlink-services">
                Start Guest Posting
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`responsiveNavigationScreen ${
          isResponsiveMenuOpen ? "active" : ""
        }`}
      >
        <div className="responsiveNavigationScreenContainer">
          <div
            className="responsiveOpenMenuBtn"
            id="closeresponsivemenu"
            onClick={toggleResponsiveMenu}
          >
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729543690/Quinn%20Daisies%20Tech/Close_5_a8rfds.png"
              alt="Close menu"
            />
          </div>

          <a className="Btn Default-Width" href="/home">
            Home
          </a>

          <a className="Btn Default-Width" href="/about">
            About us
          </a>

          <a className="Btn Default-Width" href="/services">
            Our Services
          </a>

          <a className="Btn Default-Width" href="/contact-us">
            Contact us
          </a>

          <a className="Btn Default-Width" href="/contact-us">
            Logistics Services
          </a>

          <a className="Btn Default-Width" href="/contact-us">
            Backlink Services
          </a>

          <a className="Btn Default-Width" href="/contact-us">
            Quinn Daisies Applications
          </a>
        </div>
      </div>
    </>
  );
}
