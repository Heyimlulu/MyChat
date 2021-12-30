import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Connection extends Component {
  state = {
    nickname: "",
    channel: "",
    goToChat: false
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
            className="connexion_input"
            name="channel"
            value={this.state.channel}
            onChange={this.handleChange}
            pattern="[A-Za-z]{1,}"
            type="text"
            placeholder="Channel"
            required
          />
          <input
            className="connexion_input"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
            pattern="[A-Za-z]{1,}"
            type="text"
            placeholder="Nickname"
            required
          />
          <button type="submit" className="button btn-green">Join</button>
        </form>
      </div>
    );
  }
}

export default Connection;
