const express = require('express')
const app = express()

const port=7000


app.listen(port,()=>console.log(`App is listening on port no :${port} !!!`))