import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';

// App config

const app = express();
const port = process.env.port || 8001;
const connectionUrl = 'mongodb+srv://nsegura:Kaleth123@cluster0.y7ntg95.mongodb.net/?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));

app.post('/dating/cards', async (req, res) => {
  const dbCard = req.body;
  try {
    const data = await Cards.create(dbCard);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/dating/cards', async (req, res) => {
  try {
    const data = await Cards.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
