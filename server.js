const fs = require(`fs`);
const path = require(`path`);

const express = require(`express`);
const { animals } = require(`./data/animals`);

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware to instruct the server to make front-end files available
app.use(express.static(`public`));

// route to index.html
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public/index.html`));
});
// route to animals.html
app.get(`/animals`, (req,res) => {
  res.sendFile(path.join(__dirname, `./public/animals.html`));
});
// route to zookeepers.html
app.get(`/zookeepers`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public/zookeepers.html`));
});
// wildcard for undefined routes. "*" should ALWAYS BE LAST.
app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public/index.html`));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

