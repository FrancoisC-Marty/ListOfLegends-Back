const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect('mongodb+srv://snael:1AuZbTk6EdLoF5Wy@cluster0.qafvs.mongodb.net/ListOfLegends?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connexion à MongoDB OK !'))
    .catch(() => console.log('Connexion à MongoDB KO !'));
};
