import express from 'express';
import mongoose from 'mongoose';

// App config

const app = express();
const port = process.env.port || 8001;
const connectionUrl = 'mongodb+srv://nsegura:Kaleth123@cluster0.y7ntg95.mongodb.net/?retryWrites=true&w=majority';

// Middleware

// DB Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopoly: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
