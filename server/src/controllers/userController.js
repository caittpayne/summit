const User = require('../db/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    create(req, res) {

        let newUser = new User({
            email: req.body.email,
            password: req.body.password,
            altitude: req.body.altitude
        });
    
        newUser.save().then(user => {
            if(!user) {
                return res.status(400).send();
            }
    
            return res.status(200).send(user);
        }).catch(err => {
            if(err) {
                return res.status(400).send({error:err});
            }
    
            return res.status(400).send();
        })
    },

    signIn(req, res) {

        const {email, password} = req.body;

        User.findOne({email}).then((user) => {

            if(!user) {
                return res.status(404).send();
            }

            bcrypt.compare(password, user.password).then((match) => {
                if(!match) {
                    return res.status(401).send();
                }

                let token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

                return res.status(200).header('x-auth', token).send();

            }).catch((err) => {
                return res.status(401).send(err);
            })
        }).catch(err => {
            if(err) {

                return res.status(401).send(err);
            }

            res.status(401).send();
        })
    },

    validateUser(req, res) {

        let obj = {
            message: 'This is a message',
            secret: 'Here is your secret',
            id: req._id
        };

        return res.status(200).send(obj);
    }
}
  