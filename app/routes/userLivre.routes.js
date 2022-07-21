const controller = require("../controllers/userLivre.controller");

const storage = require('../helpers/storage');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  


app.put('/ajouterLivreToUser',controller.ajouterLivresToUser);
app.put('/retirerLivreToUser',controller.retirerLivresToUser);



};