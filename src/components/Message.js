import React from "react";

const Message = ({ nickname, message, isUser }) => {
  if (isUser(nickname)) {
    return <p className="user-message">{message}</p>;
  } else {
    return (
      <p className="not-user-message">
        <strong>{nickname}: </strong>
        {message}
      </p>
    );
  }
};

export default Message;
