import React from 'react';
import axios from 'axios';

class ThreeLinks extends React.Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/home/16')
        .then(res => this.setState({
           hometable: res.data,
           intro_heading: res.data.acf.intro_heading,
           link_clients_img: res.data.acf.clients_image,
           link_press_img: res.data.acf.press_image,
           link_contact_img: res.data.acf.contact_image,
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
                                            <img src={this.state.link_clients_img} alt="people talking"/>
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
                                            <img src={this.state.link_press_img} alt="newspapers"/>
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
                                            <img src={this.state.link_contact_img} alt="man holding phone"/>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } return null;
    }
}
export default ThreeLinks;