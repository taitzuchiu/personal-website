import * as React from "react";
import "./components.scss";
import { ReactComponent as GHLogo } from "../images/github.svg";
import { ReactComponent as LiLogo } from "../images/linkedin.svg";
import { ReactComponent as EmailLogo } from "../images/envelope.svg";

class WebLinks extends React.Component {
  render() {
    return (
      <div className="social">
        <div className="nav">
          <ul>
            <li>
              <a
                href="mailto: taitzuchiu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailLogo height="30px" width="30px" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/taitzuchiu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GHLogo height="30px" width="30px" fill="white" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/taitzuchiu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiLogo height="30px" width="30px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WebLinks;
