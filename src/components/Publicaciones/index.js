import React, { Component } from "react";

export default class Publicaciones extends Component {
  render() {
    return <div>{this.props.match.params.key}</div>;
  }
}
