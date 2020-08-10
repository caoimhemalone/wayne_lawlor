//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";


//components
import Header from '../components/main_components/headerSection';
// import Brands from '../components/homeComponents/brandsSection';
// import Welcome from '../components/homeComponents/welcomeSection';
// import History from '../components/homeComponents/historySection';
// import Appointment from '../components/mainComponents/appointmentSection';


class Homepage extends Component {
  header = "Putting the social into customer experience";
  subheading = "media | marketing | social | events";
  
  render() {
    return (
      <div className="home-page">
        <Header heading={this.header} subheading={this.subheading} isSlider={this.slider}/>
        {/*<Welcome />
        <Brands />
        <Appointment />
        <History /> */}
      </div>
    );  
  }
}

export default Homepage;