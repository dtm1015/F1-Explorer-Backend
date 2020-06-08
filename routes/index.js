const circuits = require('./circuits-routes')
module.exports = app => {
  app.use('/circuits', circuits)
  // etc..
}
