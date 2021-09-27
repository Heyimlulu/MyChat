import React, { Component, createRef } from "react";
import "./App.css";
import "./animation.css";

// Components
import Form from "./components/Form";
import Message from "./components/Message";
import Header from "./components/Header";

// Firebase
import base from "./base";

// Animation
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  state = {
    messages: {},
    nickname: this.props.match.params.nickname,
    channel: this.props.match.params.channel
  };

  messageRef = createRef();

  // Sync messages for the channel
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.channel}`, {
      context: this,
      state: "messages"
    });
  }

  componentDidUpdate() {
    // Scroll to recent message
    const ref = this.messageRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message; // Message format

    Object.keys(messages)
      .slice(0, -10) // Keep the last 10 messages
      .forEach((key) => {
        messages[key] = null; // Delete the last message
      });

    this.setState({ messages });
  };

  isUser = (nickname) => nickname === this.state.nickname;

  render() {
    const messages = Object.keys(this.state.messages).map((key) => (
      <CSSTransition key={key} timeout={200} classNames="fade">
        <Message
          nickname={this.state.messages[key].nickname}
          message={this.state.messages[key].message}
          isUser={this.isUser}
        />
      </CSSTransition>
    ));

    return (
      <div className="box">
        <Header channel={this.state.channel} />
        <div>
          <div className="messages" ref={this.messageRef}>
            <TransitionGroup className="message">{messages}</TransitionGroup>
          </div>
          <Form
            addMessage={this.addMessage}
            nickname={this.state.nickname}
            length={140}
          />
        </div>
      </div>
    );
  }
}

export default App;
