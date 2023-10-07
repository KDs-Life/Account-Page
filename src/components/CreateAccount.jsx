import { useState } from "react";
import axios from "axios";
import "./CreateAccount.css";

function CreateAccount({ setAccounts }) {
  const [newAccount, setNewAccount] = useState({
    name: "",
    first_name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("DEINE_API_URL_HIER", newAccount) // Ersetze "DEINE_API_URL_HIER" durch die richtige URL
      .then((response) => {
        console.log("Great:", response.data);
        alert("New Account created, welcome Padawan!");
        setAccounts((prevAccounts) => [...prevAccounts, response.data]);
        setNewAccount({
          name: "",
          first_name: "",
          email: "",
          image: "",
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="create-account-container">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={newAccount.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="first_name"
              value={newAccount.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="email"
              value={newAccount.email}
              onChange={handleChange}
              placeholder="E-Mail"
              required
            />

            <input
              type="password"
              name="password"
              value={newAccount.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleSubmit}
              placeholder= "Picture"
            />

            <button type="submit">Create Account</button>
          </form>
        </div>
        <div className="middle"></div> {/* LINE */}
        <div className="right">
          {/* Bild oder Ihre Animation einfügen */}
          {/* Zum Beispiel: */}
          <img src="path/to/your/image.png" alt="Your Image" />
        </div>
      </div>
    </>
  );
}

export default CreateAccount;