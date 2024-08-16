import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  console.log('API URL:', import.meta.env.VITE_SERVER_APP_URL);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_APP_URL}/api/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="messages-container">
      <h2>All Messages</h2>
      <table className="messages-table">
        <thead>
          <tr>
            <th>Message Content</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message._id}>
              <td>{message.messageContent}</td>
              <td>{message.email}</td>
              <td>{message.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
