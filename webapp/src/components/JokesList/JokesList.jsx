import JokeLine from "components/JokeLine/JokeLine";
import { JokeContext } from "contexts/JokeContext"
import { useContext } from "react"



const JokesList = () => {
    const { jokes } = useContext(JokeContext);
  return (
   jokes.map((joke=>
     <JokeLine answer={joke.answer} question={joke.question} />)
  )
  )
}

export default JokesList
