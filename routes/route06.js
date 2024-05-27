const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/page1',(req, res) => {
    res.sendFile(path.join(__dirname,'../views','form.html'))
})

router.post('/page2', (req,res) => {
    console.log(req.body)
    res.send(`<h1>Hello from page 2 </h1>
    <p>Hello, ${req.body.name}</p>`)
})

router.get('/',(req, res, next) => {
    res.send('<h1>Hello from express </h1>')
})

module.exports = router