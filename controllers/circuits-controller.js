const services = require('../services')

//Parses request, passes parameters to service layer
const getFastestLaps = async(req, res) => {
  const circuitid = req.params
  try{
      data = await services.circuitService.getFastestLaps(circuitid)
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

module.exports = {
  getFastestLaps: getFastestLaps
}
