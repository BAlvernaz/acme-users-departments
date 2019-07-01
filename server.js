const express = require('express')
const app = express()
const { syncAndSeed } = require('./db')
const PORT = process.env.PORT || 3000

syncAndSeed()

app.use(require('cors')());
app.use(express.urlencoded())
app.use(express.json())
app.use('/api', require('./api'))


app.listen(PORT, ()=> console.log(`listening on Port ${PORT}`))

module.exports = app
