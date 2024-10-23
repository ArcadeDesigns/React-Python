import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function BannerSection() {

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
    <div
      className="Ctn Screen-sm Screen-Size"
      style={{ backgroundColor: "#000010" }}
    >
      <div className="ContactBox Radius-10 BoxShadow Relative reveal__bottom">
        <img
          src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729282726/Quinn%20Daisies%20Tech/2150063032_ejyriy.jpg"
          alt="Quinn Daisies Images"
        />
        <div className="Ctn Absolute Overlay ColumnFlex FooterContactText">
          <h2>Contact Us</h2>
          <p>
            We welcome your inquiries and feedback. Whether you have a question,
            a suggestion, or simply wish to connect, our team is here to assist
            you. Quinn Daisies is a premier technology solutions provider,
            specializing in cutting-edge software development and digital
            services that enable businesses to navigate and excel in today’s
            fast-evolving digital landscape.
          </p>

          <a className="Btn" href="/contact-us">
            Need Help? Get in Touch With Us
          </a>
        </div>
      </div>
    </div>
  );
}
