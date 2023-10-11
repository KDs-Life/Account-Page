import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount.jsx";
import NavBar from "./components/Navigation/NavBar.jsx";
import Home from "./components/HomePage/Home.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <CreateAccount />
     
    </>
  );
}

export default App;
