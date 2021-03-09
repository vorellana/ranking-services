// *** Miscellaneus ***
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
const exp = {}

exp.getHeaderToken =  ()  => {
    return { headers: {"x-access-token": localStorage.getItem('jwt') } };
}

exp.verifyAuth = () => {
    const cookies = new Cookies();
    const jwt = localStorage.getItem('jwt')
    if (jwt !== null){
        let decoded = jwt_decode(jwt);
        if(decoded.idUser.toString() === cookies.get('idUser')) return true;
    }
    return false;
}

exp.getBackendUrl =  ()  => {
    // const url = process.env.REACT_APP_API_BACKEND;
    const url = 'http://localhost:3000/api';
    return url;
}

export default exp;