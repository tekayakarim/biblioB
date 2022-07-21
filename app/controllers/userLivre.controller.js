const db = require("../models");
const controller = require("./livre.controller");
const { user } = require("../models");
const Livre = db.livre;
const User = db.user;

exports.ajouterLivresToUser=async (req, res, next) => {
  var livre;
    Livre.findOne( req.libelleLivre ) .then((liv) => {
        
        console.warn(liv);
        User.findOne( req.email ).then((user)=>{console.warn(user);
            if(User.find(liv))
            res.status(201).json({ message: 'livre existant!' })
            else {
            user.livres.push(liv);
            User.updateOne(user)
            .then((user) => res.status(201).json({ message: 'livre ajoutee!' }))
            }
        });
    });
 
};
exports.retirerLivresToUser=async (req, res, next) => {
    var livre;
      Livre.findOne( req.libelleLivre ) .then((liv) => {
          
          console.warn(liv);
          User.findOne( req.email ).then((user)=>{console.warn(user);
              if(User.find(liv))
              {
                  user.livres.remove(liv);
              User.updateOne(user)
              .then((user) => res.status(201).json({ message: 'livre retiree!' }));
              }
              else {
                res.status(201).json({ message: 'livre inexistant!' })
              }
          });
      });
   
  };

