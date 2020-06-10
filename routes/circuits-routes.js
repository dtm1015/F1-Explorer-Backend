const Router = require('express-promise-router')
const circuitController = require('../controllers').circuitController

const router = new Router()
router.get('/fastestlaps/:id', async (req, res) => {
    await circuitController.getFastestLaps(req, res)
})

router.get('/info/:id', async (req, res) => {
    await circuitController.getCircuitInfo(req, res)
})

router.get('/racedates/:id', async (req, res) => {
    await circuitController.getRaceDates(req, res)
})



module.exports = router
