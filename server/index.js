const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.hhtml'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to wart ${port}!`)) 