import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import $ from 'jquery';
import Modal from "../components/modal/Modal";
import { Helmet } from 'react-helmet';


//components
import Header from '../components/main_components/headerSection';

import logo from '../assets/images/logos/wl-logo-10.png';


class Press extends Component {
    constructor(){
        super();
        this.state = {
            colorChanged: false,
            showInfo: null,
            press: [],
            isLoaded: false
        }
    }

    state = {
        showModal: 0
      };
    
      getModal = value => {
        this.setState({ showModal: value });
      };
    
      hideModal = value => {
        this.setState({ showModal: 0 });
      };
    
      componentDidMount (){
    
        const pressUrl = 'http://www.waynelawlor.com/wp/wp-json/wp/v2/press?per_page=100';
    
        fetch(pressUrl)
        .then(response => response.json())
        .then(response => {
          response.sort((a, b) => a.id - b.id);
          this.setState({
            press: response,
            isLoaded: true
          })
        });
    }

    header = "Press";
    render() {
        const pressLoop = this.state.press.map((press, index)=> {
            console.log(this.state.press);
            return (
                <div>
                <Col xs={12} md={12} className="press-preview" key={index}>
                    <a href={press.acf.external_link} className="press-preview__image">
                        <img src={press.acf.image} alt="press preview" />
                        <div className="press-preview__image-text">
                            {/* <span>{press.acf.description}</span> */}
                            <h2>{press.acf.title}</h2>
                        </div>
                    </a>

                    <div className="press-preview__text">
                        <p>{press.acf.description}</p>
                        <button className="press-preview__btn" onClick={() => this.getModal(press.id)}>More Details</button>
                    </div>
                </Col>

                <Modal
                show={this.state.showModal === press.id}
                onHide={() => this.hideModal(press.id)}
                description={press.acf.description}
                />
                </div>
            )
        })

        const { isLoaded } = this.state;

        if(isLoaded) {
            return (
            <div className="press-page">
                <Helmet>
                    <title>WL Communications | Press</title>
                    <meta name="description" content="Wayne Lawlor Communication's clients in the press" />
                    <meta name="theme-color" content="#082140" />
                </Helmet>
                <Header heading={this.header} logoimage={logo}/>
                    <Grid fluid className="press-container">
                        <Row className="press">
                        {/* {this.state.press.length ? {pressLoop} : <div className="no-press">No Press available at this time</div>} */}
                            {pressLoop}
                        </Row>
                    </Grid>
            </div>
            );  
        } return null
    }
}

export default Press;