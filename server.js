const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost/mini_blog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// CETTE PARTIE EST LA PLUS IMPORTANTE
// Elle dit au serveur d'utiliser votre AUTRE fichier
const postRouter = require('./routes/posts');
app.use('/', postRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});