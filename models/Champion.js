const mongoose = require('mongoose');

const championSchema = mongoose.Schema({
  id: { type: String },
  key: { type: String },
  name: { type: String },
  title: { type: String },
  lore: { type: String },
  info: {
    attack: { type: Number },
    defense: { type: Number },
    magic: { type: Number },
    difficulty: { type: Number },
  },
  image: {
    full: { type: String },
    sprite: { type: String },
    group: { type: String },
  },
  tags: { type: Array },
  partype: { type: String },
  stats: {
    hp: { type: Number },
    hpperlevel: { type: Number },
    mp: { type: Number },
    mpperlevel: { type: Number },
    movespeed: { type: Number },
    armor: { type: Number },
    armorperlevel: { type: Number },
    spellblock: { type: Number },
    spellblockperlevel: { type: Number },
    attackrange: { type: Number },
    hpregen: { type: Number },
    hpregenperlevel: { type: Number },
    mpregen: { type: Number },
    mpregenprelevel: { type: Number },
    crit: { type: Number },
    critperlevel: { type: Number },
    attackdamage: { type: Number },
    attackdamageperlevel: { type: Number },
    attackspeedperlevel: { type: Number },
    attackspeed: { type: Number },
  }
});

module.exports = mongoose.model('Champion', championSchema);
