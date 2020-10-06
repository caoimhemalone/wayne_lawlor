import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactGA from "react-ga";



//pages
import Home from '../../pages/Homepage';
import About from '../../pages/About';
import Press from '../../pages/Press';
import Contact from '../../pages/Contact';
import Clients from '../../pages/Clients';
import Sitemap from '../../pages/Sitemap';

//import heroOne from './heroImages/hero_1.png';

class Nav extends React.Component {
    state = {
        nav: 'transparent',
        hamburger: '#B79954'
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
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <a href="/clients">Clients</a>
                                    </li>
                                    <li>
                                        <a href="/press">Press</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>  
                        <Route path="/about" component={About}/>        
                        <Route path="/press" component={Press}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/clients" component={Clients}/>
                        <Route path="/sitemap" component={Sitemap}/>
                    </Switch>          
                </Router>
            </div>
        );
    }
}

export default Nav;