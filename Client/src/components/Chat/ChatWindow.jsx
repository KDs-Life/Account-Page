import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ChatWindow.css";

function ChatWindow() {
  const [newMessage, setNewMessage] = useState(""); // Zustand für die neue Nachricht
  const [chatMessages, setChatMessages] = useState([]); // Zustand für alle Chat-Nachrichten
  const [isTyping, setIsTyping] = useState(false); // Zustand für die Anzeige des Tippens
  const chatWindowRef = useRef(); // Referenz für das Chat-Fenster

  useEffect(() => {
    axios.get("https://account-page.onrender.com/accounts").then((response) => {
      const users = response.data; // Benutzerdaten aus der API-Antwort

      // Erstelle ein Mapping für Benutzer-spezifische Nachrichten (Hardcoded für die Demo )
      const userSpecificMessages = {
        Khalid: "Hallo Leute, wie geht's?",
        Spiderman: "Hey He-Man und Chat, bereit für Abenteuer?",
        Someone: "Hallo s, was hast du vor?",
        "Master of the Universe": "Hallo Spiderman & Khalid, was geht?",
        "Son Goku": "Hallo, ich bin Son Goku! Freut mich euch kennenzulernen!,",
        Vegeta: "Kakarott, du bist ein Idiot!!!",
        Batman: "Ich bin Batman....!",
        "Timo-the-Disaster":
          "ICH ZERSTÖRE EUCH ALLE!!! MENSCHEN... WIDERWERTIGE WESEN!!!!",
      };
      // Erstelle eine Liste von Nachrichten, die wir im Chat-Fenster anzeigen werden
      const messages = users.map((user) => ({
        user: user.name,
        message: userSpecificMessages[user.name] || getRandomResponse(),
        avatar: user.image, // Hier fügen wir das Avatar-Feld hinzu
      }));
      setChatMessages(messages);
    });
  }, []); // Leerer Abhängigkeitsarray, diese Funktion wird nur einmal beim Laden der Komponente aufgerufen

  const getRandomResponse = () => {
    // Zufällige Antwort aus einer vordefinierten Liste auswählen.
    // Diese Liste kann beliebig erweitert werden.
    const responses = [
      "Mit großer Macht kommt große Verantwortung.",
      "Ich bin Groot.",
      "Ich bin der Dunkle Ritter.",
      "Das ist ein seltsamer Tag, um in der Sonne zu kämpfen!",
      "Habe ich dir heute schon erzählt, dass ich der Stärkste im Universum bin?",
      "Ich bin bereit, die Welt zu retten, aber zuerst Kaffee!",
      "Glaube an dich selbst und du wirst Großes erreichen.",
      "Kakarott, du bist ein Idiot!",
      "Das Leben ist wie ein Sandwich - je mehr du reingibst, desto besser wird es.",
      "In den Augen der Dunkelheit leuchtet das Licht der Gerechtigkeit.",
      "Ich habe keine Superkraft, ich habe Kaffee.",
      "Ich bin bereit, die Welt zu retten, nach meiner Mittagspause.",
      "Es ist an der Zeit, die Welt zu einem besseren Ort zu machen!",
      "Lasst uns das Böse besiegen und Pizza essen.",
      "Die Macht ist stark in diesem Kaffee.",
      "Nimm das Böse! Und dann lass uns Eiscreme holen.",
      "Ich bin bereit, die Dunkelheit zu vertreiben und das Licht zu umarmen.",
      "Kampf ist mein zweiter Vorname, der erste ist 'Ich trinke meinen Kaffee'.",
      "Du kannst die Welt nicht retten, ohne mindestens eine Tasse Kaffee.",
      "Wer braucht Superkräfte, wenn man Pizza haben kann?",
      "Ich bin kein Held, aber ich kann einen ziemlich guten Eindruck davon machen.",
      "Der Gerechtigkeitssinn ist wie ein Muskel - je mehr du trainierst, desto stärker wird er.",
      "Lass uns die Welt in Ordnung bringen, aber zuerst den Kühlschrank leeren!",
      "Mein Superkraft ist, dass ich nie aufgebe.",
      "Wir können die Welt retten, nachdem wir einen Keks gegessen haben.",
      "Wenn das Leben dir Zitronen gibt, frag nach Salz und Tequila!",
      "Ich kann die Dunkelheit besiegen, aber ich liebe Schokolade zu sehr.",
      "Kaffee ist der Schlüssel zur Gerechtigkeit.",
      "Ich kann fliegen! Aber nur in meinen Träumen.",
      "Die Dunkelheit fürchtet das Licht, aber Kekse nicht.",
      "Das Böse wird niemals gewinnen, solange es Superhelden gibt.",
      "Ich kann unsichtbar werden... in einem Raum voller Pizza.",
      "Es ist an der Zeit, die Welt zu retten, aber zuerst ein Nickerchen!",
      "Ich habe die Macht, aber ich verliere sie immer beim Einkaufen.",
      "Ich werde die Dunkelheit besiegen, aber zuerst Schokolade essen.",
      "Ich bin die Nacht, ich bin der Schatten, ich bin... auf der Suche nach meinem Schlüssel.",
      "Lass uns das Böse bekämpfen und danach ein Eis holen.",
      "Wir sind alle Helden, wenn es um Pizza geht.",
      "Ich kann die Dunkelheit besiegen, aber ich hasse Spinnen!",
      "Die Welt braucht Helden, und auch Kekse.",
      "Ich bin nicht nur ein Superheld, ich bin auch ein guter Freund.",
      "Ich kann die Welt retten, aber zuerst ein Selfie machen.",
      "Mit großer Macht kommt große Verantwortung... für Selfies.",
      "Ich bin bereit, die Welt zu retten, nachdem ich mein Netflix-Binge beendet habe.",
      "Ich kann fliegen, aber nur in meinen Träumen.",
      "Lasst uns die Welt retten und dann Taco essen.",
      "Ich bin ein Held, aber ich verliere immer meine Socken.",
      "Das Böse kann uns nicht besiegen, solange wir genug Kaffee haben.",
      "Ich bin bereit, die Dunkelheit zu vertreiben, nachdem ich aufgewacht bin.",
      "Lass uns die Welt in Ordnung bringen, aber zuerst einen Filmabend machen.",
      "Ich werde das Böse besiegen, nachdem ich ein Nickerchen gemacht habe.",
      "Mit Kaffee und Hoffnung können wir alles erreichen.",
      "Ich bin nicht nur ein Superheld, ich bin auch ein Superfreund.",
      "Die Welt braucht Helden, und auch ein gutes Buch.",
      "Kaffee ist der Schlüssel zum Heldentum.",
      "Ich kann die Dunkelheit besiegen, aber zuerst einen Snack essen.",
      "Mit großer Entschlossenheit kommen große Siege.",
      "Ich kann die Welt retten, nachdem ich meinen Kaffee getrunken habe.",
      "Lasst uns das Böse bekämpfen und dann Kekse essen.",
      "Ich bin bereit, die Dunkelheit zu vertreiben, aber zuerst muss ich aufräumen.",
      "Kampf ist mein zweiter Vorname, aber ich mag lieber Frieden.",
      "Du kannst die Welt nicht retten, ohne zuerst ein Lächeln zu schenken.",
      "Wer braucht Superkräfte, wenn man Freunde hat?",
      "Ich bin kein Held, aber ich kann ein ziemlich gutes Abenteuer haben.",
      "Der Gerechtigkeitssinn ist wie ein Muskel - je mehr du trainierst, desto stärker wird er.",
      "Lass uns die Welt in Ordnung bringen, aber zuerst müssen wir aufräumen.",
      "Mein Superkraft ist, dass ich immer das Beste aus jedem Tag mache.",
      "Wir können die Welt retten, nachdem wir uns ausgeruht haben.",
      "Wenn das Leben dir Zitronen gibt, mach Limonade daraus und teile sie mit Freunden.",
      "Ich kann die Dunkelheit besiegen, aber ich liebe das Licht zu sehr.",
      "Kaffee ist der Schlüssel zur Gerechtigkeit.",
      "Ich kann fliegen! Aber nur in meinen Träumen.",
      "Die Dunkelheit fürchtet das Licht, aber ich fürchte Spinnen.",
      "Das Böse wird niemals gewinnen, solange es Superhelden gibt.",
      "Ich kann unsichtbar werden... in einem Raum voller Kekse.",
      "Es ist an der Zeit, die Welt zu retten, aber zuerst müssen wir lachen.",
      "Ich habe die Macht, aber ich verliere sie immer beim Lachen.",
      "Ich werde die Dunkelheit besiegen, aber zuerst müssen wir tanzen.",
      "Ich bin die Nacht, ich bin der Schatten, ich bin... auf der Suche nach meiner Brille.",
      "Lass uns das Böse bekämpfen und danach Eiscreme essen.",
      "Wir sind alle Helden, wenn es um Freunde geht.",
      "Ich kann die Dunkelheit besiegen, aber ich hasse schlechte Witze!",
      "Die Welt braucht Helden, und auch gute Musik.",
      "Ich bin nicht nur ein Superheld, ich bin auch ein guter Zuhörer.",
      "Ich kann die Welt retten, aber zuerst müssen wir tanzen.",
      "Mit großer Macht kommt große Verantwortung... für Kekse.",
      "Ich bin bereit, die Welt zu retten, nachdem ich gelacht habe.",
      "Ich kann fliegen, aber nur in meinen Träumen.",
      "Lasst uns die Welt retten und dann Kuchen essen.",
      "Ich bin ein Held, aber ich verliere immer meine Schlüssel.",
      "Das Böse kann uns nicht besiegen, solange wir genug gute Laune haben.",
      "Ich bin bereit, die Dunkelheit zu vertreiben, nachdem ich ein Abenteuer erlebt habe.",
      "Lass uns die Welt in Ordnung bringen, aber zuerst müssen wir zusammenhalten.",
      "Ich werde das Böse besiegen, nachdem ich einen Kaffee getrunken habe.",
      "Mit Musik und Freundschaft können wir alles erreichen.",
      "Ich bin nicht nur ein Superheld, ich bin auch ein Super-Tänzer.",
      "Die Welt braucht Helden, und auch gute Geschichten.",
      "Kaffee ist der Schlüssel zum Abenteuer.",
      "Ich kann die Dunkelheit besiegen, aber zuerst müssen wir lachen.",
      "Mit großer Entschlossenheit kommen große Abenteuer.",
      "Ich kann die Welt retten, nachdem ich getanzt habe.",
      "Lasst uns das Böse bekämpfen und dann Kuchen essen.",
      "Ich bin bereit, die Dunkelheit zu vertreiben, aber zuerst müssen wir singen.",
      // Weitere zufällige Antworten hier
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return; // Nachricht darf nicht leer sein.

    const updatedMessages = [
      ...chatMessages,
      { user: "Du", message: newMessage },
    ];

    // Zufälligen Benutzer auswählen, der antworten wird
    // Wir wählen einen zufälligen Benutzer aus der Liste der Benutzer aus, die bereits eine Nachricht gesendet haben.
    const users = chatMessages.map((message) => message.user);
    // Wir entfernen den Benutzer "Du" aus der Liste, da wir nicht wollen, dass der Benutzer auf seine eigene Nachricht antwortet.
    const randomUser = users[Math.floor(Math.random() * users.length)];
    // Wir wählen eine zufällige Antwort aus der Liste der vordefinierten Antworten aus.
    const responseMessage = getRandomResponse();

    // Neue Nachricht hinzufügen,
    //eine zufällige Antwort erstellen und Zustände aktualisieren
    updatedMessages.push({
      user: randomUser,
      message: responseMessage,
      // Wir fügen das Avatar-Feld hinzu,
      //um das Avatar-Bild des Benutzers anzuzeigen, der die Nachricht sendet.
      avatar: chatMessages.find((message) => message.user === randomUser)
        .avatar,
    });

    setChatMessages(updatedMessages); // Chat-Nachrichten aktualisieren
    setNewMessage(""); // Neue Nachricht leeren
    setIsTyping(true); // Anzeigen, dass jemand tippt

    setTimeout(() => {
      setIsTyping(false); // Anzeigen, dass jemand tippt
    }, 4000); // Nach 4 Sekunden aufhören, das Tipp-Indikator anzuzeigen
  };

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [chatMessages]);

  const handleKeyPress = (e) => {
    // Wenn die Eingabetaste gedrückt wird, sende die Nachricht
    if (e.key === "Enter") {
      handleSendMessage(); // Nachricht senden
    }
  };

  return (
    <>
      <div className="chat" ref={chatWindowRef}>
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`user-info ${message.user === "Du" ? "mine" : "yours"}`}>
            <img src={message.avatar} alt="Avatar" />
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
      </div>
      <div className="new-message">
        <input
          type="text"
          placeholder="Neue Nachricht"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Senden</button>
      </div>
    </>
  );
}

export default ChatWindow;
