import { JokeContext } from "contexts/JokeContext"
import { useContext } from "react"
import { useParams } from "react-router-dom";
import ListScore from "./ListScore";
import AddScoreForm from "./form";


const ViewOne = () => {
  const {getJokeWithScore,addScore} = useContext(JokeContext);
  const id = useParams().id;
  const joke = getJokeWithScore(id);
  console.log(joke);
  return (
    <>   
    <h1>{joke.question} === {joke.answer} =========: {joke.category}</h1>
    <h1>Score: {joke.averageScore}</h1>
    <ListScore score={joke.score}/>
    <AddScoreForm onAddScore={addScore} jokeId={joke.id} />
    </>


    
   )
}

export default ViewOne
