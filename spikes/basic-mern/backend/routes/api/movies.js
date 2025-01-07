// const express = require('express');
// const router = express.Router();
//
// const Movie = require('../../models/movie');
//
//
// router.get('api/movies/', async (req, res) => {
//     console.log('yo')
//     try {
//         // const movies = await Movie.find();
//         // res.json(movies);
//
//         const movies = await Movie.find({
//             year: 1998
//         })
//         // const movies = await Movie.find()
//         //     .select('title year') // Include only `title` and `year`
//         //     .limit(5); // Limit results to 20 documents
//
//         res.json(movies);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });
//
//
// module.exports = router;
