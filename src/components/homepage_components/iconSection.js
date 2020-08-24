import React from 'react';
//import axios from 'axios';


class IconsHome extends React.Component {
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
                <div className="usps-container bg-navy">
                    <ul className="usps-section">
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                {/* <img /> */}
                            </div>
                            <h6>Event Marketing</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                {/* <img /> */}
                            </div>
                            <h6>Social Events</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                {/* <img /> */}
                            </div>
                            <h6>Social Media</h6>
                        </li>
                    </ul>
                </div>
            );
        // } return null;
    }
}
export default IconsHome;