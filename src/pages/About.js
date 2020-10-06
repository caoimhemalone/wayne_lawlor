import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/main_components/headerSection';

import logo from '../assets/images/logos/wl-logo-10.png';

class About extends Component {
  header = "";

  render() {
    return (
      <div className="About">
        <Header heading={this.header} logoimage={logo}/>
        <Grid className="About-container">
             <Row className="About-section">
               
             </Row>
        </Grid>     
      </div>
    );
  }
}

export default About;