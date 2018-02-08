const mongoose = require('mongoose')
const passport =  require('passport')
const Song = require('../models/songs')

module.exports = {
  async getSongs (req, res)  {
    try {
      const song = await Song.find().limit(10)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching'
      })
    }
  },
  async saveSongs (req, res) {
    try {
      Song.create(req.body, (err, song) => {
        if (err) {
            console.log(err.message);
            return res.send(err);
        } else {
            res.send({
                success: true,
                song: song
            });
        }
      })
    } catch (err) {
      console.log('-----err------', err)
      res.status(500).send({
        error: 'An error has occured trying to create a song'
      })
    }
  }
}
