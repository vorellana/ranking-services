import axios from 'axios';
import misc from '../utils/misc'

const exp = {}
const headers = misc.getHeaderToken();
const baseUrl = misc.getBackendUrl();
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