const mongoose = require('mongoose');

// const movieSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     released: {
//         type: String
//     },
//     year:{
//         type: Number
//     }
// }, { collection: 'movies' });

const movieSchema = new mongoose.Schema({}, { collection: 'films' });
module.exports = mongoose.model('Movie', movieSchema);

//module.exports = mongoose.model('sample_mflix.movies', MovieSchema);


