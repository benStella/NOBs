const router = require('express').Router()
const path = require('path')

// get main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

// get about page
router.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/about.html'))
})

// get menu page
router.get('/Menu', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/menu.html'))
})

// get contact page
router.get('/Contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/contact.html'))
})

module.exports = router