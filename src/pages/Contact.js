import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
// import Pulse from 'react-reveal/Pulse';
import { Helmet } from 'react-helmet';

//components
import Header from '../components/main_components/headerSection';
import ContactForm from '../components/main_components/ContactUs';

import logo from '../assets/images/logos/wl-logo-8.png';

class Contact extends Component {
  state = {
    ttable: {},
    isLoaded: false
  }

  componentDidMount(){
      axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/contact/101')
      .then(res => this.setState({
        contact_info: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  constructor(props) {    
    super(props)
    this.state = {
      condition: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

 


  header = "Contact Us";

  render() {
    const {isLoaded } = this.state;


        
    if(isLoaded) {
      const emailMailTo = "mailto:"+this.state.contact_info.acf.email+"?subject = Feedback&body = Message";
      const telNo = "tel:"+this.state.contact_info.acf.phone;

      return (
        <div className="contact">
          <Helmet>
            <title>WL Communications | Contact Us</title>
            <meta name="description" content="Contact Wayne Lawlor Communications for more information" />
            <meta name="theme-color" content="#082140" />
          </Helmet>
          <Header heading={this.header} logoimage={logo}/>
          <div className="contact-container">
            <Row className="contact__info">
                <Col xs={12} md={12} className="contact__details">
                    <h2 className="d-flex">Get in touch</h2>
                    <div className="contact__details-item">
                      <ion-icon name="location-outline"></ion-icon>
                      <span>
                        <a target="_blank" href={this.state.contact_info.acf.google_map_address} rel="noopener noreferrer">
                          {this.state.contact_info.acf.address}
                        </a>
                      </span>
                    </div>
                    <div className="contact__details-item">
                      <ion-icon name="mail-outline"></ion-icon>
                      <span>
                        <a href={emailMailTo}>
                          {this.state.contact_info.acf.email}
                        </a>
                      </span>
                    </div>
                    <div className="contact__details-item">
                      <ion-icon name="call-outline"></ion-icon>
                      <span>
                        <a href={telNo}>
                          {this.state.contact_info.acf.phone}
                        </a>
                      </span>
                    </div>
                </Col>
            </Row>

            <Row className="contact__form">
                <Col xs={12} md={12}>
                  {/* <Pulse> */}
                    <h2 className="d-flex justify-content-center">Send us a message</h2>
                  {/* </Pulse> */}

        
                  <ContactForm />
                </Col>
            </Row>
          </div>
        </div>
      );
    } return null;
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }

}

export default Contact;