import React from 'react';
//import axios from 'axios';


class Me extends React.Component {
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
                <div className="welcome-container">
                    <div className="container">
                        <div className="title-container">
                            <div className="title-seperator title-seperator-container-left">
                                <div className="title-sep"></div>
                            </div>
                            <h2>Wayne Lawlor Communications</h2>
                            <div className="title-seperator title-seperator-container-right">
                                <div className="title-sep"></div>
                            </div>
                        </div>

                        <div className="welcome-text">
                            <p>Wayne Lawlor is a .......</p>
                            {/* <p>{hometable.map(welcome => (
                                <div key={welcome.id} dangerouslySetInnerHTML={{ __html:welcome.acf.welcome}}/>
                            ))}</p> */}
                        </div>
                    </div>
                </div>
            );
        // } return null;
    }
}
export default Me;