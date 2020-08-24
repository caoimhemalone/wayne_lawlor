import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import $ from 'jquery';

//components
import Header from '../components/main_components/headerSection';

import image_1 from '../assets/images/Home-Featured.jpg';


class Press extends Component {
    constructor(props) {
        super(props);
        this.showPressInfo = this.showPressInfo.bind(this);
        this.hidePressInfo = this.hidePressInfo.bind(this);
    }

    showPressInfo() {
        $('.press-info__text button').addClass('show');
    }

    hidePressInfo() {
        $('.press-info__text button').addClass('hide');
    }

    header = "Press";
    render() {
        return (
        <div className="press-page">
        <Header heading={this.header}/>
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
                            <a href="/" className="press-preview__btn">View</a>
                        </div>
                    </Col>

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
                            <a href="/" className="press-preview__btn">View</a>
                        </div>
                    </Col>

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
                            <a href="/" className="press-preview__btn">View</a>
                        </div>
                    </Col>

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
                            <button onClick={this.showPressInfo} className="press-preview__btn">View</button>
                        </div>

                        <div className="press-info hide">
                            <div className="press-info__text">
                                <button onClick={this.hidePressInfo} >Close</button>
                                <p>Blah blah blah</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
    </div>
        );  
    }
}

export default Press;