import './App.css';
import CreateAccount from './components/CreateAccount/CreateAccount.jsx';
import NavBar from './components/Navigation/NavBar.jsx';
import Home from './components/HomePage/Home.jsx';
import ChatPage from './components/Chat/ChatPage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/log-in'
          element={
            <CreateAccount isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
          }
        />
        <Route path='/chatpage' element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
