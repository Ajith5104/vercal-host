const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./db');
const cors = require('cors');
const Message = require('./models/Message');
const { env } = require('../client/.eslintrc.cjs');
const corsOptions = {
    origin:process.env.APPLICATION_URL,
    methods:["GET","POST","PATCH","DELETE"]
};

const app = express();

connectDB();

app.use(cors(corsOptions));
app.use(bodyParser.json());


// GET all messages
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// POST a new message
app.post('/api/messages', async (req, res) => {
    const { messageContent, email, name } = req.body;
     
    try {
        const newMessage = new Message({
            messageContent,
            email,
            name,
        });

        const message = await newMessage.save();
       return res.json(message);

        res.send(email)
    } catch (err) {
      return  res.status(500).send('Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server started on port ${PORT} yes`));
