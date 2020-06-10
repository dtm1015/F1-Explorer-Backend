const queries = require('../data').circuitqueries

//No business logic, just passes param to data layer
const getFastestLaps = async (circuitid) => {
  try{
    const data = await queries.fastestLaps(circuitid)
    return data
  } catch (err){
      console.log(err.stack)
      throw new Error(err.message)
  }
}

//No business logic, just passes param to data layer
const getCircuitInfo = async (circuitid) => {
  try{
    const data = await queries.info(circuitid)
    return data
  } catch (err){
      console.log(err.stack)
      throw new Error(err.message)
  }
}

//No business logic, just passes param to data layer
const getRaceDates = async (circuitid) => {
  try{
    const data = await queries.raceDates(circuitid)
    return data
  } catch (err){
      console.log(err.stack)
      throw new Error(err.message)
  }
}

module.exports = {
  getFastestLaps: getFastestLaps,
  getCircuitInfo: getCircuitInfo,
  getRaceDates: getRaceDates
}
