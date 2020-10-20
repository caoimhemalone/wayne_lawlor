import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import $ from 'jquery';
import Modal from "../components/modal/Modal";


//components
import Header from '../components/main_components/headerSection';

import logo from '../assets/images/logos/wl-logo-10.png';


class Press extends Component {
    constructor(){
        super();
        this.state = {
            // show1:false,
            // show2:false,
            // show3:false,
            // show4:false,
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
    
        const pressUrl = 'http://www.waynelawlor.com/wp/wp-json/wp/v2/press';
    
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
            //console.log(press);
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
                        <button className="press-preview__btn" onClick={() => this.getModal(press.id)}>View</button>
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
                <Header heading={this.header} logoimage={logo}/>
                    <Grid fluid className="press-container">
                        <Row className="press">
                            {pressLoop}
                        </Row>
                    </Grid>
            </div>
            );  
        } return (
            <div style={{height: 100+"vh", width: 100+"vw", backgroundColor: '#fff'}}></div>
        )
    }
}

export default Press;