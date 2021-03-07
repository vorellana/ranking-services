import axios from 'axios';
import misc from './../utils/misc'
const exp = {}
const headers = misc.getHeaderToken();

// const baseUrl = process.env.REACT_APP_API_MFC;
const baseUrl = 'http://localhost:3000/api';
let response;

exp.getGamesByPlayer = async (idPlayer)  => {
    console.log("Games: Get");
    await axios.get(baseUrl + '/games/' + idPlayer, headers)
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.insertGame = async (idPlayer, score)  => {
    console.log("Game: insert");
    await axios.post(baseUrl + '/games',
        {idPlayer: idPlayer, score: score}, headers)
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;