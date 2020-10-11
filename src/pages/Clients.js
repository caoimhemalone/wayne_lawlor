import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
//import Pulse from 'react-reveal/Pulse';

//components
import Header from '../components/main_components/headerSection';
import client_1 from '../assets/images/clients/Riff-Shop-Logo-2019.png';
import client_2 from '../assets/images/clients/0.jpeg';

import logo from '../assets/images/logos/wl-logo-10.png';

class Clients extends Component {
  header = "";

  state = {
    ttable: {},
    isLoaded: false
 }

    componentDidMount(){
        axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/clients/92')
        .then(res => this.setState({
           clients: res.data,
           client_name_1: res.data.acf.client_name_1,
           client_image_1: res.data.acf.client_image_1,
           client_link_1: res.data.acf.client_link_1,
           client_name_2: res.data.acf.client_name_2,
           client_image_2: res.data.acf.client_image_2,
           client_link_2: res.data.acf.client_link_2,
           client_name_3: res.data.acf.client_name_3,
           client_image_3: res.data.acf.client_image_3,
           client_link_3: res.data.acf.client_link_3,
           client_name_4: res.data.acf.client_name_4,
           client_image_4: res.data.acf.client_image_4,
           client_link_4: res.data.acf.client_link_4,
           client_name_5: res.data.acf.client_name_5,
           client_image_5: res.data.acf.client_image_5,
           client_link_5: res.data.acf.client_link_5,
           client_name_6: res.data.acf.client_name_6,
           client_image_6: res.data.acf.client_image_6,
           client_link_6: res.data.acf.client_link_6,
           client_name_7: res.data.acf.client_name_7,
           client_image_7: res.data.acf.client_image_7,
           client_link_7: res.data.acf.client_link_7,
           client_name_8: res.data.acf.client_name_8,
           client_image_8: res.data.acf.client_image_8,
           client_link_8: res.data.acf.client_link_8,
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
      console.log(this.state.clients);
    return (
      <div className="clients">
        <Header heading={this.header} logoimage={logo}/>
        <Grid className="clients-container">
             <Row className="clients-section">
               {/* {clientLoop} */}
                {this.state.client_name_1 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_1}  alt={this.state.client_name_1}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_1} alt={this.state.client_name_1} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_2 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_2}  alt={this.state.client_name_2}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_2} alt={this.state.client_name_2} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_3 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_3}  alt={this.state.client_name_3}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_3} alt={this.state.client_name_3} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_4 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_4}  alt={this.state.client_name_4}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_4} alt={this.state.client_name_4} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_5 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_5}  alt={this.state.client_name_5}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_5} alt={this.state.client_name_5} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_6 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_6}  alt={this.state.client_name_6}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_6} alt={this.state.client_name_6} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_7 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_7}  alt={this.state.client_name_7}>
                            <div className="client-item__image">
                                <img src={this.state.client_image_7} alt={this.state.client_name_7} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }

                {this.state.client_name_8 ? (
                    <Col xs={12} md={6} className="client-item">
                        <a target="_blank" href={this.state.client_link_8}  alt={this.state.client_name_8}>
                            <div className="client-item__image">
                            <img src={this.state.client_image_8} alt={this.state.client_name_8} />
                            </div>
                        </a>
                    </Col>
                ) : null
                }
             </Row>
        </Grid>     
      </div>
    );
  }
}

export default Clients;