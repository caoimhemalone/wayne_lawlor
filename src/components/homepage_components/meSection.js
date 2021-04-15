import React from 'react';
import axios from 'axios';


class Me extends React.Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.waynelawlor.com/wp/wp-json/wp/v2/home/16')
        .then(res => this.setState({
           hometable: res.data,
           intro_heading: res.data.acf.intro_heading,
           intro_text: res.data.acf.intro_text,
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
                <div className="welcome-container bg-navy">
                    <div className="container">
                        <div className="title-container">
                            <div className="title-seperator title-seperator-container-left">
                                <div className="title-sep"></div>
                            </div>
                            <h2>{this.state.intro_heading}</h2>
                            <div className="title-seperator title-seperator-container-right">
                                <div className="title-sep"></div>
                            </div>
                        </div>

                        <div className="welcome-text">
                            <p>{this.state.intro_text}</p>
                        </div>
                    </div>
                </div>
            );
        } return null;
    }
}
export default Me;