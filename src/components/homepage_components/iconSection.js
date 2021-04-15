import React from 'react';
import axios from 'axios';

import icon_1 from '../../assets/images/icons/mobile-app.svg';
import icon_2 from '../../assets/images/icons/data-analysis.svg';
import icon_3 from '../../assets/images/icons/stats.svg';
import icon_4 from '../../assets/images/icons/plan.svg';
import icon_5 from '../../assets/images/icons/user.svg';
import icon_6 from '../../assets/images/icons/party.svg';

class IconsHome extends React.Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/home/16')
        .then(res => this.setState({
           hometable: res.data,
           usp_1: res.data.acf.usp_1,
           usp_2: res.data.acf.usp_2,
           usp_3: res.data.acf.usp_3,
           usp_4: res.data.acf.usp_4,
           usp_5: res.data.acf.usp_5,
           usp_6: res.data.acf.usp_6,
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
        const { isLoaded } = this.state;
        if(isLoaded) {

        //Icons made by <a href="https://www.flaticon.com/free-icon/data-analysis_3029209" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
           return (
                <div className="usps-container bg-navy">
                    <ul className="usps-section">
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                <img src={icon_1} alt=""/>
                            </div>
                            <h6>{this.state.usp_1}</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                <img src={icon_2} alt=""/>
                            </div>
                            <h6>{this.state.usp_2}</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                <img src={icon_3} alt="" />
                            </div>
                            <h6>{this.state.usp_3}</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                <img src={icon_4} alt="" />
                            </div>
                            <h6>{this.state.usp_4}</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                <img src={icon_5} alt=""/>
                            </div>
                            <h6>{this.state.usp_5}</h6>
                        </li>
                        <li className="usps-list">
                            <div className="usps-list__icon">
                                <img src={icon_6} alt="" />
                            </div>
                            <h6>{this.state.usp_6}</h6>
                        </li>
                    </ul>
                </div>
            );
        } return null;
    }
}
export default IconsHome;