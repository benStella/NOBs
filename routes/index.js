const router = require('express').Router()

const htmlRoutes = require('./htmlRoutes')
const contactRoutes = require('./contactRoutes')

router.use(htmlRoutes)
router.use(contactRoutes)

module.exports = router