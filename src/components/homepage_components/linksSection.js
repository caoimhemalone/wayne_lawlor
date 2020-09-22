import React from 'react';
//import axios from 'axios';

import image_1 from '../../assets/images/stock/stock-3.jpg';
import image_2 from '../../assets/images/stock/stock-1.jpg';
import image_3 from '../../assets/images/stock/stock-4.jpg';

class ThreeLinks extends React.Component {
    // state = {
    //     ttable: {},
    //     isLoaded: false
    //  }
  
    //  componentDidMount(){
    //     axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
    //     .then(res => this.setState({
    //        hometable: res.data,
    //        isLoaded: true
    //     }))
    //     .catch(err => console.log(err));
    //  }
  
    //  constructor(props) {    
    //   super(props)
    //   this.state = {
    //     condition: false
    //   }
    //   this.handleClick = this.handleClick.bind(this)
    // }
    // handleClick() {
    //   this.setState({
    //     condition: !this.state.condition
    //   })
    // }
  
    render() {
        // const {hometable, isLoaded } = this.state;
        // if(isLoaded) {
           return (
                <div className="three-links-container">
                    <div className="three-links-outer">
                        <ul className="three-links-section">
                            <li className="page-link">
                                <a className="page-link__link" href="/clients">
                                    <div className="page-link__text">
                                        <h3>Clients</h3>
                                    </div>
                                    <div className="page-link__image">
                                        <div className="page-link__image-inner">
                                            <img src={image_1} alt="section image"/>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="page-link">
                                <a className="page-link__link" href="/press">
                                    <div className="page-link__text">
                                        <h3>Press</h3>
                                    </div>
                                    <div className="page-link__image">
                                        <div className="page-link__image-inner">
                                            <img src={image_2} alt="section image"/>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="page-link">
                                <a className="page-link__link" href="/contact">
                                    <div className="page-link__text">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="page-link__image">
                                        <div className="page-link__image-inner">
                                            <img src={image_3} alt="section image"/>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        // } return null;
    }
}
export default ThreeLinks;