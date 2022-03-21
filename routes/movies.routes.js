const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();


router.get('/', async (req, res, next) => {
    movies = await Movie.find()
    console.log(movies)
    res.render('movies' , {movies})
}
);


router.get('/:movieId', async (req, res, next) => {
    let movieId = req.params.movieId
    movie = await Movie.findById(movieId)
    console.log(movie)
    res.render('movie' , {movie})
}
);


module.exports = router;
