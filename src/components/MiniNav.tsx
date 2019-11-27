import * as React from "react";
import "../styles/styles.scss";

import Button from "./Button";

class MiniNav extends React.Component {
  render() {
    return (
      <div className="side">
        <div className="nav">
          <Button id={1} linkTo="hello" name="home" mini={true} />
          <Button id={2} linkTo="about" name="about" mini={true} />
          <Button id={3} linkTo="experience" name="experience" mini={true} />
          <Button id={4} linkTo="projects" name="projects" mini={true} />
        </div>
      </div>
    );
  }
}

export default MiniNav;
