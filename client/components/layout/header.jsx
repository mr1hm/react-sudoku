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
        <Container maxWidth="xl">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </>
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col d-flex justify-content-center">
      //       <div className="header-title">{text}</div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
