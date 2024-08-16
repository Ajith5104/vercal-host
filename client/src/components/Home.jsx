import React, { useState } from 'react'
import '../index.css'
import axios from 'axios';

function Home() {
    const [messageContent, setMessageContent] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${import.meta.env.VITE_SERVER_APP_URL}/api/messages`, {
                messageContent,
                email,
                name,
            });
            setSuccessMessage('Message sent successfully!');
            setMessageContent('');
            setEmail('');
            setName('');
        } catch (error) {
            console.error('Error posting message', error);
        }
    };
    return (
        <div className='main-container'>
            <h1>Welcome to ManiCodes</h1>
            <img src="/profile.png" alt="" />
            <h2>Post a Message</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message Content:</label>
                    <textarea
                    rows={7}
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Post Message</button>
            </form>
        </div>
    )
}

export default Home