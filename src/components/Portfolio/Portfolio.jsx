import React from "react";
import "./portfolio.css";
import ECOM from "../../assets/e-commerce.webp";
import DASH from "../../assets/cryptocurrency-dashboard.jpeg";
import FOOD from "../../assets/Restaurant-App-Development-Benefits-Of-Online-Food-Ordering-Services.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: ECOM,
      title: "E-Commerce Project",
      github: "https://github.com/Sairam-Nulakani/ecommerce-react-stripe",
    },
    {
      id: 2,
      image: FOOD,
      title: "Food Order Project",
      github:
        "https://github.com/Sairam-Nulakani/restaurant-food-delivery-app-nextjs/tree/bdb44e43113af7ff45e639a2a113d26d67522ca9",
    },
    {
      id: 3,
      image: DASH,
      title: "Admin Dashboard Project",
      github: "https://github.com/Sairam-Nulakani/dashboard-react-app",
      liveDemo: "https://admin-dashboard1-react.netlify.app",
    },
  ];
  return (
    <div>
      <section id="portfolio" className="sct">
        <h5>Portfolio</h5>
        <h2>My Recent Work</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={DASH} alt="" />
            </div>
            <h3>Admin Dashboard</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Sairam-Nulakani/dashboard-react-app"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://admin-dashboard1-react.netlify.app"
                className="btn"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={FOOD} alt="" />
            </div>
            <h3>Food Order Project</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Sairam-Nulakani/restaurant-food-delivery-app-nextjs/tree/bdb44e43113af7ff45e639a2a113d26d67522ca9"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://food-order-apps1.vercel.app/"
                className="btn"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={ECOM} alt="" />
            </div>
            <h3>ECommerce Project</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Sairam-Nulakani/ecommerce-react-stripe"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </article>
        </div>
      </section>
      <div>
        <a
          href="https://github.com/Sairam-Nulakani?tab=repositories"
          target="_blank"
        >
          <h5 className="get">Click here for more projects.</h5>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
