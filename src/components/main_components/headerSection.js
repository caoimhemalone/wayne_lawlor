import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends Component {
    render(){
        return (
            <section className="header">
                <Grid fluid className="header-container">
                    <Row>
                        <Col xs={12} md={12} className="header-item d-flex">
                            <span>{this.props.subheading}</span>
                            <h1 className="d-flex justify-content-center">{this.props.heading}</h1>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default Header;