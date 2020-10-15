import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
//import Pulse from 'react-reveal/Pulse';

//components
import Header from '../components/main_components/headerSection';

import logo from '../assets/images/logos/wl-logo-10.png';

class Clients extends Component {
  header = "";

    constructor(){
        super();
        this.state = {
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            clients: [],
            isLoaded: false
        }
    }


    componentDidMount (){

        const pressUrl = 'http://www.waynelawlor.com/wp/wp-json/wp/v2/clients';

        fetch(pressUrl)
        .then(response => response.json())
        .then(response => {
            response.sort((a, b) => a.id - b.id);
            this.setState({
                clients: response,
                isLoaded: true
            })
        })
    }
  render() {

    const clientLoop = this.state.clients.map((client, index)=> {
        //console.log(press);
        return (
            <Col xs={12} md={4} className="client-item" key={index}>
                <a target="_blank" rel="noopener noreferrer" href={client.acf.client_link}  alt={client.acf.client_name}>
                    <div className="client-item__image">
                        <img src={client.acf.client_image} alt={client.acf.client_name} />
                    </div>
                </a>
            </Col>
        )
    })

    return (
      <div className="clients">
        <Header heading={this.header} logoimage={logo}/>
        <Grid className="clients-container">
             <Row className="clients-section">
               {clientLoop}
             </Row>
        </Grid>     
      </div>
    );
  }
}

export default Clients;