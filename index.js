const express = require('express')
const mongoose = require('mongoose')
const authRoter = require('./auth.routes')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRoter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.amepj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()