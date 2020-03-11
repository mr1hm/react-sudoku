import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { text } = this.props;
    return (
      <>
        <CssBaseline />
        <Container className="header-container" maxWidth="xl">
          <Typography component="h2" variant="h1">
            Sudoku
          </Typography>
        </Container>
      </>
    );
  }
}
