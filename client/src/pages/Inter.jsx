import { useState } from "react";

export function Inter() {
  const [name, setName] = useState("");          
  const [message, setMessage] = useState("");   
  const [messages, setMessages] = useState([]);  

  const handleNameChange = (event) => {
    const enteredName = event.target.value;
    // Ensure name is between 1 and 20 characters
    if (enteredName.length <= 20) {
      setName(enteredName);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length >= 1 && message.trim().length > 0) {
      
      setMessages([...messages, { name, message }]);
      setMessage("");  
    }
  };

  return (
    <div className="chat-container">
      {name ? (
        <h2>Welcome, {name}!</h2>
      ) : (
        <div>
          <label htmlFor="name">Enter your name (1-20 characters): </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            minLength={3}
            maxLength={20}
            placeholder="Your name"
          />
        </div>
      )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Enter your message: </label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
         <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index}><strong>{msg.name}:</strong> {msg.message}</p>
          ))}
        </div>
      </div>
    </div>
  );
}