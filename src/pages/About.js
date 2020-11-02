import React, { Component } from "react";
import { Helmet } from 'react-helmet';


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
        <Helmet>
          <title>WL Communications | About Us</title>
          <meta name="description" content="About Wayne Lawlor Communications Dublin's leading event and PR company" />
          <meta name="theme-color" content="#082140" />
        </Helmet>
        <Header heading={this.header} logoimage={logo}/>
        <AboutInfo />
        <Testimonies />
        <OurServices />
      </div>
    );
  }
}

export default About;