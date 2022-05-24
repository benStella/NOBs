const router = require('express').Router()
const { body, validationResult } = require('express-validator')

const bodyparser = require('body-parser')
const { json } = require('express/lib/response')
const urlencodedParses = bodyparser.urlencoded({ extended: false })

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))

// router.post('/Contact-us',
// body('fName', 'lName').isAlpha(),
// body('email').isEmail(),
// body('eventLocation').matches(/^[A-Za-z0-9 .,'!&]+$/),
// body('phoneNum').isNumeric(),
// body('nameOfEvent').matches(/^[A-Za-z0-9 .,'!&]+$/)
// , (req, res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         res.send(`<p>server rejected following fields</p><ul><li>${JSON.stringify(errors)}</li></ul>`)
//         // res.send(errors)
//     }
// })

module.exports = router