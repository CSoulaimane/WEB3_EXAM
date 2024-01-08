import axios from "axios";

const getJokes = async () => {
    return await axios.get('http://localhost:3001/jokes').then(response => {return response.data;})      
    .catch((error) => console.error('Error fetching jokes:', error));
   
};



export  {getJokes};