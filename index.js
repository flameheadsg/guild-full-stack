const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Guilds');

mongoose.connect('mongodb://FlameheadSG:ashy007@ds163530.mlab.com:63530/appa-dev');

const app = express();

const Guild = mongoose.model('Guilds');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/', async (req, res) => {
  let Guilds = await Guild.find();
  res.json(Guilds);
});

app.get('/api/:GuildName', async (req, res) => {
  let foundGuild = await Guild.find({
    name: req.params.GuildName
  });
  res.json(foundGuild);
});

app.post('/api/', async (req, res) => {
  let newGuild = await Guild.create(req.body);
  res.json(newGuild);
});

app.post('/api/:GuildName', async (req, res) => {
  let newGuild = await Guild.create(req.body);
  res.json(newGuild);
});

app.put('/api/:GuildName', async (req, res) => {
  let updatedGuild = await Guild.findOneAndUpdate({name: req.params.GuildName}, req.body);
  res.json(updatedGuild);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('guild-client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'guild-client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
