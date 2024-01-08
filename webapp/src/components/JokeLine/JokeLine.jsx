import { JokeContext } from "contexts/JokeContext"
import { useContext } from "react"



const JokeLine = (props) => {

  return (
   <p>{props.question} :: {props.answer}</p>
  )
}

export default JokeLine
