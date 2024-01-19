import { IoLogoGithub } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
      const githubLink = "https://github.com/ajayshans";
      const linkedinLink = "https://www.linkedin.com/in/ajay-shan-6526a1136/";
      const youtubeLink = "https://www.youtube.com/channel/UCV0VTbXZSXC0m9SX7VNZ_5Q"
      return (
        <div className="d-flex justify-content-center gap-3 p-3" >
          <h1>
            <a className="footer-link" href={githubLink} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
          </h1>
          <h1>
            <a className="footer-link" href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <RxLinkedinLogo />
            </a>
          </h1>
          <h1>
            <a className="footer-link" href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube />
            </a>
          </h1>
        </div>
      );
    }