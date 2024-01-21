import cv from '../assets/AjayShan_CV.pdf'

export default function Resume() {
    return (
        <div className="container p-5">
        <h1>Resume</h1>
        <p>Download my <a href={cv} download="AjayShan_CV.pdf">CV</a></p>
        <h2>Front-end Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
        </ul>
        <h2>Back-end Skills</h2>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequalize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
        </ul>
      </div>
    );
  }
  