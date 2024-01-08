const router = require('express').Router()
const Joke = require('../models/joke')
const { errorHandler } = require('../utils/middlewares');

  // Read
  router.get('/', async (req, res) => {
    try {
      const jokes = await Joke.find();
      res.json(jokes);
    } catch (error) {
    }
  });

    // Read one with id
    router.get('/:id', async (req, res,errorHandler) => {
        try {
          const jokes = await Joke.findById(req.params.id);
          res.json(jokes);
        } catch (error) {
        }
      });


    // delete one from id
    router.delete('/:id', async (req, res,errorHandler) => {
        try {
          const jokes = await Joke.findByIdAndDelete(req.params.id);
          res.json(jokes);
        } catch (error) {
        }
      }
      );
      
      // create one
        router.post('/', async (req, res,errorHandler) => {

            console.log(req.body.question.length<3);
            if(req.body.answer === undefined 
                || req.body.question === undefined || req.body.category===undefined 
                || req.body.answer.length<3 || req.body.category.length<3 || req.body.question.length<3){
                    console.log("testest");
                    return res.sendStatus(400);}
            try {
            const jokes = await Joke.create(req.body);

            res.json(jokes);
            } catch (error) {
            }
        }
        );
module.exports = router