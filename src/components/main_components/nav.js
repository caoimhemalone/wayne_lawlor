import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactGA from "react-ga";



//pages
import Home from '../../pages/Homepage';
// import About from '../../pages/About';
// import Brands from '../../pages/Brands';
// import IndBrand from '../../pages/IndBrand';
// import B2B from '../../pages/B2B';
// import Schedule from '../../pages/Schedule';
import Contact from '../../pages/Contact';
//import Signin from '../../pages/Signin';
import Sitemap from '../../pages/Sitemap';

//import heroOne from './heroImages/hero_1.png';

class Nav extends React.Component {
    state = {
        nav: 'transparent',
        hamburger: '#B79954'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 300) {
            this.setState({nav: '#fff', hamburger: '#000', trans: '2s ease-in'})
        } else {
            this.setState({nav: 'transparent', hamburger: '#B79954', trans: 'unset'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    constructor() {
        super();
        ReactGA.initialize("UA-111422776-1");
        ReactGA.pageview(window.location.pathname);
    }
    render(){
        return (
            <div>
                <Router>
                    {/* <nav style={{backgroundColor: this.state.nav, transition: this.state.trans}}> */}
                    <nav>
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger">
                            <span>MENU</span>
                            <div style={{background: this.state.hamburger}}></div>
                        </div>

                        <div className="nav-inner menu" >
                            <div className="nav-inner-left"></div>
                            <div className="nav-inner-right">
                                <ul>
                                    <li>Clients</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            {/* <Grid fluid className="px-4 py-3 menu">
                                <Row className="mx-0">
                                    <Col xs={12} md={2} className="nav-left">
                                    <a href="/">Logo Here</a>
                                    </Col>
                                    <Col xs={12} md={10} className="nav-right">
                                        <Row end="xs" middle="xs">
                                            <Col xs={12} md className="nav-item"> 
                                                {/* <Link to="/about-us">About</Link> */}
                                                {/*<a href="/">About</a>
                                            </Col>
                                            <Col xs={12} md className="nav-item"> 
                                                <a href="/">Brands</a>
                                            </Col>
                                            <Col xs={12} md className="nav-item"> 
                                                <a href="/">B2B</a>
                                            </Col> 
                                            <Col xs={12} md className="nav-item"> 
                                                <a href="/">Schedule</a>
                                            </Col>
                                            <Col xs={12} md className="nav-item"> 
                                                <a href="/contact">Contact</a>
                                            </Col>
                                            <Col xs={12} md className="nav-item"> 
                                                <a href="/">Sign in</a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Grid> */}
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>          
                        {/* <Route path="/about-us" component={About}/>
                        <Route path="/brands" component={Brands}/>  
                        <Route path="/b2b" component={B2B}/>
                        <Route path="/schedule" component={Schedule}/> */}
                        <Route path="/contact" component={Contact}/>
                        {/* <Route path="/sign-in" component={Signin}/> */}
                        <Route path="/sitemap" component={Sitemap}/>
                        {/* <Route exact path="/:id" component={IndBrand} /> */}
                    </Switch>          
                </Router>
            </div>
        );
    }
}

export default Nav;