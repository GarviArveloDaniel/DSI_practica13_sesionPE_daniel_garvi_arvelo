import express from 'express';
import './db/mongoose.js';
import { Card } from './models/card.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/cards', (req, res) => {
  const card = new Card(req.body);

  card.save().then((card) => {
    res.send(card);
  }).catch((error) => {
    res.send(error);
  });
});

app.get('/cards', (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  Card.find(filter).then((cards) => {
    if (cards.length !== 0) {
      res.send(cards);
    } else {
      res.status(404).send();
    }
  }).catch(() => {
    res.status(500).send();
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});