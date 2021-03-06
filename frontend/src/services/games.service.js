import axios from 'axios';

const exp = {}

// const baseUrl = process.env.REACT_APP_API_MFC;
const baseUrl = 'http://localhost:3000/api';
let response;

exp.getGamesByPlayer = async (idPlayer)  => {
    console.log("Games: Get");
    await axios.get(baseUrl + '/games/' + idPlayer)
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.insertGame = async (idPlayer, score)  => {
    console.log("Game: insert");
    await axios.post(baseUrl + '/games',
        {idPlayer: idPlayer, score: score})
    .then( res => {
        response = res.data;
    })
    return response;
}


export default exp;