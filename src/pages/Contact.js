import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Pulse from 'react-reveal/Pulse';
import { Helmet } from 'react-helmet';


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
      condition: false,
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"/contactform.php", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  header = "Contact Us";

  render() {
    const {isLoaded } = this.state;

        
    if(isLoaded) {
      const emailMailTo = "mailto:"+this.state.contact_info.acf.email+"?subject = Feedback&body = Message";

      return (
        <div className="contact">
          <Helmet>
            <title>WL Communications | Contact Us</title>
            <meta name="description" content="Conatct Wayne Lawlor Communications for more information" />
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

                  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
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