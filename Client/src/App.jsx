import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount.jsx";
import NavBar from "./components/Navigation/NavBar.jsx";
import Home from "./components/HomePage/Home.jsx";
import ChatPage from "./components/Chat/ChatPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
    
      <NavBar />
      <Home />
      <CreateAccount isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      <ChatPage />
    </>
  );
}

export default App;
