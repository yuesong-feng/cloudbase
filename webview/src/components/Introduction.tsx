import React from "react";
import './Introduction.less'

export default class Introduction extends React.Component {
  render() {
    return <div className="introduction">{this.props.children}</div>;
  }
}
