import axios from 'axios';
import misc from '../utils/misc'

const exp = {}
const headers = misc.getHeaderToken();
const baseUrl = misc.getBackendUrl();
let response;

exp.getRanking = async ()  => {
    console.log("Ranking: Get");
    await axios.get(baseUrl + '/ranking', headers)
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.getRankingBoard = async (rankedText, playerText)  => {
    console.log("RankingBoard: Post");
    await axios.post(baseUrl + '/ranking/board', {rankedText, playerText}, headers)
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;