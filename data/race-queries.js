const db = require('./connect')

const driverPositions = async function driverPositions(raceid){
  const queryText = 'SELECT lap, position, concat(drivers.forename, \' \', drivers.surname) AS name ' +
                      'FROM laptimes INNER JOIN drivers on laptimes.driverid = drivers.driverid '+
                      'WHERE raceid = $1'
  const value = [raceid]

  const data = await db.query(queryText, value)
  return data.rows
}

module.exports = {
  driverPositions: driverPositions
}
