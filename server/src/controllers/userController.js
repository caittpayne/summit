const User = require("../db/models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  create(req, res) {
    let newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    newUser
      .save()
      .then(user => {
        if (!user) {
          return res.status(400).send();
        }

        return res.status(200).send(user);
      })
      .catch(err => {
        if (err) {
          return res.status(400).send({ error: err });
        }

        return res.status(400).send();
      });
  },

  signIn(req, res) {
    const { email, password } = req.body;

    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(404).send();
        }

        bcrypt
          .compare(password, user.password)
          .then(match => {
            if (!match) {
              return res.status(401).send();
            }

            let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

            return res
              .status(200)
              .header("x-auth", token)
              .send();
          })
          .catch(err => {
            console.log(err)
            return res.status(401).send(err);
          });
      })
      .catch(err => {
        if (err) {
          return res.status(401).send(err);
        }

        res.status(401).send();
      });
  },

  addAltitude(req, res) {
    let newAltitude = {
      altitude: {
        altitude: req.body.altitude,
        unit: req.body.unit
      }
    };

    User.findByIdAndUpdate(req._id, newAltitude, { new: true })
      .then(user => {
        if (!user) {
          return res.status(404).send();
        } else {
          return res.status(200).send();
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  getUser(req, res) {
      User.findOne({_id: req._id}).then((user) => {
          if(!user) {
              return res.status(404).send();
          } 
          return res.status(200).send(user);


      }).catch((err) => {
          console.log(err);
          return res.status(401).send(err);
      });
  },

};
