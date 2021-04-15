import React, { Component } from "react";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="press-info">
            <div className="press-info__text">
                <button onClick={this.props.onHide}>Close</button>
                <p>{this.props.description}</p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
