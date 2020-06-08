const db = require('./connect')
//Given a circuit id, return the fastest laps from each year a race was run
var fastestLaps = async function fastestLaps(circuitid){
  //raw query text, separated into lines for readability
  const queryText = 'SELECT concat(drivers.forename, \' \', drivers.surname) AS name, fastlaps.time, races.year ' +
                    'FROM (SELECT laptimes.driverid, laptimes.raceid, laptimes.time FROM ' +
                    '(SELECT raceid, MIN(time) as time FROM laptimes GROUP BY raceid) as fastlaps ' +
                    'INNER JOIN laptimes ON fastlaps.raceid = laptimes.raceid AND fastlaps.time = laptimes.time) as fastlaps ' +
                    'INNER JOIN races ON (fastlaps.raceid = races.raceid) ' +
                    'INNER JOIN drivers ON (fastlaps.driverid = drivers.driverid) ' +
                    'WHERE races.circuitid = $1 ' +
                    'ORDER BY fastlaps.time'
  //param
  const value = [circuitid.id]

  try{
    //async query db
    const data = await db.query(queryText, value)
    return data.rows
  } catch (err){
    //if there's an error, log it and pass it up the layers
    console.log(err.stack)
    throw new Error(err.message)
  }
}

module.exports.fastestLaps = fastestLaps
