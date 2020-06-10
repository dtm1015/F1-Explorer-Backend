const circuits = require('./circuits-routes')
const races = require('./races-routes')

module.exports = app => {
  app.use('/circuits', circuits)
  app.use('/races', races)
  // etc..
}
