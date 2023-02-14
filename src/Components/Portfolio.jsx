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
import image from "../images/portfl.jpg";

const imageAltText = "desktop with keyboard";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dockerize and deploy a Laravel app",
    description:
      "Using Docker and Docker compose to build and deploy a Laravel App.",
    url: "https://github.com/starburn-hub/laravel-app",
  },
  {
    title: "Using Terraform on AWS",
    description:
      "Creating a private network and connecting it to multiple instances and exposing it on a load balancer and Route53 domain.",
    url: "https://github.com/starburn-hub/second-semester-project/",
  },
  {
    title: "Using Ansible Roles",
    description:
      "Using Ansible Roles to install git, Mongdb and Apache.",
    url: "https://github.com/starburn-hub/Anible-roles",
  },
  {
    title: "Dockerize a React-App",
    description:
      "Docker compose up the frontend and the backend of the React app.",
    url: "https://github.com/starburn-hub/devops-django-react-task",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio" style={{backgroundColor: "black", color: "white",}}>
      <h2>Portfolio</h2>
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
                <h3 style={{ flexBasis: "40px", color: "yellow", }}>{project.title}</h3>
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
