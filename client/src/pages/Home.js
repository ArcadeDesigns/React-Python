import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "./components/BannerSection";
import CompanyMap from "./components/CompanyMap";
import ServicesComponents from "./components/ServicesComponents";
import { Helmet } from "react-helmet-async";
import AboutSection from "./components/AboutSection";

export default function Home() {
  
  return (
    <>
      <Helmet>
        <title>Quinn Daisies | Innovative Software Development & Design Solutions</title>
        <meta
          name="description"
          content="Quinn Daisies offers cutting-edge Software development, design, and digital solutions. Transform your online presence with our expert team and innovative technology."
        />
        <link rel="canonical" href="https://www.quinndaisies.com" />
        <link rel="og:canonical" href="https://www.quinndaisies.com" />

        <meta property="og:title" content="Quinn Daisies | Innovative Software Development & Design" />
        <meta
          property="og:description"
          content="Elevate your digital presence with Quinn Daisies. We provide expert Software development, stunning design, and innovative tech solutions to drive your business forward."
        />
        <meta property="og:url" content="https://www.quinndaisies.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quinn Daisies | Innovative Software Development & Design" />
        <meta
          name="twitter:description"
          content="Discover Quinn Daisies' innovative Software development and design services. We create powerful digital solutions to help your business thrive online."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />

        <meta
          name="keywords"
          content="Quinn Daisies, Software development, Software design, digital solutions, innovative technology, custom Software, UI/UX design, responsive design, SEO optimization"
        />
        <meta
          name="og:keywords"
          content="Quinn Daisies, Software development, digital solutions, innovative technology, custom Software"
        />

        <meta name="author" content="Quinn Daisies Tech Team" />
        <meta name="revised" content="2024-03-18" /> {/* Update this date as needed */}
      </Helmet>
      <Navbar />
      <Header />
      <CompanyMap />
      <AboutSection />
      <ServicesComponents />
      <BannerSection />
      <Footer />
    </>
  );
}
