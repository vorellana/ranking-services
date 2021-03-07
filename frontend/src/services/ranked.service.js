import axios from 'axios';
import misc from './../utils/misc'

const exp = {}
const headers = misc.getHeaderToken();

// const baseUrl = process.env.REACT_APP_API_MFC;
const baseUrl = 'http://localhost:3000/api';
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