import React from "react";
import Project from "./Project";
import movieQuest from "../assets/images/movie_quest.png";
import globetrottersGallery from "../assets/images/globetrotters_gallery.png";
import techBlog from "../assets/images/tech_blog.png";
import noteTaker from "../assets/images/note_taker.png";
import weatherDashboard from "../assets/images/weather_dashboard.png";
import codeQuiz from "../assets/images/code_quiz.png";


function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Movie Quest",
      description: "Movie Quest is a front-end movie suggestion application made with JavaScript, HTML and Tailwind CSS. This was a collaborative project with Julian and Bea.",
      appLink: "https://ajayshans.github.io/moviequest/",
      repoLink: "https://github.com/ajayshans/moviequest",
      image: movieQuest,
    },
    {
      id: 2,
      title: "Globetrotter's Gallery",
      description: "Globetrotter's Gallery is a full stack collaborative travel planning application that utilises MVC framework, ORMs and mySQL databases. Collaborators on this project were Mitchell, Marion and Haider.",
      appLink: "https://afternoon-journey-96236-2c6b59d73ff7.herokuapp.com/",
      repoLink: "https://github.com/ajayshans/globetrotters-gallery",
      image: globetrottersGallery,
    },
    {
      id: 3,
      title: "Tech Blog Application",
      description: "The Tech Blog application utilises MVC framework to create a full stack application whereby users can share their thoughts on topic relating to tech.",
      appLink: "https://shielded-garden-20830-c9ecb1046db7.herokuapp.com/",
      repoLink: "https://github.com/ajayshans/tech-blog-app",
      image: techBlog,
    },
    {
      id: 4,
      title: "Note Taker Application",
      description: "The Note Taker application utilises Express JS to enable users to manage their daily schedules.",
      appLink: "https://thawing-shore-30319-0aea271d3fe5.herokuapp.com/",
      repoLink: "https://https://github.com/ajayshans/note-taker-app.com",
      image: noteTaker,
    },
    {
      id: 5,
      title: "Weather Dashboard Application",
      description: "The Weather Dashboard is a front-end application that makes use of the 3rd-party Open Weather API to display the current and 5-day forecast for any inputted city.",
      appLink: "https://ajayshans.github.io/weather-dashboard-app/",
      repoLink: "https://github.com/ajayshans/weather-dashboard-app",
      image: weatherDashboard,
    },
    {
      id: 6,
      title: "JavaScript Code Quiz",
      description: "The JavaScript Code Quiz is a front-end application that enables users to test their knowledge of the coding language, JavaScript.",
      appLink: "https://ajayshans.github.io/javascript-code-quiz/",
      repoLink: "https://github.com/ajayshans/javascript-code-quiz",
      image: codeQuiz,
    },
  ];

  // Portfolio page layout
  return (
    <div className="container p-5">
      <h1>Ajay's Coding Portfolio</h1>

      <div className="row p-2">
        {/* For each project, pass the project component with associated props */}
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            repoLink={project.repoLink}
            description={project.description}
            appLink={project.appLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;