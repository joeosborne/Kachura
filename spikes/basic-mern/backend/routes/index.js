var express = require('express');
var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   res.json("yada2");
// });
//
// module.exports = router;

const Movie = require('../models/movie');


router.get('/', async (req, res) => {
  try {
            const movies = await Movie.find({
            year: 1999
        })
        // const movies = await Movie.find()
        //     .select('title year') // Include only `title` and `year`
        //     .limit(5); // Limit results to 20 documents

    //const movies = await Movie.find(); // Fetch all movies
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  // console.log('yo')
  // try {
  //   //const movies = await Movie.find(x=>x.title);
  //   //const movies = await Movie.find().populate('user', ['name', 'avatar']);
  //   const movies = await Movie.find({  year: 1999 });
  //   console.log('movies...')
  //   console.log(movies)
  //   res.json(movies);
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).send('Server Error');
  // }
});

// router.get('/', async (req, res) => {
//   try {
//     const profiles = await Profile.find().populate('user', ['name', 'avatar']);
//     res.json(profiles);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


module.exports = router;
