import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default function ServicesComponents() {
  
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
    <div className="Ctn" style={{ backgroundColor: "#000010" }}>
      <div className="CenterHeader">
        <h2 className="reveal__left">Our Services</h2>
        <p className="reveal__right">
          We offer a comprehensive suite of services designed to drive your
          business forward in the digital landscape.
        </p>
      </div>

      <div className="Ctn">
        <div className="RowFlex Screen-Size">
          <div className="Ctn GridBox Radius-10 BoxShadow HoverAnimation reveal__left">
            <img
              className="GridImage"
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167342/Quinn%20Daisies%20Tech/12812916_5075841_k8mxh3.jpg"
              alt="Quinn Daisies Images"
            />

            <div className="GridBoxContent">
              <h2>Software Development</h2>
              <p>
                We specialize in developing cutting-edge software solutions that
                drive innovation and efficiency across industries.
              </p>
            </div>

            <a
              className="GridBtn"
              href="/Services"
              style={{ backgroundColor: "#000010" }}
            >
              Learn More
              <img
                className="GridBtnImage"
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729266386/Quinn%20Daisies%20Tech/Scroll_Down_hnmhhl.png"
                alt="Quinn Daisies Images"
              />
            </a>
          </div>

          <div className="Ctn GridBox Radius-10 BoxShadow HoverAnimation reveal__bottom">
            <img
              className="GridImage"
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167378/Quinn%20Daisies%20Tech/person-wearing-high-tech-vr-glasses-while-surrounded-by-bright-blue-neon-colors_1_vneqmw.jpg"
              alt="Quinn Daisies Images"
            />

            <div className="GridBoxContent Overlay">
              <span>
                Improve your website's visibility with Quinn Daisies'
                professional backlink services.
              </span>
            </div>

            <a
              className="GridBtn"
              href="/Services"
              style={{ backgroundColor: "#000010" }}
            >
              Learn More
              <img
                className="GridBtnImage"
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729266386/Quinn%20Daisies%20Tech/Scroll_Down_hnmhhl.png"
                alt="Quinn Daisies Images"
              />
            </a>
          </div>

          <div className="Ctn GridBox Radius-10 BoxShadow HoverAnimation reveal__right">
            <img
              className="GridImage"
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729267604/Quinn%20Daisies%20Tech/6524364_3306567_kwjagq.jpg"
              alt="Quinn Daisies Images"
            />

            <div className="GridBoxContent">
              <text>WITH YEARS OF EXPERIENCE</text>
              <p>
                we ensure your website ranks higher in search engines and
                connects with the right audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
