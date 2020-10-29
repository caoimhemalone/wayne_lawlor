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
        <Grid>
            <Row className="services-section">
                
            </Row>
        </Grid>
    );
    } return null;
  }
}

export default OurServices;