const raceService = require('../services').raceService

//Parses request, passes parameters to service layer, waits for service layer, then responds
const getDriverPositions = async(req, res) => {
  const raceid = req.params.id
  try{
      data = await raceService.getDriverPositions(raceid)
      //if we found some rows, return them, otherwise return message
      if(Object.keys(data).length === 0 && data.constructor === Object){
        res.send("No records found")
      }
      else{
        res.send(data)
      }

  }
  catch (err){
    console.log(err.stack)
    res.send("Error calling query function")
  }
}

module.exports = {
  getDriverPositions: getDriverPositions
}
