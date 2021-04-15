import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

class OurServices extends Component {
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

  render() {
    const {isLoaded } = this.state;    

    if(isLoaded) {
    return (
        <Grid className="services">
            <h2>Services</h2>
            <Row className="services-section">
                <Col xs={12} md={4} className="services-item">
                  <div className="item-wrapper">
                    <div className="number">01</div>
                    <span>{this.state.about_info.acf.service_1}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                <div className="number">02</div>
                  <span>{this.state.about_info.acf.service_2}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">03</div>
                  <span>{this.state.about_info.acf.service_3}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">04</div>
                  <span>{this.state.about_info.acf.service_4}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">05</div>
                  <span>{this.state.about_info.acf.service_5}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">06</div>
                  <span>{this.state.about_info.acf.service_6}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">07</div>
                  <span>{this.state.about_info.acf.service_7}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">08</div>
                  <span>{this.state.about_info.acf.service_8}</span>
                  </div>
                </Col>
                <Col xs={12} md={4} className="services-item">
                <div className="item-wrapper">
                  <div className="number">09</div>
                  <span>{this.state.about_info.acf.service_9}</span>
                  </div>
                </Col>
            </Row>
        </Grid>
    );
    } return null;
  }
}

export default OurServices;