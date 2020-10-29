import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

//components
import Header from '../components/main_components/headerSection';
import Testimonies from '../components/aboutpage_components/testimonies';
import OurServices from '../components/aboutpage_components/ourservices';


import logo from '../assets/images/logos/wl-logo-10.png';

class About extends Component {
  state = {
    ttable: {},
    isLoaded: false
  }

  componentDidMount(){
    axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/about/121')
      .then(res => this.setState({
        about_info: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  constructor(props) {    
    super(props)
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  header = "About Us";

  render() {
    const {isLoaded } = this.state;
        
    if(isLoaded) {
      return (
        <div className="about-page">
          <Header heading={this.header} logoimage={logo}/>
          <Grid className="about-container">
              <Row className="about-section">
                  <Col xs={12} md={6} className="about-top-left">
                    <img src={this.state.about_info.acf.about_us_image_1} className="about-top-left-image-1" alt="Wayne Lawlor"/>

                    <h1>Putting the social into customer experience</h1>
                    <h2><i>{this.state.about_info.acf.sub_heading}</i></h2>

                    <p className="par_1">{this.state.about_info.acf.paragraph_1}</p>
                    <p className="par_2">{this.state.about_info.acf.paragraph_2}</p>
                    <p className="par_3">{this.state.about_info.acf.paragraph_3}</p>
                  </Col>
                  <Col xs={12} md={6} className="about-top-right">
                    <div className="image-quote-container">
                      <blockquote class="brooks">{this.state.about_info.acf.quote}</blockquote>

                      <p className="par_3">{this.state.about_info.acf.paragraph_3}</p>

                      <img src={this.state.about_info.acf.about_us_image_2} className="about-image-2" alt="Drink celebration"/>
                    </div>

                    <p className="par_4">{this.state.about_info.acf.paragraph_4}</p>
                  </Col>
              </Row>
          </Grid>    
          <Testimonies />
          <OurServices />
        </div>
      );
    } return null;
  }
}

export default About;