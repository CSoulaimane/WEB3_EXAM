import axios from "axios";

const getScore = async () => {
    return await axios.get('http://localhost:3001/scores').then(response => {return response.data;})  
    .catch((error) => console.error('Error fetching jokes:', error));

};

const addScore = async (score,id)=>{
    const currentDate = new Date();
    const isoDateString = currentDate.toISOString();
    
    const object = { score:score.score,username:score.username,joke:score.joke, date: isoDateString };
    console.log(object);
    return await axios.post('http://localhost:3001/scores',object).then(response => {return response.data;})  
    .catch((error) => console.error('Error fetching jokes:', error));
}
export  {getScore,addScore};