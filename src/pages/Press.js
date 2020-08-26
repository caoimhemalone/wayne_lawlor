import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import $ from 'jquery';

//components
import Header from '../components/main_components/headerSection';

import image_1 from '../assets/images/Home-Featured.jpg';
import logo from '../assets/images/logos/wl-logo-10.png';


class Press extends Component {
    constructor(){
        super();
        this.state={
            show1:false,
            show2:false,
            show3:false,
            show4:false
        }
    }

    header = "Press";
    render() {
        return (
        <div className="press-page">
        <Header heading={this.header} logoimage={logo}/>
            <Grid fluid className="press-container">
                <Row className="press">
                    <Col xs={12} md={12} className="press-preview">
                        <a href="/" className="press-preview__image">
                            <img src={image_1} alt="press preview" />
                            <div className="press-preview__image-text">
                                <span>Text Text Text</span>
                                <h2>Blah Blah Blah</h2>
                            </div>
                        </a>
                        <div className="press-preview__text">
                            <p>blah blah blah blah blah</p>
                            <button  className="press-preview__btn" onClick={()=>{this.setState({show1:!this.state.show1})}}>View</button>
                        </div>
                    </Col>

                    {
                        this.state.show1? <div className="press-info">
                        <div className="press-info__text">
                            <button onClick={()=>{this.setState({show1:!this.state.show1})}}  >Close</button>
                            <p>Blah blah blah</p>
                        </div>
                    </div>
                    : null
                    }

                    <Col xs={12} md={12} className="press-preview">
                        <a href="/" className="press-preview__image">
                            <img src={image_1} alt="press preview" />
                            <div className="press-preview__image-text">
                                <span>Text Text Text</span>
                                <h2>Blah Blah Blah</h2>
                            </div>
                        </a>
                        <div className="press-preview__text">
                            <p>blah blah blah blah blah</p>
                            <button  className="press-preview__btn" onClick={()=>{this.setState({show2:!this.state.show2})}}>View</button>
                        </div>
                    </Col>
                    {
                        this.state.show2? <div className="press-info">
                        <div className="press-info__text">
                            <button onClick={()=>{this.setState({show2:!this.state.show2})}}  >Close</button>
                            <p>Blah blah blah</p>
                        </div>
                    </div>
                    : null
                    }

                    <Col xs={12} md={12} className="press-preview">
                        <a href="/" className="press-preview__image">
                            <img src={image_1} alt="press preview" />
                            <div className="press-preview__image-text">
                                <span>Text Text Text</span>
                                <h2>Blah Blah Blah</h2>
                            </div>
                        </a>
                        <div className="press-preview__text">
                            <p>blah blah blah blah blah</p>
                            <button  className="press-preview__btn" onClick={()=>{this.setState({show3:!this.state.show3})}}>View</button>
                        </div>
                    </Col>

                    {
                        this.state.show3? <div className="press-info">
                        <div className="press-info__text">
                            <button onClick={()=>{this.setState({show3:!this.state.show3})}}  >Close</button>
                            <p>Blah blah blah</p>
                        </div>
                    </div>
                    : null
                    }

                    <Col xs={12} md={12} className="press-preview">
                        <a href="/" className="press-preview__image">
                            <img src={image_1} alt="press preview" />
                            <div className="press-preview__image-text">
                                <span>Text Text Text</span>
                                <h2>Blah Blah Blah</h2>
                            </div>
                        </a>
                        <div className="press-preview__text">
                            <p>blah blah blah blah blah</p>
                            <button  className="press-preview__btn" onClick={()=>{this.setState({show4:!this.state.show4})}}>View</button>
                        </div>
                    </Col>
                    {
                        this.state.show4? <div className="press-info">
                        <div className="press-info__text">
                            <button onClick={()=>{this.setState({show4:!this.state.show4})}}  >Close</button>
                            <p>Blah blah blah</p>
                        </div>
                    </div>
                    : null
                    }
                </Row>
            </Grid>
    </div>
        );  
    }
}

export default Press;