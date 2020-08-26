//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";


//components
import Header from '../components/main_components/headerSection';
import Me from '../components/homepage_components/meSection';
import ThreeLinks from '../components/homepage_components/linksSection';
import IconsHome from '../components/homepage_components/iconSection';
// import Contact from '..//components/main_components/contactSection';

import logo from '../assets/images/logos/wl-logo-10.png';


class Homepage extends Component {
  header = "Putting the social into customer experience";
  subheading = "media | marketing | social | events";
  
  render() {
    return (
      <div className="home-page">
        <Header heading={this.header} subheading={this.subheading} isSlider={this.slider} logoimage={logo}/>
        <Me />
        <ThreeLinks />
        <IconsHome />
        {/* <Contact /> */}
      </div>
    );  
  }
}

export default Homepage;