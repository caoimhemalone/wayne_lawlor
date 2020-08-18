import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';



class Contact extends React.Component {
    // state = {
    //     ttable: {},
    //     isLoaded: false
    //  }
  
    //  componentDidMount(){
    //     axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
    //     .then(res => this.setState({
    //        hometable: res.data,
    //        isLoaded: true
    //     }))
    //     .catch(err => console.log(err));
    //  }
  
    //  constructor(props) {    
    //   super(props)
    //   this.state = {
    //     condition: false
    //   }
    //   this.handleClick = this.handleClick.bind(this)
    // }
    // handleClick() {
    //   this.setState({
    //     condition: !this.state.condition
    //   })
    // }
  
    render() {
        // const {hometable, isLoaded } = this.state;
        // if(isLoaded) {
           return (
                <div className="contact-container bg-navy">
                    <div className="container contact-comp-inner">
                        <Grid fluid>
                            <Row>
                            <Col xs={6} md={6} className="contact-left">
                                <a className="phone" href="/">018888888</a>
                                <a className="email" href="/">email@example.com</a>
                            </Col>
                            <Col xs={6} md={6} className="contact-right">
                                <ul>
                                    <li>
                                        <a className="social-media" href="/">Social Media Icon</a>
                                    </li>
                                    <li>
                                        <a className="social-media" href="/">Social Media Icon</a>
                                    </li>
                                    <li>
                                        <a className="social-media" href="/">Social Media Icon</a>
                                    </li>
                                    <li>
                                        <a className="social-media" href="/">Social Media Icon</a>
                                    </li>
                                </ul>
                            </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            );
        // } return null;
    }
}
export default Contact;