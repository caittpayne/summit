const jwt = require("jsonwebtoken");
const User = require("../db/models/user");

module.exports = (req, res, next) => {
  let token = req.header("x-auth");

  try {
    let payload = jwt.verify(token, process.env.JWT_SECRET);
    User.findById(payload._id)
      .then(user => {
        if (!user) {
            console.log('cant find user ' + user.email)
          return res.status(401).send();
        }

        req._id = payload._id;
        next();
      })
      .catch(err => {
        if (err) {
            console.log('catch err ' + err)
          return res.status(401).send(err);
        }

        console.log('no error')
        return res.status(401).send();
      });
  } catch (err) {
      console.log('final catch ' + err)
    return res.status(401).send(err);
  }
};
