const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect('mongodb+srv://snael:<PASSWORD>@cluster0.qafvs.mongodb.net/ListOfLegends?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connexion à MongoDB OK !'))
    .catch(() => console.log('Connexion à MongoDB KO !'));
};
