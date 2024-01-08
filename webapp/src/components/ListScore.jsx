import { JokeContext } from "contexts/JokeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const ListScore = ({ score }) => {
  const sortedScores = score.sort((a, b) => {
    if (b.value !== a.value) {
      return b.value - a.value; // Sort by score in descending order
    } else {
      return a.date - b.date; // If score is the same, sort by date in ascending order
    }
  });
  return <div>
  <ul>
    {sortedScores.map((score) => (
      <li key={score._id}>
        <p>Score: {score.score}</p>
        <p>Date: {score.date}</p>
      </li>
    ))}
  </ul>
</div>;
};

export default ListScore;
