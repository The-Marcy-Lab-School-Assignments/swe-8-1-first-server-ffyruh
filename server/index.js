// server setup
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// middleware
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};
app.use(logRoutes);
app.use(express.static(path.join(__dirname, '../app/dist')));


// endpoints
app.get('/api/picture', async (req, res) => {
  try {
    const catResponse = await fetch('https://cataas.com/cat?json=true');
    const catURL = await catResponse.json();
    return res
      .status(200)
      .send({
        src: catURL.url
      })
  } catch {
    return res
      .status(404)
      .send('error');
  }
});

app.get('/api/joke', async (req, res) => {
  try {
    const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    const jokeJSON = await jokeResponse.json();
    return res
      .status(200)
      .send({
        setup: jokeJSON.setup,
        delivery: jokeJSON.delivery
      })
  } catch {
    return res
      .status(404)
      .send('error');
  }
});

app.get('/api/rollDie', (req, res) => {
  let { quantity } = req.query;
  if (!quantity) quantity = 1; // default
  quantity = parseInt(quantity); // parse as int
  if (Number.isNaN(quantity)) {
    return res
      .status(404)
      .send('invalid quantity!');
  }
  // if quantity === 0, just use 1 instead
  const rolls = new Array(quantity || 1).fill(0).map(() => Math.ceil(Math.random() * 6));
  return res
    .status(200)
    .send({
      rolls: rolls
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}...`);
})

