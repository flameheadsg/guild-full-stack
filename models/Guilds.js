const mongoose = require('mongoose');
mongoose.Promise = Promise;
const {
  Schema
} = mongoose;

const guildSchema = new Schema({
  name: String,
  gold: Number,
  goldRange: Number,
  gps: Number,
  members1: Number,
  members2: Number,
  members3: Number,
  members4: Number,
  members5: Number,
  members1c: Number,
  members2c: Number,
  members3c: Number,
  members4c: Number,
  members5c: Number,
  sp1: Boolean,
  sp2: Boolean,
  sp3: Boolean
});

mongoose.model('Guilds', guildSchema);
