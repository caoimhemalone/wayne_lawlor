import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends Component {
    render(){
        return (
            <section className="header" >
                <Grid fluid className="header-container">
                    <Row>
                        <Col xs={6} md={6} className="header-item d-flex">
                            <span>{this.props.subheading}</span>
                            <h1 className="d-flex">{this.props.heading}</h1>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default Header;