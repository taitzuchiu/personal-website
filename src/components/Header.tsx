import * as React from "react";
import "../styles/styles.scss";

import Button from "./Button";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="nav">
          <Button id={1} linkTo="hello" name="home" mini={false} />
          <Button id={2} linkTo="about" name="about" mini={false} />
          <Button id={3} linkTo="experience" name="experience" mini={false} />
          <Button id={4} linkTo="projects" name="projects" mini={false} />
        </div>
      </div>
    );
  }
}

export default Header;
