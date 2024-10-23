import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSection from "./components/BannerSection";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "scrollreveal";

export default function Service() {
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
        <title>
          Quinn Daisies Services | Innovative Software Development & Digital
          Solutions
        </title>
        <meta
          name="description"
          content="Explore Quinn Daisies' comprehensive suite of services including Software development, design, digital marketing, and custom software solutions. Drive your business forward with our innovative tech expertise."
        />
        <link rel="canonical" href="https://www.quinndaisies.com/services" />
        <link rel="og:canonical" href="https://www.quinndaisies.com/services" />
        <meta
          property="og:title"
          content="Quinn Daisies Services | Innovative Tech Solutions"
        />
        <meta
          property="og:description"
          content="Discover Quinn Daisies' range of services designed to elevate your digital presence. From cutting-edge Software development to strategic digital marketing, we offer tailored solutions for your business needs."
        />
        <meta
          property="og:url"
          content="https://www.quinndaisies.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quinn Daisies Services | Innovative Tech Solutions"
        />
        <meta
          name="twitter:description"
          content="Explore Quinn Daisies' comprehensive tech services. We offer expert Software development, stunning design, digital marketing, and custom software solutions to drive your business growth."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta
          name="keywords"
          content="Quinn Daisies services, Software development, Software design, digital marketing, custom software, UI/UX design, SEO optimization, e-commerce solutions, mobile app development"
        />
        <meta
          name="og:keywords"
          content="Quinn Daisies services, Software development, digital solutions, custom software, digital marketing"
        />
        <meta name="author" content="Quinn Daisies Tech Team" />
        <meta name="revised" content="2024-03-18" />{" "}
        {/* Update this date as needed */}
      </Helmet>

      <Navbar />

      <div className="Ctn Screen Relative">
        <img
          className="BgImage"
          src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729430689/Quinn%20Daisies%20Tech/14207109_SL_122319_26350_17_fqdywq.jpg"
          alt="Quinn Daisies Images"
        />

        <div className="Absolute Overlay ColumnFlex Width-100">
          <div className="UniqueServiceHeader">
            <h2 className="reveal__left">Innovative Solutions</h2>
            <p className="reveal__right">
              With expertise spanning across industries, we offer a consultative
              approach, working closely with each client to understand their
              unique challenges and goals, and crafting tailored solutions that
              align with their strategic objectives.
            </p>

            <a className="Btn" href="/contact-us">
              Want to know more? Click Here
            </a>
          </div>
        </div>
      </div>

      <div className="Ctn" style={{ backgroundColor: "#000010" }}>
        <div className="CenterHeader">
          <h2>Services We Can Help With</h2>
          <p>
            We provide a full range of tailored services designed to accelerate
            your business growth and enhance your presence in the digital
            landscape. From strategy to execution, we deliver solutions that
            empower success.
          </p>
        </div>

        <div className="Ctn GridLayout Screen-Size">
          <div className="Ctn GridBox Radius-10 BoxShadow Relative RowFlex ListAnimation reveal__left">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729417275/Quinn%20Daisies%20Tech/Circuit_nzyt1o.png"
              alt="Quinn Daisies Images"
            />

            <div className="ListAnimationContent">
              <h2>Software Development</h2>
              <p>
                From mobile applications to large-scale enterprise systems, we
                utilize cutting-edge development frameworks and cloud
                technologies to deliver secure, scalable, and high-performance
                applications tailored to your unique needs.
              </p>

              <a
                className="UniqueGridBtn"
                href="/services"
                style={{ backgroundColor: "#000010" }}
              >
                Visit Our Application Page
              </a>
            </div>
          </div>

          <div className="Ctn GridBox Radius-10 BoxShadow RowFlex ListAnimation reveal__left">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729417286/Quinn%20Daisies%20Tech/Delivery_mnjcrm.png"
              alt="Quinn Daisies Images"
            />

            <div className="ListAnimationContent">
              <h2>Logistics Solutions</h2>
              <p>
                Our logistics division also specializes in export services,
                providing tailored solutions to facilitate seamless
                international trade and support businesses in navigating the
                complexities of global markets.
              </p>

              <a
                className="UniqueGridBtn"
                href="/services"
                style={{ backgroundColor: "#000010" }}
              >
                Visit Our Logisitics Page
              </a>
            </div>
          </div>

          <div className="Ctn GridBox Radius-10 BoxShadow Relative RowFlex ListAnimation reveal__left">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729417303/Quinn%20Daisies%20Tech/Link_1_xgwyxs.png"
              alt="Quinn Daisies Images"
            />

            <div className="ListAnimationContent">
              <h2>Backlink Services</h2>
              <p>
                Our focus on securing high-quality backlink's from authoritative
                and reputable sources ensures long-term visibility and
                strengthens your competitive edge in the marketplace.
              </p>

              <a
                className="UniqueGridBtn"
                href="/services"
                style={{ backgroundColor: "#000010" }}
              >
                Sign up here
              </a>
            </div>
          </div>

          <div className="Ctn GridBox Radius-10 BoxShadow RowFlex ListAnimation reveal__left">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729417312/Quinn%20Daisies%20Tech/Increase_4_kscrna.png"
              alt="Quinn Daisies Images"
            />

            <div className="ListAnimationContent">
              <h2>Search Engine Optimization (SEO)</h2>
              <p>
                By combining on-page optimization, technical SEO, and targeted
                content marketing, we align your website with search engine
                algorithms to achieve long-term growth in visibility and user
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Ctn Screen-Size RowFlex"
        style={{ backgroundColor: "#000010" }}
      >
        <div className="Ctn ColumnFlex GeneralFlexText">
          <span>
            Explore the Full Potential of Our Software Development Solutions
          </span>
          <h2>Ready to Elevate Your Business?</h2>

          <div className="ServiceFooterBox">
            <div className="ServiceFooterContent Radius-10">
              <h3>Web Development</h3>
              <p>
                Involves building and maintaining websites or web applications
                that run in browsers and are accessible over the internet or an
                intranet.
              </p>
            </div>

            <div className="ServiceFooterContent Radius-10">
              <h3>Mobile App Development</h3>
              <p>
                Focuses on creating applications specifically designed for
                mobile devices like smartphones and tablets, typically for
                platforms such as iOS and Android.
              </p>
            </div>

            <div className="ServiceFooterContent Radius-10">
              <h3>Desktop Application Development</h3>
              <p>
                Involves building software applications that run on desktop or
                laptop computers, often using operating systems like Windows,
                macOS, or Linux.
              </p>
            </div>
          </div>
        </div>

        <div className="Ctn">
          <img
            className="GeneralImg Radius-10"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729430682/Quinn%20Daisies%20Tech/16358502_rm314-bb-009_nwzmcl.jpg"
            alt="Quinn Daisies Images"
          />
        </div>
      </div>

      <div
        className="Ctn Screen-Size RowFlex"
        style={{ backgroundColor: "#000010" }}
      >
        <div className="Ctn">
          <img
            className="GeneralImg Radius-10"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167410/Quinn%20Daisies%20Tech/person-wearing-high-tech-vr-glasses-while-surrounded-by-bright-blue-neon-colors_r5dibr.jpg"
            alt="Quinn Daisies Images"
          />
        </div>

        <div className="Ctn ColumnFlex GeneralFlexText">
          <span>
            Unlock the Full Potential of Our Software Development Expertise
          </span>
          <h2>Is Your Business Ready for the Next Level?</h2>
          <p>
            Harness the power of innovation and operational excellence with our
            advanced software development solutions. Whether your goal is to
            streamline workflows, elevate user experiences, or achieve scalable
            growth, our bespoke services are strategically crafted to meet your
            business objectives and deliver impactful, measurable outcomes.
          </p>

          <a className="Btn" href="/contact-us">
            Get Started Here!
          </a>
        </div>
      </div>

      <div className="Ctn" style={{ backgroundColor: "#000010" }}>
        <div className="CenterHeader">
          <h2>Our Unique Tech Stack</h2>
          <p>
            {" "}
            At Quinn Daisies, we leverage a diverse and cutting-edge technology
            stack to build innovative, scalable, and secure solutions. Our
            expertise spans the latest frameworks, programming languages, and
            cloud platforms, ensuring that your projects are powered by the most
            advanced tools and technologies available today.{" "}
          </p>
        </div>

        <div className="Ctn TechStack Screen-Size">
          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729539980/Quinn%20Daisies%20Tech/Python_6_sdxcck.png"
              alt="Quinn Daisies Images"
            />
            <p>Python</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540007/Quinn%20Daisies%20Tech/Nodejs_dckvw2.png"
              alt="Quinn Daisies Images"
            />
            <p>Node JS</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540001/Quinn%20Daisies%20Tech/JavaScript_2_afbcxy.png"
              alt="Quinn Daisies Images"
            />
            <p>JavaScript</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729539988/Quinn%20Daisies%20Tech/React_Native_u9li7r.png"
              alt="Quinn Daisies Images"
            />
            <p>React JS</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540022/Quinn%20Daisies%20Tech/MySQL_ev42mp.png"
              alt="Quinn Daisies Images"
            />
            <p>MySQL</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540020/Quinn%20Daisies%20Tech/SQL_ikthpg.png"
              alt="Quinn Daisies Images"
            />
            <p>SQLite</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540015/Quinn%20Daisies%20Tech/PostgreSQL_4_rt6utf.png"
              alt="Quinn Daisies Images"
            />
            <p>PostgreSQL</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540128/Quinn%20Daisies%20Tech/C_Sharp_Logo_2_l7mdxp.png"
              alt="Quinn Daisies Images"
            />
            <p>C Sharp</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540092/Quinn%20Daisies%20Tech/Bash_judzm3.png"
              alt="Quinn Daisies Images"
            />
            <p>BASH</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540075/Quinn%20Daisies%20Tech/Kotlin_omjqri.png"
              alt="Quinn Daisies Images"
            />
            <p>Kotlin</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540062/Quinn%20Daisies%20Tech/Docker_uktlaq.png"
              alt="Quinn Daisies Images"
            />
            <p>Docker Compose</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540037/Quinn%20Daisies%20Tech/Google_Cloud_plajtq.png"
              alt="Quinn Daisies Images"
            />
            <p>Google Cloud Service</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540054/Quinn%20Daisies%20Tech/Amazon_Web_Services_rakf1a.png"
              alt="Quinn Daisies Images"
            />
            <p>Amazon Web Service</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729540048/Quinn%20Daisies%20Tech/Azure_5_nhbe3w.png"
              alt="Quinn Daisies Images"
            />
            <p>Microsoft Azure</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729541028/Quinn%20Daisies%20Tech/Heroku_huqksl.png"
              alt="Quinn Daisies Images"
            />
            <p>Heroku</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729541121/Quinn%20Daisies%20Tech/Django_upyqoi.png"
              alt="Quinn Daisies Images"
            />
            <p>Python Django</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729541349/Quinn%20Daisies%20Tech/Flask_2_lxfuni.png"
              alt="Quinn Daisies Images"
            />
            <p>Python Flask</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729541327/Quinn%20Daisies%20Tech/GitHub_mmoywv.png"
              alt="Quinn Daisies Images"
            />
            <p>Git</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542316/Quinn%20Daisies%20Tech/Android_OS_x47pe7.png"
              alt="Quinn Daisies Images"
            />
            <p>Android OS</p>
          </div>

          <div className="TechStackBox">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542304/Quinn%20Daisies%20Tech/Firebase_u5kevm.png"
              alt="Quinn Daisies Images"
            />
            <p>Firebase</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
