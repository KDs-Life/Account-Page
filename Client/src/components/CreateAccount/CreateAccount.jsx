/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import './CreateAccount.css';

function CreateAccount({ setAccounts, isLoggedIn, toggleLogin }) {
  const [newAccount, setNewAccount] = useState({
    name: '',
    family_name: '',
    email: '',
    password: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://account-page.onrender.com/accounts', newAccount) // hier nach dem repo update: https://account-page.onrender.com/accounts
      .then((response) => {
        console.log('Great:', response.data);
        alert('New Account created, welcome Hero!');
        setAccounts((prevAccounts) => [...prevAccounts, response.data]);
        setNewAccount({
          first_name: '',
          name: '',
          family_name: '',
          email: '',
          image: '',
        });
      })
      .catch((error) => {
        console.error('Error', error);
        if (error.response) {
          console.log('Server response:', error.response.data);
        }
      });
  };

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='create-account-container'>
        <div className='left'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              value={newAccount.name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
            <input
              type='text'
              name='family_name'
              value={newAccount.family_name}
              onChange={handleChange}
              placeholder='Family Name'
              required
            />
            <input
              type='email'
              name='email'
              value={newAccount.email}
              onChange={handleChange}
              placeholder='E-Mail'
              required
            />

            <input
              type='password'
              name='password'
              value={newAccount.password}
              onChange={handleChange}
              placeholder='Password'
              required
            />
            <input
              type='text'
              name='image'
              value={newAccount.image}
              onChange={handleChange}
              placeholder='Image URL'
            />
            <div className='account-btn'>
              {isLoggedIn ? (
                <button type='button' onClick={toggleLogin}>
                  Logout
                </button>
              ) : (
                <button type='submit'>Create Account</button>
              )}
            </div>
          </form>
        </div>
        <div className='middle'></div>
        <div className='right'>
          <img src='https://picsum.photos/id/237/536/354' alt='Your Image' />
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
