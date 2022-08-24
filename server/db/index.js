const mongoose = require("mongoose");


mongoose 
.connect('', {userNewUrlParser: true})
.catch(e => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection 

module.export = db 