import React, { Component } from "react";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.createMessage();
  };

  createMessage = () => {
    const { addMessage, nickname, length } = this.props;

    addMessage(nickname, this.state.message);

    // Reset
    this.setState({ message: "", length });
  };

  handleChange = (e) => {
    const message = e.target.value;
    const length = this.props.length - message.length;

    this.setState({ message, length });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
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
        <input
          type="text"
          require
          maxLength={this.props.length}
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type a message"
        />
        {/* <div className="info">{this.state.length}</div> */}
        <button type="submit" className="form__submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    );
  }
}

export default Formulaire;
