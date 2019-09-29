import * as React from "react";
import { connect } from "react-redux";
import { appState } from '../redux/reducers';

import "./components.scss";

interface Props {
  id: number; // buttonID - maps to sectionID
  name: string;
  linkTo: string;
  selectedID: number; // sectionID of selected section

  mini: boolean;
}

interface State {
  selected: boolean;
}

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: this.props.id === this.props.selectedID ? true : false
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.selectedID !== prevProps.selectedID) {
      this.setState({
        selected: this.props.id === this.props.selectedID ? true : false
      });
    }
  }

  render() {
    var buttonClassName = this.state.selected ? "button selected" : "button";
    if (!this.props.mini) {
      return (
        <a href={"#" + this.props.linkTo} className={buttonClassName}>
          {this.props.name}
        </a>
      );
    } else {
      return (
        <a href={"#" + this.props.linkTo} className={buttonClassName}>
          <span className="mini">{this.props.name}</span>
        </a>
      );
    }
  }
}

const mapStateToProps = (state: appState) => {
  return {
    selectedID: state.selectedSection
  };
};

export default connect(mapStateToProps)(Button);
