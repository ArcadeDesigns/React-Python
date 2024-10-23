import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesComponents from "./components/ServicesComponents";
import BannerSection from "./components/BannerSection";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "scrollreveal";

export default function About() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal__bottom", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Quinn Daisies</title>
        <meta
          name="description"
          content="Learn about Quinn Daisies, a leading tech company providing innovative development, design, and solutions. Discover our mission, values, and expertise in crafting stunning websites and digital solutions."
        />
        <link rel="canonical" href="https://www.quinndaisies.com/about" />
        <link rel="og:canonical" href="https://www.quinndaisies.com/about" />

        <meta property="og:title" content="About Quinn Daisies | Innovative Tech Solutions" />
        <meta
          property="og:description"
          content="Discover Quinn Daisies, your partner for innovative web development and design. Learn about our mission, values, and how we deliver cutting-edge technology solutions."
        />
        <meta property="og:url" content="https://www.quinndaisies.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167369/Quinn%20Daisies%20Tech/171915401_cc953eee-2187-4fa0-8016-0eab11257f2e_kjhhyt.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Quinn Daisies | Innovative Tech Solutions" />
        <meta
          name="twitter:description"
          content="Explore Quinn Daisies' commitment to delivering innovative web development and design solutions. Learn about our expertise and client-centric approach."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167369/Quinn%20Daisies%20Tech/171915401_cc953eee-2187-4fa0-8016-0eab11257f2e_kjhhyt.jpg"
        />

        <meta
          name="keywords"
          content="Quinn Daisies, web development, web design, innovative solutions, tech company, digital solutions, custom websites, business growth"
        />
        <meta
          name="og:keywords"
          content="Quinn Daisies, web development, innovative solutions, tech company, digital transformation"
        />

        <meta name="author" content="Quinn Daisies Tech Team" />
        <meta name="revised" content="2024-03-18" /> {/* Update this date as needed */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <div className="Ctn Screen-sm Relative">
        <img
          className="BgImage"
          src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167369/Quinn%20Daisies%20Tech/171915401_cc953eee-2187-4fa0-8016-0eab11257f2e_kjhhyt.jpg"
          alt="Quinn Daisies Images"
        />

        <div className="Absolute Overlay ColumnFlex Width-100">
          <div className="HeaderContent ColumnRight ContentWidth-70 TextColorWhite">
            <h2>Innovative Development, Design, and Solutions</h2>
            <p>
              Our team of expert developers and designers is dedicated to
              crafting visually stunning and highly functional websites that
              align with your business goals. We combine creativity and
              technical precision to deliver solutions that not only look
              exceptional but also drive meaningful results.
            </p>

            <a className="Btn" href="/services">
              Learn More About Our Services
            </a>
          </div>
        </div>
      </div>

      <ServicesComponents />

      <div
        className="Ctn RowFlex TopSpacing-10"
        style={{ backgroundColor: "#000010" }}
      >
        <div className="UniqueImageCtn reveal__left">
          <img
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167367/Quinn%20Daisies%20Tech/cyberpunk-illustration-with-futuristic-technology-bright-neon-lights_jkgcfs.jpg"
            alt="Quinn Daisies Images"
          />
        </div>

        <div className="UniqueTextCtn reveal__right">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide innovative and tailored solutions to meet
            the diverse needs of our clients. We strive to deliver cutting-edge
            technology and design that not only enhance user experience but also
            drive business growth and success.
          </p>

          <div className="UniqueGrid reveal__right">
            <div className="UniqueGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729357331/Quinn%20Daisies%20Tech/Innovation_1_cdn5rg.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Innovation</h2>
                <p>
                  Continuously evolving our solutions to stay ahead in a rapidly
                  changing technological environment.
                </p>
              </div>
            </div>

            <div className="UniqueGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729357349/Quinn%20Daisies%20Tech/Scales_rg5soh.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Integrity</h2>
                <p>
                  Conducting business with the highest ethical standards and
                  transparency.
                </p>
              </div>
            </div>

            <div className="UniqueGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729357378/Quinn%20Daisies%20Tech/Good_Quality_1_gk4bmj.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Client Success</h2>
                <p>
                  Focusing on long-term partnerships, where client satisfaction
                  and success are at the heart of our operations.
                </p>
              </div>
            </div>

            <div className="UniqueGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729357396/Quinn%20Daisies%20Tech/Collaboration_1_slxzwt.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Collaboration</h2>
                <p>
                  Working hand-in-hand with clients to create solutions that
                  meet their exact needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Ctn RowFlex TopSpacing-10"
        style={{ backgroundColor: "#000010" }}
      >
        <div className="UniqueReverseTextCtn reveal__right">
          <h2>Why Choose Quinn Daisies?</h2>
          <p>
            To be a global leader in delivering transformative technology
            solutions that help businesses achieve excellence in the digital
            world.
          </p>

          <div className="UniqueReverseGrid reveal__right">
            <div className="UniqueReverseGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729359571/Quinn%20Daisies%20Tech/Development_Skill_plgnll.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Proven Expertise</h2>
                <p>
                  We bring years of experience in developing technology
                  solutions that solve complex business challenges across
                  industries.
                </p>
              </div>
            </div>

            <div className="UniqueReverseGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729359591/Quinn%20Daisies%20Tech/Idea_Sharing_iuvdlg.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Tailored Solutions</h2>
                <p>
                  We customize every project to meet your specific needs and
                  objectives, ensuring a solution that aligns perfectly with
                  your goals.
                </p>
              </div>
            </div>

            <div className="UniqueReverseGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729359613/Quinn%20Daisies%20Tech/Project_Management_qkn53f.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Innovative Approaches</h2>
                <p>
                  We stay at the forefront of technology, incorporating the
                  latest advancements in AI, automation, and cloud computing
                  into our offerings.
                </p>
              </div>
            </div>

            <div className="UniqueReverseGridBox">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729359628/Quinn%20Daisies%20Tech/Client_Management_wyeplu.png"
                alt="Quinn Daisies Images"
              />

              <div className="UniqueGridBoxItem">
                <h2>Client-Centric Focus</h2>
                <p>
                  Your success is our priority. We pride ourselves on delivering
                  measurable results that drive value for your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="UniqueReverseImageCtn reveal__left">
          <img
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167366/Quinn%20Daisies%20Tech/176818_nj2lt6.jpg"
            alt="Quinn Daisies Images"
          />
        </div>
      </div>

      <BannerSection />
      <Footer />
    </>
  );
}
