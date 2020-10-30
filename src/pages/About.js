import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

//components
import Header from '../components/main_components/headerSection';
import Testimonies from '../components/aboutpage_components/testimonies';
import OurServices from '../components/aboutpage_components/ourservices';
import AboutInfo from '../components/aboutpage_components/aboutinfo';


import logo from '../assets/images/logos/wl-logo-10.png';

class About extends Component {
  header = "About Us";

  render() {        
    return (
      <div className="about-page">
        <Header heading={this.header} logoimage={logo}/>
        <AboutInfo />
        <Testimonies />
        <OurServices />
      </div>
    );
  }
}

export default About;