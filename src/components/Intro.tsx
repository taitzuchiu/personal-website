import * as React from "react";
import "./components.scss";

// import Header from "./Header";

class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1 style={{ fontWeight: 300, fontSize: 60 }}>
            hello! i’m <span style={{ fontWeight: 700 }}>Sam</span>. &nbsp;
          </h1>
          <h2 style={{ fontWeight: 300, fontSize: 50, color: "#ffdee2" }}>
            i code sometimes.
          </h2>
        </div>
      </div>
    );
  }
}

export default Intro;
