/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Section from "./components/Section";
import Header from "./components/Header";
import Hamburger from "./components/HamburgerNav";
import MiniNav from "./components/MiniNav";
import WebLinks from "./components/WebLinks";

import { connect } from "react-redux";
import { changeSection } from "./redux/actions";

import * as text from "./text";

interface Props {
  changeSection: any;
}

interface Callback {
  anchor: string;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

class App extends React.Component<Props> {
  onLeave(origin: Callback, destination: Callback) {
    this.props.changeSection(destination.index + 1);
  }

  render() {
    return (
      <div>
        <Header />
        <Hamburger />
        <MiniNav />
        <WebLinks />
        <ReactFullpage
          scrollOverflow={true}
          anchors={["hello", "about", "experience", "projects"]}
          onLeave={this.onLeave.bind(this)}
          recordHistory={false}
          responsiveWidth={1000}
          responsiveHeight={700}
          render={() => {
            return (
              <div>
                <div id="fullpage-wrapper">
                  <div className="section" data-anchor="hello">
                    <Section id={1} title="intro" text={text.intro}/>
                  </div>
                  <div className="section" data-anchor="about">
                    <Section id={2} title="about me" text={text.aboutMe} />
                  </div>
                  <div className="section" data-anchor="experience">
                    <Section id={3} title="experience" text={text.experience} />
                  </div>
                  <div className="section" data-anchor="projects">
                    <Section id={4} title="projects" text={text.projects}/>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeSection
};

export default connect(
  null,
  mapDispatchToProps
)(App);
