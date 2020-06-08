const mongoose = require('mongoose')

let listSchema = new mongoose.Schema({
    title: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: false}
})

module.exports = mongoose.model('Lista', listSchema)
