const db = require("../models");
const Livre = db.livre;

exports.ajouterLivre=async (req, res, next) => {
    delete req.body._id;
    const livre = new Livre({
        ...req.body
    });
   
    livre.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupererLivre= (req, res, next) => {
    Livre.findOne({ _id: req.params.id })
        .then(livre => res.status(200).json(livre))
        .catch(error => res.status(404).json({ error }));
};

exports.recupererLivres= (req, res, next) => {
    Livre.find()
        .then(Livres => res.status(200).json(Livres))
        .catch(error => res.status(404).json({ error }));
};

exports.modifierArtcile= (req, res, next) => {
    Livre.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.supprimerLivre= (req, res, next) => {
    Livre.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};