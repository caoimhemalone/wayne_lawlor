import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Slider from "react-slick";

class Testimonies extends Component {
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 7000
    };
        
    if(isLoaded) {
    return (
    <Grid className="testimonies-container">
        <Row className="testimonies-section">
            <h2>Testimonies</h2>
            <Col xs={12} md={12} className="testimonies-column">
            <Slider {...settings}>
                <div>
                <img src={this.state.about_info.acf.testimony_image_1} alt="Boat on canal" />
                <div dangerouslySetInnerHTML={{ __html: this.state.who_are_we }}></div>

                <blockquote dangerouslySetInnerHTML={{ __html:this.state.about_info.acf.testimony_text_1}}></blockquote>
                <span>{this.state.about_info.acf.testimony_author_1}</span>
                </div>
                <div>
                <img src={this.state.about_info.acf.testimony_image_2} alt="Food through phone screen" />
                <blockquote dangerouslySetInnerHTML={{ __html:this.state.about_info.acf.testimony_text_2}}></blockquote>
                <span>{this.state.about_info.acf.testimony_author_2}</span>
                </div>
                <div>
                <img src={this.state.about_info.acf.testimony_image_3} alt="People celebrating" />
                <blockquote dangerouslySetInnerHTML={{ __html:this.state.about_info.acf.testimony_text_3}}></blockquote>
                <span>{this.state.about_info.acf.testimony_author_3}</span>
                </div>
                <div>
                <img src={this.state.about_info.acf.testimony_image_4} alt="Girl at football stadium" />
                <blockquote dangerouslySetInnerHTML={{ __html:this.state.about_info.acf.testimony_text_4}}></blockquote>
                <span>{this.state.about_info.acf.testimony_author_4}</span>
                </div>
            </Slider>
            </Col>
        </Row>
    </Grid>
    );
    } return null;
  }
}

export default Testimonies;