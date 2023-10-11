import React, { useState } from "react";
import "./ChatWindow.css";

function ChatWindow() {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      user: "Du",
      message: "Hallo!",
    },
    {
      user: "Anderer Benutzer",
      message: "Hi, wie geht's?",
    },
    // Weitere Nachrichten hier
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [
      ...chatMessages,
      { user: "Du", message: newMessage },
    ];
    setChatMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <>
      <div className="chat">
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`user-info ${message.user === "Du" ? "mine" : "yours"}`}>
            <img src="URL_DES_AVATARS" alt="Avatar" />
            <div className="user-messages">
              <div className="message">{message.message}</div>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className="new-message">
        <input
          type="text"
          placeholder="Neue Nachricht"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </div>{" "}
      <button onClick={handleSendMessage}>Senden</button>
    </>
  );
}

export default ChatWindow;
