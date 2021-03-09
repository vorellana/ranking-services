import axios from 'axios';
import misc from '../utils/misc'

const exp = {}
const headers = misc.getHeaderToken();
const baseUrl = misc.getBackendUrl();
let response;

exp.getPlayers = async ()  => {
    console.log("Players: Get");
    await axios.get(baseUrl + '/players', headers)
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;