import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

// Contact page component
function Contact(props) {

  // use states to handle user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // handles submit event 
  const handleFormSubmit = (e) => {
    // Prevent default behaviour of the form submit (which is to refresh the page)
    e.preventDefault();

    // General validation
    if (!name || !email || !message ) {
        setErrorMessage('Name, email and message are all required')
        return;
    } else if (!validateEmail(email)) {
        setErrorMessage('Email is invalid')
        return;
    }
    
    // Calls onSubmit function passed down via props, passing an object containing name, email, message
    // onSubmit is a callback function (i.e. function that is defined now and called later)
    props.onSubmit({
      name,
      email,
      message
    });

    // Clear Inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  // handles events when changes are made to the input elements
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

return (
  <div className="container p-5">
  <h1 className="text-start mb-4">Contact</h1>
  <form onSubmit={handleFormSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        name="name"
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email:</label>
      <input
        type="text"
        id="email"
        placeholder="Enter your email"
        value={email}
        name="email"
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message:</label>
      <textarea
        id="message"
        placeholder="Enter your message"
        value={message}
        name="message"
        className="form-control"
        onChange={handleInputChange}
      ></textarea>
    </div>
    {errorMessage && (
      <div className="error-message py-4 fs-4">{errorMessage}!</div>
    )}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
  ) 
}


export default Contact;