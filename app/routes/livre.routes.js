const controller = require("../controllers/livre.controller");

const storage = require('../helpers/storage');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
app.post('/livre/ajouterLivre',storage,controller.ajouterLivre);

app.get('/livre/recupererLivre/:id',controller.recupererLivre);

app.get('/livre/recupererLivres',controller.recupererLivres);

app.put('/livre/modifierArtcile/:id',controller.modifierArtcile);

app.delete('/livre/supprimerLivre/:id',controller.supprimerLivre);

};