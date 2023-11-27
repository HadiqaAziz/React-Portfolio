import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
          setName(value);
          if (value.trim() === '') {
              setNameError('Name is required');
          } else {
              setNameError('');
          }
      } else if (name === 'email') {
          setEmail(value);
          if (value.trim() === '') {
              setEmailError('Email is required');
          } else if (!isValidEmail(value)) {
              setEmailError('Invalid email address');
          } else {
              setEmailError('');
          }
      } else if (name === 'message') {
          setMessage(value);
      }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setNameError('');
        setEmail('');
        setEmailError('');
        setMessage('');
    };
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

    return (
        <form className="formContainer" onSubmit={handleFormSubmit}>
          <h1>Contact Me</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        {nameError && <span>{nameError}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {emailError && <span>{emailError}</span>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    );
}
