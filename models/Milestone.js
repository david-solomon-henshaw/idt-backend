const mongoose = require('mongoose')

const Schema = mongoose.Schema


const activitySchema = new Schema({
    date: { type: Date, required: true },
    activity: { type: String, required: true }
}, { timestamps: true })


module.exports = mongoose.model('Milestone', activitySchema)

