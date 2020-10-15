import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import $ from 'jquery';

//components
import Header from '../components/main_components/headerSection';

import logo from '../assets/images/logos/wl-logo-10.png';


class Press extends Component {
    constructor(){
        super();
        this.state = {
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            press: [],
            isLoaded: false
        }
    }

    
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
        })
    }

    header = "Press";
    render() {
        console.log(this.state.press);
        const pressLoop = this.state.press.map((press, index)=> {
            //console.log(press);
            return (
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
                        <button  className="press-preview__btn" onClick={()=>{this.setState({show1:!this.state.show1})}}>View</button>
                    </div>

                    {
                        this.state.show1? <div className="press-info">
                        <div className="press-info__text">
                            <button onClick={()=>{this.setState({show1:!this.state.show1})}}  >Close</button>
                            <p>{press.acf.description}</p>
                        </div>
                        </div>
                        : null
                    }
                </Col>
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
                            {/* <Col xs={12} md={12} className="press-preview">
                                <a href="/" className="press-preview__image">
                                    <img src={image_1} alt="press preview" />
                                    <div className="press-preview__image-text">
                                        <span>The band had an event at.........</span>
                                        <h2>Riff Shop Music</h2>
                                    </div>
                                </a>
                                <div className="press-preview__text">
                                    <p>Riff Shop Music played the ..........</p>
                                    <button  className="press-preview__btn" onClick={()=>{this.setState({show1:!this.state.show1})}}>View</button>
                                </div>
                            </Col>

                            {
                                this.state.show1? <div className="press-info">
                                <div className="press-info__text">
                                    <button onClick={()=>{this.setState({show1:!this.state.show1})}}  >Close</button>
                                    <p>Riff Shop Music played the ..........</p>
                                </div>
                            </div>
                            : null
                            }

                            <Col xs={12} md={12} className="press-preview">
                                <a href="/" className="press-preview__image">
                                    <img src={image_2} alt="press preview" />
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
                                    <img src={image_3} alt="press preview" />
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
                                    <img src={image_4} alt="press preview" />
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
                            } */}
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