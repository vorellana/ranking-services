import axios from 'axios';

const exp = {}

// const baseUrl = process.env.REACT_APP_API_MFC;
const baseUrl = 'http://localhost:3000/api';
let response;

exp.getPlayers = async ()  => {
    console.log("Players: Get");
    await axios.get(baseUrl + '/players')
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;