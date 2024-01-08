import React, { useState } from 'react';

const AddScoreForm = ({ onAddScore,jokeId }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleScoreChange = (e) => {
    const inputScore = e.target.value;
    if (/^\d{0,10}$/.test(inputScore) && inputScore >= 0 && inputScore <= 10) {
      setScore(inputScore);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and score are provided
    if (username.trim() !== '' && score !== '') {
      // Call the parent component's callback function
      onAddScore({ username, score: parseInt(score, 10),joke:jokeId });

      // Reset the form fields
      setUsername('');
      setScore('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Score (0-10):
        <input type="text" value={score} onChange={handleScoreChange} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddScoreForm;
