const express = require('express');
const validateRequestBody = require('./path/to/middleware');
const app = express();

app.use(express.json()); // Middleware pour parser le JSON
app.post('/route', validateRequestBody, (req, res) => {
  res.send('Requête réussie!');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});