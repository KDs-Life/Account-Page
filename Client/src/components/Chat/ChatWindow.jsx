import { useState, useEffect, useRef } from "react";
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
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const chatWindowRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [
      ...chatMessages,
      { user: "Du", message: newMessage },
    ];
    setChatMessages(updatedMessages);
    setNewMessage("");

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [chatMessages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="chat" ref={chatWindowRef}>
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`user-info ${message.user === "Du" ? "mine" : "yours"}`}>
            <img
              src="https://a.storyblok.com/f/178900/2880x1620/1ac38ba19d/8aa767c3aa80a9185f7614adbba3982d1625731728_main.jpg/m/filters:quality(95)format(webp)"
              alt="Avatar"
            />
            <div className="user-name">{message.user}</div>
            <div className="user-messages">
              <div className="message">{message.message}</div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator-container">
            <div className="typing-indicator" />
            <div className="typing-indicator" />
            <div className="typing-indicator" />
          </div>
        )}
      </div>{" "}
      <div className="new-message">
        <input
          type="text"
          placeholder="Neue Nachricht"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />{" "}
        <button onClick={handleSendMessage}>Senden</button>{" "}
      </div>
    </>
  );
}

export default ChatWindow;
