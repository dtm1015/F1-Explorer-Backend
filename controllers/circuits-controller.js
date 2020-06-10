const circuitService = require('../services').circuitService

//Parses request, passes parameters to service layer, waits for service layer, then responds
const getFastestLaps = async(req, res) => {
  const circuitid = req.params.id
  try{
      data = await circuitService.getFastestLaps(circuitid)
      //if we found some rows, return them, otherwise return message
      if(data.length > 0){
        res.send(data)
      }
      else{
        res.send("No records found")
      }

  }
  catch (err){
    console.log(err.stack)
    res.send("Error calling query function")
  }
}

//Parses request, passes parameters to service layer, waits for service layer, then responds
const getCircuitInfo = async(req, res) => {
  const circuitid = req.params.id
  try{
      data = await circuitService.getCircuitInfo(circuitid)
      //if we found some records, send them, otherwise send message
      if(data.length > 0){
        res.send(data)
      }
      else{
        res.send("No records found")
      }

  }
  catch (err){
    console.log(err.stack)
    res.send("Error calling query function")
  }
}

const getRaceDates = async(req, res) => {
  const circuitid = req.params.id
  try{
      data = await circuitService.getRaceDates(circuitid)
      //if we found some records, send them, otherwise send message
      if(data.length > 0){
        res.send(data)
      }
      else{
        res.send("No records found")
      }

  }
  catch (err){
    console.log(err.stack)
    res.send("Error calling query function")
  }
}

module.exports = {
  getFastestLaps: getFastestLaps,
  getCircuitInfo: getCircuitInfo,
  getRaceDates: getRaceDates
}
