import express from 'express';
import data from './data.js';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('This is route for our backend');
});

app.get('/about', (req, res) => {
  res.send('This is about page');
});
app.get('/contact', (req, res) => {
  res.send('This is contact page');
});

app.get('/products/api', (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
