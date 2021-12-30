import React, { Component } from "react";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSmileWink } from '@fortawesome/free-solid-svg-icons'

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length,
    isDisabled: true
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
    this.setState({ isDisabled: true });
  };

  handleChange = (e) => {
    const message = e.target.value;
    const length = this.props.length - message.length;

    if (message) this.setState({ isDisabled: false });
    else this.setState({ isDisabled: true });

    this.setState({ message, length });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter" && this.state.message) {
      this.createMessage();
    }
  };

  onEmojiClick = (e, obj) => {
    this.setState({ message: [...this.state.message, obj.emoji] });
  }

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
          pattern="[A-Za-z]{1,}"
          placeholder="Type a message"
        />
        {/* <div className="info">{this.state.length}</div> */}
        <button type="submit" disabled={this.state.isDisabled} className="form__submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    );
  }
}

export default Formulaire;
