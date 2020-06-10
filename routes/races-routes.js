const Router = require('express-promise-router')
const circuitController = require('../controllers').raceController

const router = new Router()

router.get('/driverpositions/:id', async (req, res) => {
    await circuitController.getDriverPositions(req, res)
})

module.exports = router
