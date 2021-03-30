const Champion = require('../models/Champion');

exports.createChampion = (req, res) => {
  // const champItem = JSON.parse(req.body);
  // delete champItem._id;
  console.log(req.body.champ);
  const champ = new Champion({
    ...req.body.champ,
  });
  champ.save()
    .then(() => res.status(200).json({ message: 'Champion saved !' }))
    .catch((error) => res.status(400).json({ error }))
};

exports.findAllChampions = (req, res) => {
  Champion.find()
    .then((champions) => res.status(200).json(champions))
    .catch((error) => res.status(400).json({ error }))
}
