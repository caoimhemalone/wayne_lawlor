import React from 'react';
//import axios from 'axios';


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
                    <div className="container">
                        <ul className="three-links-section">
                            <li className="page-link">
                                <div className="page-link__text">
                                    <h3>Clients</h3>
                                </div>
                                <div className="page-link_image">
                                    <div className="page-link_image-inner">
                                        {/* <img/> */}
                                    </div>
                                </div>
                            </li>
                            <li className="page-link">
                                <div className="page-link__text">
                                    <h3>Press</h3>
                                </div>
                                <div className="page-link_image">
                                    <div className="page-link_image-inner">
                                        {/* <img/> */}
                                    </div>
                                </div>
                            </li>
                            <li className="page-link">
                                <div className="page-link__text">
                                    <h3>Contact</h3>
                                </div>
                                <div className="page-link_image">
                                    <div className="page-link_image-inner">
                                        {/* <img/> */}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        // } return null;
    }
}
export default ThreeLinks;