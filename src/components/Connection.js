import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Connection extends Component {
  state = {
    nickname: "",
    channel: "",
    goToChat: false
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ goToChat: true });
  };

  render() {
    if (this.state.goToChat) {
      return (
        <Redirect push to={`/${this.state.channel}/${this.state.nickname}`} />
      );
    }

    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}>
          <h1 className="connexionTitle">MyChat</h1>
          <input
            name="channel"
            value={this.state.channel}
            onChange={this.handleChange}
            pattern="[A-Za-z]{1,}"
            type="text"
            placeholder="Channel"
            required
          />
          <input
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
            pattern="[A-Za-z]{1,}"
            type="text"
            placeholder="Nickname"
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    );
  }
}

export default Connection;
