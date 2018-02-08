const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SongSchema = new Schema({
	title:String,
	artist:String,
	genre:String,
	album:String,
	albumImageUrl:String,
	youtubeId:String
})

module.exports = mongoose.model('Song', SongSchema)
