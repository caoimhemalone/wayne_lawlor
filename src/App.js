//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";

//components
import Nav from './components/main_components/nav';
import Footer from './components/main_components/footer';

//includes
import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );  
  }
}

export default App;