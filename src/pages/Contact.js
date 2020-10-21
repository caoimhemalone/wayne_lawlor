import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Pulse from 'react-reveal/Pulse';

//components
import Header from '../components/main_components/headerSection';

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
      condition: false
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

      return (
        <div className="contact">
          <Header heading={this.header} logoimage={logo}/>
          <div className="contact-container">
            <Row className="contact__info">
                <Col xs={12} md={12} className="contact__details">
                    <h2 className="d-flex">Get in touch</h2>
                    <div className="contact__details-item">
                      <ion-icon name="location-outline"></ion-icon>
                      <span>
                        <a target="_blank" href="/" rel="noopener noreferrer">
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
                        <a href="tel:123-456-7890">
                          {this.state.contact_info.acf.phone}
                        </a>
                      </span>
                    </div>
                </Col>
            </Row>

            <Row className="contact__form">
                <Col xs={12} md={12}>
                  <Pulse>
                    <h2 className="d-flex justify-content-center">Send us a message</h2>
                  </Pulse>

                    {/* <form id="contact-form" action="contactform.php" method="POST" enctype="multipart/form-data" name="EmailForm"> */}
                    <form action="mailto:admin@key-vah.com?subject = Feedback&body = Message" enctype="text/plain">
                      <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" aria-describedby="emailHelp" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea className="form-control" rows="5" required></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </Col>
            </Row>
          </div>
        </div>
      );
    } return null;
  }
}

export default Contact;