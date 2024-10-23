import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "scrollreveal";

const RECAPTCHA_SITE_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

export default function Contact() {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does Quinn Daisies offer?",
      answer:
        "Quinn Daisies provides a comprehensive range of technology solutions, including custom software development, Software and mobile app development, cloud services, AI and machine learning integration, and digital transformation consulting.",
    },
    {
      question: "How can Quinn Daisies benefit my business?",
      answer:
        "Our tailored solutions help businesses streamline operations, enhance customer experiences, and stay competitive in the digital marketplace. We focus on delivering scalable, efficient, and innovative technologies that drive growth and productivity.",
    },
    {
      question: "What is Quinn Daisies' approach to project management?",
      answer:
        "We employ agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process. Our approach emphasizes close collaboration with clients, regular updates, and iterative development to meet evolving needs.",
    },
    {
      question: "How does Quinn Daisies ensure the security of client data?",
      answer:
        "We prioritize data security through robust encryption protocols, regular security audits, and compliance with industry standards such as GDPR and CCPA. Our team is trained in best practices for data protection and privacy.",
    },
    {
      question:
        "What support does Quinn Daisies offer after project completion?",
      answer:
        "We provide comprehensive post-launch support, including maintenance, updates, and troubleshooting. Our dedicated support team ensures smooth operation of your solutions and addresses any issues promptly to minimize downtime.",
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha();

      const response = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      });

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok && responseData.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
  };

  const executeRecaptcha = () => {
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(token => resolve(token))
          .catch(error => reject(error));
      });
    });
  };

  return (
    <>
    
      <Helmet>
        <title>Contact Quinn Daisies | Get in Touch for Innovative Tech Solutions</title>
        <meta
          name="description"
          content="Reach out to Quinn Daisies for cutting-edge Software development, design, and digital solutions. Schedule a consultation or get answers to your questions about our services."
        />
        <link rel="canonical" href="https://www.quinndaisies.com/contact" />
        <link rel="og:canonical" href="https://www.quinndaisies.com/contact" />

        <meta property="og:title" content="Contact Quinn Daisies | Innovative Tech Solutions" />
        <meta
          property="og:description"
          content="Connect with Quinn Daisies for expert Software development, design, and digital transformation services. Schedule a meeting or explore our FAQ to learn how we can elevate your online presence."
        />
        <meta property="og:url" content="https://www.quinndaisies.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Quinn Daisies | Innovative Tech Solutions" />
        <meta
          name="twitter:description"
          content="Get in touch with Quinn Daisies for tailored Software development and design solutions. Find answers to common questions and schedule a consultation with our experts."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />

        <meta
          name="keywords"
          content="Quinn Daisies contact, Software development consultation, design services, digital solutions, tech support, FAQ, schedule meeting"
        />
        <meta
          name="og:keywords"
          content="Quinn Daisies contact, Software development, digital solutions, consultation, FAQ"
        />

        <meta name="author" content="Quinn Daisies Tech Team" />
        <meta name="revised" content="2024-03-18" />
      </Helmet>
      <Navbar />

      <div
        className="Ctn Screen Screen-Size"
        style={{ backgroundColor: "#000010" }}
      >
        <div className="Ctn RowFlex">
          <div className="Ctn ColumnFlex FormContainer">
            <h2>Get In Touch With Us</h2>

            <form className="Ctn ColumnFlex" onSubmit={handleSubmit}>
              <div className="Ctn RowFlex">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name" 
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email" 
                  required 
                />
              </div>

              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject" 
                required 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message" 
                required
              ></textarea>

              <button className="Btn" type="submit" disabled={submitStatus === 'sending'}>
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && <p className="success-message">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}
            </form>
          </div>

          <div className="Ctn ColumnFlex ContactText">
            <h2>Contact Information</h2>
            <p>
              At Quinn Daisies, we value your input and are committed to
              excellence in customer service. For a more personalized discussion
              about your specific needs or to explore how we can add value to
              your business, we invite you to schedule a consultation with one
              of our specialists.
            </p>
            <span>
              To arrange a meeting, please click the link below to access our
              scheduling system.
            </span>

            <div className="RowFlex">
              <a
                className="Btn"
                href=""
              >
                Schedule a Meeting?
              </a>

              <a
                className="Btn"
                href=""
              >
                LinkedIn
              </a>

              <a className="Btn" href="mailto:info@quinndaisies.com">
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="FaqCtn" style={{ backgroundColor: "#000010" }}>
        <div className="FaqHeader">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common queries about Quinn Daisies and our services.
          </p>
        </div>
        <div className="RowFlex FaqsWidth">
          <div className="FaqList">
            {faqData.map((faq, index) => (
              <div key={index} className="FaqListItem">
                <div
                  className={`FaqListItemBox ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <div
                    className={`FaqListItemBoxDropDown ${
                      activeIndex === index ? "show" : "hide"
                    }`}
                  >
                    {activeIndex === index && <p>{faq.answer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ImageCtn">
            <img
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167392/Quinn%20Daisies%20Tech/person-wearing-futuristic-virtual-reality-glasses-gaming_qvgzwq.jpg"
              alt="Quinn Daisies Images"
            />
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}
