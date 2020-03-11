import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { text } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <div className="header-title">{text}</div>
      </div>
    );
  }
}
