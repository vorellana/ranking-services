import axios from 'axios';
import misc from './../utils/misc'

const exp = {}
const baseUrl = misc.getBackendUrl();
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