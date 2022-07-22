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

         i=0;
           for (i = 0; i < user.livres.length; i++) {
         console.warn("liv._id======" +liv._id);
        console.warn("user.livres["+i+"] ====="+user.livres[i] );
               if(user.livres[i].equals(liv._id))
               { console.warn("okayyyy");
               res.status(201).json({ message: 'livre existant!' });
               }
           }

             console.warn(user.livres.length);
             if(i==user.livres.length) {
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

