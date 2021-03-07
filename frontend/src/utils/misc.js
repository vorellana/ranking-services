// *** Miscellaneus ***

import Cookies from 'universal-cookie';
const exp = {}

// exp.getHeaderToken = async ()  => {
//     const cookies = new Cookies();
//     return await cookies.get('token');
// }

exp.getHeaderToken =  ()  => {
    const cookies = new Cookies();
    // return cookies.get('token');
    return { headers: {"x-access-token": cookies.get('token') } };
}

export default exp;