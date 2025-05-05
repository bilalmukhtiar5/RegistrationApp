const express = require('express')
const app = express()
const port = 3000
const connectDb = require('./config/connectDb')
const registrationRoute = require('./routes/registration.route')
const cors = require('cors');


app.use(express.json())
app.use(cors())
connectDb();
app.use('/api', registrationRoute)


app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})