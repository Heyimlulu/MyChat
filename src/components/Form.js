import React, { Component } from "react";

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createMessage();
  };

  createMessage = () => {
    const { addMessage, nickname, length } = this.props;

    const message = {
      nickname,
      message: this.state.message
    };

    addMessage(message);

    // Reset
    this.setState({ message: "", length });
  };

  handleChange = (event) => {
    const message = event.target.value; // Obtient la valeur actuel du champs de texte
    const length = this.props.length - message.length;

    this.setState({ message, length });
  };

  handleKeyUp = (event) => {
    if (event.key === "Enter") {
      this.createMessage();
    }
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onKeyUp={this.handleKeyUp}
      >
        <textarea
          require
          maxLength={this.props.length}
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Start writing something ..."
        />
        <div className="info">{this.state.length}</div>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Formulaire;
