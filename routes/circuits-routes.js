const Router = require('express-promise-router')
const controller = require('../controllers')

const router = new Router()
router.get('/fastestlaps/:id', async (req, res) => {
    await controller.circuitController.getFastestLaps(req, res)
})

module.exports = router
