import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ChatWindow.css";

function ChatWindow() {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef();

  useEffect(() => {
    axios.get("https://account-page.onrender.com/accounts").then((response) => {
      const users = response.data;
      // Erstelle ein Mapping für Benutzer-spezifische Nachrichten
      const userSpecificMessages = {
        Khalid: "Hallo Leute, wie geht's?",
        Spiderman: "Hey He-Man und Chat, bereit für Abenteuer?",
        Someone: "Hallo s, was hast du vor?",
        "Master of the Universe": "Hallo Spiderman & Khalid, was geht?",
        "Son Goku": "Hallo, ich bin Son Goku! Freut mich euch kennenzulernen!,",
        Vegeta: "Kakarott, du bist ein Idiot!!!",
        Batman: "Ich bin Batman....!",
      };

      const messages = users.map((user) => ({
        user: user.name,
        message: userSpecificMessages[user.name] || "Hey!",
        avatar: user.image, // Hier fügen wir das Avatar-Feld hinzu
      }));
      setChatMessages(messages);
    });
  }, []);

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
              src={message.avatar} // Hier verwenden wir das Avatar-Feld aus den API-Daten
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
