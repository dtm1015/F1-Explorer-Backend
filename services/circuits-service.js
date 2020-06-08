const queries = require('../data')

//No business logic, just passes data up another layer
const getFastestLaps = async (circuitid) => {
  try{
    const rows = await queries.queries.fastestLaps(circuitid)
    return rows
  } catch (err){
      console.log(err.stack)
      throw new Error(err.message)
  }
}

module.exports = {
  getFastestLaps: getFastestLaps
}
