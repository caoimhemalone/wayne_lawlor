import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

import instagram_img from '../../assets/images/icons/instagram.png'
import facebook_img from '../../assets/images/icons/facebook.png'
import linkedin_img from '../../assets/images/icons/linkedin.png'
import twitter_img from '../../assets/images/icons/twitter.png'


class Footer extends React.Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/contact/101')
        .then(res => this.setState({
           contacttable: res.data,
           address: res.data.acf.address,
           phone: res.data.acf.phone,
           email: res.data.acf.email,
           email_mailto: "mailto:"+res.data.acf.email+"?subject = Feedback&body = Message",
           instagram: res.data.acf.instagram,
           twitter: res.data.acf.twitter,
           facebook: res.data.acf.facebook,
           linkedin: res.data.acf.linkedin,
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
  
    render() {
        const { isLoaded } = this.state;

        if(isLoaded) {
           return (
                <div className="contact-container bg-navy">
                    <div className="container contact-comp-inner">
                        <Grid fluid>
                            <Row>
                            <Col xs={12} md={6} className="contact-left">
                                <a className="phone" href={this.state.phone}>{this.state.phone}</a>
                                <a className="email" href={this.state.email_mailto}>{this.state.email}</a>
                            </Col>
                            <Col xs={12} md={6} className="contact-right">
                                <ul>
                                    {this.state.instagram ? (
                                        <li>
                                            <a className="social-media" href={this.state.instagram} traget="_blank">
                                                <img src={instagram_img} alt="instagram" />
                                            </a>
                                        </li>) : null
                                    }

                                    {this.state.twitter ? (
                                        <li>
                                            <a className="social-media" href={this.state.twitter} traget="_blank">
                                                <img src={twitter_img} alt="twitter" />
                                            </a>
                                        </li>) : null
                                    }

                                    {this.state.linkedin ? (
                                        <li>
                                            <a className="social-media" href={this.state.linkedin} traget="_blank">
                                                <img src={linkedin_img} alt="linkedin" />
                                            </a>
                                        </li>) : null
                                    }

                                    {this.state.facebook ? (
                                        <li>
                                            <a className="social-media" href={this.state.facebook} traget="_blank">
                                                <img src={facebook_img} alt="facebook" />
                                            </a>
                                        </li>) : null
                                    }
                                   
                                </ul>
                            </Col>
                            </Row>

                            <Row className="footer">
                                <Col xs={12} md={6} className="footer-left">
                                    &copy; Wayne Lawlor Communications {(new Date().getFullYear())}
                                </Col>

                                <Col xs={12} md={6} className="footer-right">
                                    <span>
                                        All stock images from <a href="https://www.unsplash.com" target="_blank" re="noopener noreferrer">unsplash.com</a>
                                    </span>
                                    <span>
                                        Web Development & Design by <a href="https://www.key-vah.com" target="_blank" re="noopener noreferrer">key-vah web creations</a>
                                    </span>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            );
        } return null;
    }
}
export default Footer;