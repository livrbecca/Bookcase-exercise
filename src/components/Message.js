import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      count: 0,
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You For Subscribing",
      count: this.state.count + 1,
    });
    if (this.state.count === 1) {
      this.setState( {
        message: "Already Done",
      });
    }
    if (this.state.count === 2) {
      this.setState( {
        message: "You Must Be a Big Fan",
      });
    }
    if (this.state.count === 3) {
      this.setState( {
        message: "Go Home...",
      });
    }
    if (this.state.count === 4) {
      this.setState( {
        message: "Oh, You Are Home?",
      });
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
