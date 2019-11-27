import * as React from "react";
import "../styles/styles.scss";
import Intro from "./Intro";

type SectionProps = {
  id: number;
  title: string;
  text: JSX.Element;
};

class Section extends React.Component<SectionProps> {
  render() {
    if (this.props.title === "intro") {
      return <Intro />;
    } else {
      return (
        <div className="mySection">
          <div className="box">
            <div className="title">{this.props.title}</div>
            <div className="text">{this.props.text}</div>
          </div>
        </div>
      );
    }
  }
}

export default Section;
