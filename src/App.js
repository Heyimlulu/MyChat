import React, { Component, createRef } from "react";
import "./App.css";
import "./animation.css";

// Components
import Form from "./components/Form";
import Message from "./components/Message";
import Header from "./components/Header";

// Firebase
import { db } from "./firebase";
import firebase from 'firebase';

// Animation
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  state = {
    messages: [],
    nickname: this.props.match.params.nickname,
    channel: this.props.match.params.channel
  };

  messageRef = createRef();

  componentDidMount() {
    db.collection(this.state.channel)
    .orderBy('timestamp')
    .onSnapshot(snapshot => (
      this.setState({ messages: snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      ))})
    ))
  }

  componentDidUpdate() {
    // Scroll to recent message
    const ref = this.messageRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = (name, message) => {
    // const messages = { ...this.state.messages };
    // messages[`message-${Date.now()}`] = message; // Message format

    // Object.keys(messages)
    //   .slice(0, -10) // Keep the last 10 messages
    //   .forEach((key) => {
    //     messages[key] = null; // Delete the last message
    //   });

    // this.setState({ messages });

    db.collection(this.state.channel).add({
      username: name,
      msg: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    this.setState({ messages: [] });
  };

  isUser = (nickname) => nickname === this.state.nickname;

  render() {
    return (
      <>
        <div className="box">
          <Header channel={this.state.channel} />
          <div className="chatbox">
            <div className="messages" ref={this.messageRef}>
              <TransitionGroup className="message">
                {this.state.messages.map(({ id, data: { username, msg } }) => (
                  <CSSTransition key={id} timeout={200} classNames="fade">
                    <Message
                      nickname={username}
                      message={msg}
                      isUser={this.isUser}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
            <Form
              addMessage={this.addMessage}
              nickname={this.state.nickname}
              length={140}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
