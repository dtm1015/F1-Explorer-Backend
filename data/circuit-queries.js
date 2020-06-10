const db = require('./connect')

//Given a circuit id, return the fastest laps from each year a race was run
const fastestLaps = async function fastestLaps(circuitid){
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
  const value = [circuitid]
  const data = await db.query(queryText, value)
  return data.rows
}

//given a circuitid, return all circuit info
const info = async function info(circuitid){
  const queryText = 'SELECT * FROM circuits WHERE circuitid = $1'
  const value = [circuitid]

  const data = await db.query(queryText, value)
  return data.rows
}

//given a circuitid, return date of the first and most recent race, and numraces
const raceDates = async function raceDates(circuitid){
  const queryText = 'SELECT MIN(date) as first, MAX(date) as recent, COUNT(date) as numraces ' +
                      'FROM races ' +
                      'WHERE circuitid = $1'
  const value = [circuitid]
  
  const data = await db.query(queryText, value)
  return data.rows
}

module.exports = {
  fastestLaps: fastestLaps,
  info: info,
  raceDates: raceDates
}
