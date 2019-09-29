import * as React from "react";
import "./components.scss";

import Button from "./Button";

class Hamburger extends React.Component {
  render() {
    return (
      <div className="hamburger">
        <div className="nav">
          <input type="checkbox" />
          <span />
          <span />
          <span />

          <div className="buttons">
            <div><Button id={1} linkTo="hello" name="home" mini={false} /></div>
            <div><Button id={2} linkTo="about" name="about" mini={false} /></div>
            <div><Button id={3} linkTo="experience" name="experience" mini={false} /></div>
            <div><Button id={4} linkTo="projects" name="projects" mini={false} /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hamburger;
