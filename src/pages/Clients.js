import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
//import axios from 'axios'
//import Pulse from 'react-reveal/Pulse';

//components
import Header from '../components/main_components/headerSection';

import logo from '../assets/images/logos/wl-logo-10.png';

class Clients extends Component {
  header = "";

  render() {
    return (
      <div className="clients">
        <Header heading={this.header} logoimage={logo}/>
        <Grid className="clients-container">
             <Row className="clients-section">
                 <Col xs={12} md={6} className="client-item">
                     <div className="client-item__text">
                         Client 1
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     <div className="client-item__text">
                         Client 2
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     <div className="client-item__text">
                         Client 3
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     <div className="client-item__text">
                         Client 4
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     <div className="client-item__text">
                         Client 5
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     <div className="client-item__text">
                         Client 6
                     </div>
                 </Col>
             </Row>
        </Grid>     
      </div>
    );
  }
}

export default Clients;