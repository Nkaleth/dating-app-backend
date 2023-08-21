import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';

// App config

const app = express();
const port = process.env.port || 8001;
const connectionUrl = 'mongodb+srv://nsegura:Kaleth123@cluster0.y7ntg95.mongodb.net/?retryWrites=true&w=majority';

// Middleware

// DB Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));

app.post('/dating/cards', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/dating/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
