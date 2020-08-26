import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// import logo from '../../assets/images/logos/wl-logo-10.png'

class Header extends Component {
    state = {
        header_logo: 'show',
    }

    listenScrollEvent = e => {
        if (window.scrollY > 40) {
            this.setState({header_logo: 'hide'})
        } else {
            this.setState({header_logo: 'show'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        const logo_classes = `header-logo ${this.state.header_logo}`;

        return (
            <section className="header" >
                <Grid fluid className="header-container">
                    <div className={logo_classes}>
                        <a href="/">
                            <img src={this.props.logoimage} alt="WL Logo" />
                        </a>
                    </div>
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