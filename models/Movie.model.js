const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = 
    {
      title: {type : String, unique : true},
      director: String,
      stars: [String],
      image: String,
      description: String,
      showtimes: [String]
    }

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie



