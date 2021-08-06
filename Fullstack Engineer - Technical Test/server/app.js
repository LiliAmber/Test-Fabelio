const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 