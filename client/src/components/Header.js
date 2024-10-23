import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Header() {
    
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

      ScrollReveal().reveal(".reveal__bottom__interval", {
        origin: "bottom",
        interval: 300,
        duration: 3000,
        reset: false,
        easing: "ease-in-out",
      });
    }, []);

    return (
      <div className="Ctn Relative Screen">
        <img
          className="BgImage"
          src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167370/Quinn%20Daisies%20Tech/10016587_27264_vcswze.jpg"
          alt="Quinn Daisies Images"
        />

        <div className="Absolute Overlay ColumnFlex Width-100">
          <div className="HeaderContent ColumnRight ContentWidth-70 TextColorWhite">
            <h2 className="reveal__left">Your Trusted Partner in Digital Innovation and Success</h2>
            <p className="reveal__right">
              we transform your ideas into cutting-edge digital solutions. Our
              core services—Software Development, Web Development, and SEO—are
              designed to help businesses thrive in the digital age. We blend
              innovation with expertise to deliver exceptional results for your
              business.
            </p>
            <a className="Btn reveal__bottom" href="/Services">
              Explore Our Services
            </a>
          </div>

          <div className="HeaderBoxContainer">
            <div className="HeaderBox reveal__bottom__interval">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729176393/Quinn%20Daisies%20Tech/Engineering_1_n3nkm8.png"
                alt="Quinn Daisies Images"
              />

              <div className="HeaderBoxContent">
                <h2>Software Development</h2>
                <p>
                  We build powerful, scalable software solutions tailored to
                  your unique business needs.
                </p>
              </div>
            </div>

            <div className="HeaderBox reveal__bottom__interval">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729176414/Quinn%20Daisies%20Tech/Increase_3_b1w4au.png"
                alt="Quinn Daisies Images"
              />

              <div className="HeaderBoxContent">
                <h2>Search Engine Optimization</h2>
                <p>
                  Stand out from the competition with Quinn Daisies SEO
                  services.
                </p>
              </div>
            </div>

            <div className="HeaderBox reveal__bottom__interval">
              <img
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729268425/Quinn%20Daisies%20Tech/Link_edit_aarhne.png"
                alt="Quinn Daisies Images"
              />

              <div className="HeaderBoxContent">
                <h2>Backlink Services</h2>
                <p>
                  Improve your website's visibility with Quinn Daisies'
                  professional backlink services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}