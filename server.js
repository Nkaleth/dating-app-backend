import express from 'express';
import mongoose from 'mongoose';

//App config

const app = express();
const port = process.env.port || 8001;

// Middleware

// DB Config

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
