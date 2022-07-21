const mongoose = require('mongoose');

const Livre = mongoose.model(
    "Livre",
    new mongoose.Schema({
        libelleLivre: { type: String, required: true },
        typeLivre: { type: String, required: true },
        dateSortieLivre: { type: Date, required: true, default: Date.now },
        nomAuteur: { type: String, required: true },

          
    })
  );
  
  module.exports = Livre;
  