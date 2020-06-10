const queries = require('../data').racequeries
const utils = require('../utilities')

//No business logic, just passes param to data layer
const getDriverPositions = async (raceid) => {
  try{
    const rawData = await queries.driverPositions(raceid)
    const data = utils.groupBy(rawData, 'name')
    return data
  } catch (err){
      console.log(err.stack)
      throw new Error(err.message)
  }
}

module.exports = {
  getDriverPositions: getDriverPositions
}
