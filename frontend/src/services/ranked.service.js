import axios from 'axios';
import misc from './../utils/misc'

const exp = {}
const headers = misc.getHeaderToken();
const baseUrl = misc.getBackendUrl();
let response;

exp.getRanked = async ()  => {
    console.log("Ranked: Get");
    await axios.get(baseUrl + '/ranked', headers)
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;