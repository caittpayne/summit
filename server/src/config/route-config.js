module.exports = {
    init(app) {
      const userRoutes = require("../routes/users");
      const privateRoutes = require('../routes/private');
  
      app.use('/user', userRoutes);
      app.use(privateRoutes);
    }
  };
  