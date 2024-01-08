import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {getJokes} from '../services/jokeApi'
import {getScore,addScore as addScoreAPI} from '../services/scoreApi'
const JokeContext = createContext(null);

const JokeProvider = ({ children }) => {
  const [jokesFetched, setJokesFetched] = useState([]);
  const [scoresFetched, setScoresFetched] = useState([]);

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setJokesFetched(await getJokes());
      setScoresFetched(await getScore());
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (jokesFetched.length > 0 && scoresFetched.length > 0) {
      const updatedJokes = jokesFetched.map(joke => {
        const jokeScores = scoresFetched.filter(score => score.joke === joke.id);
        const scoreCount = jokeScores.length;
        const sumScores = jokeScores.reduce((sum, e) => sum + e.score, 0);
        const averageScore = scoreCount!=0? sumScores/scoreCount:0;
        //console.log(averageScore);
        return {
          ...joke,
          scoreCount,
          averageScore: isNaN(averageScore) ? 0 : averageScore, 
        };
      });

      // Set the updated jokes state
      setJokes(updatedJokes);
    }
  }, [jokesFetched, scoresFetched]);


  const getJokeWithScore=(id)=>{
    const jokeToReturn= jokes.find(joke=>joke.id===id)
    const scoreToReturn= scoresFetched.filter(e=>e.joke===id)
    return {...jokeToReturn,score:scoreToReturn}
  };

  const addScore = async (score) => {
    const newScore = await addScoreAPI(score);
    if(newScore===undefined)return ;
    setScoresFetched([...scoresFetched, newScore]);
  };
  return (
    <JokeContext.Provider value={{ jokes, getJokeWithScore,addScore}}>
      {children}
    </JokeContext.Provider>
  );
};

export { JokeProvider, JokeContext };
