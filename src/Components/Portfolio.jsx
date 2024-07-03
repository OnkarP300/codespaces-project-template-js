/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/portfolio.webp";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */







const projectList = [
  {
    title: "My-Portfolio",
    description:
      "Developed a responsive portfolio website using React.js with Vite for build automation. Utilized SCSS for styling and Framer Motion for animations, prioritizing user experience. Designed comprehensive sections for resume, projects, skills and relevant links, showcasing front-end development skills.",
    url: "https://onkarpatil-portfolio.netlify.app/",
  },
  {
    title: "PenguiNews",
    description:
      "Developed a global news website with React, CSS, and Bootstrap. Integrated external APIs for up-to-date news content. The demo uses static data. The full version with complete API integration, which requires a subscription, can be shown locally.",
    url: "https://penguinews.netlify.app/",
  },
  {
    title: "Handle-Text",
    description:
      "A React-based website for text analysis. Implemented features like word count and character count, removing extra spaces, and usability. Showcased strong front-end development skills and attention to user needs.",
    url: "https://handletext.netlify.app/",
  },
  {
    title: "Cara",
    description:
      "Developed a detailed front-end clothing e-commerce website using HTML, CSS, and JavaScript. The project highlights my skills in creating responsive designs, user-friendly interfaces, and interactive features.",
    url: "https://onkarp300.github.io/Ecom.github.io/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
