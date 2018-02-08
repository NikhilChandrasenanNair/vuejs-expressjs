const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SongSchema = new Schema({
	title:String
})

module.exports = mongoose.model('Song', SongSchema)
