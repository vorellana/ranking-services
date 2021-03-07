import axios from 'axios';

const exp = {}

// const baseUrl = process.env.REACT_APP_API_MFC;
const baseUrl = 'http://localhost:3000/api';
let response;

exp.signin = async (userName, password)  => {
    console.log("signin: Post");
    await axios.post(baseUrl + '/auth/signin',{userName, password})
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;