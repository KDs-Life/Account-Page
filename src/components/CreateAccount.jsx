import { useState } from "react";
import axios from "axios";

function CreateAccount({ setAccounts }) {
  const [newAccount, setNewAccount] = useState({
    name: "",
    first_name: "", 
    email: "",
    slogan: "",
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
          slogan: "",
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
        type="text"
        name="slogan"
        value={newAccount.slogan}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default CreateAccount;
