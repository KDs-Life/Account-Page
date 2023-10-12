import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount.jsx";
import NavBar from "./components/Navigation/NavBar.jsx";
import Home from "./components/HomePage/Home.jsx";
import ChatPage from "./components/Chat/ChatPage";

function App() {
  return (
    <>
    
      <NavBar />
      <Home />
      <CreateAccount />
      <ChatPage />
    </>
  );
}

export default App;
