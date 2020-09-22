import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
//import axios from 'axios'
//import Pulse from 'react-reveal/Pulse';

//components
import Header from '../components/main_components/headerSection';
import client_1 from '../assets/images/clients/Riff-Shop-Logo-2019.png';
import client_2 from '../assets/images/clients/0.jpeg';

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
                     {/* <div className="client-item__text">
                         Riff Shop Music
                     </div> */}
                     <div className="client-item__image">
                         <img src={client_1} alt="Riff Shop Music" />
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     {/* <div className="client-item__text">
                          Atlacarte
                     </div> */}
                      <div className="client-item__image">
                         <img src={client_2} alt="Riff Shop Music" />
                     </div>
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     {/* <div className="client-item__text">
                         FAI
                     </div> */}
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     {/* <div className="client-item__text">
                         Krystle
                     </div> */}
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     {/* <div className="client-item__text">
                         Cessalto
                     </div> */}
                 </Col>
                 <Col xs={12} md={6} className="client-item">
                     {/* <div className="client-item__text">
                         BNM Therepy
                     </div> */}
                 </Col>
             </Row>
        </Grid>     
      </div>
    );
  }
}

export default Clients;