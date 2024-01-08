const router = require("express").Router();
const Score = require("../models/score");
const Joke = require("../models/joke");
const { errorHandler } = require("../utils/middlewares");

// Read
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (error) {}
});

// create one
router.post("/", async (req, res, errorHandler) => {
    if(req.body.username === undefined || req.body.score === undefined || req.body.date === undefined){
        return res.sendStatus(400);
    }
  try {
    const jokeExists = await Joke.findOne({ joke: req.body.joke });
    const scoreExists = await Score.findOne({ username: req.body.username, joke: req.body.joke });
  
    if (jokeExists === null) {
      return res.sendStatus(400);
    }
  
    if (scoreExists !== null) {
      return res.sendStatus(400);
    }
    const scores = await Score.create(req.body);

    res.json(scores);
  } catch (error) {

  }
});
module.exports = router;
