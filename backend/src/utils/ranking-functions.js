const { getPoolCon } = require('./connection-db');

const exp = {};
 
exp.rankingBoard = (ranked, player) => {
    let result = [];

    // sorting ranked
    ranked.sort(function(a, b) {return b - a;});

    // cleaning duplicates of ranked
    if (ranked.length >= 2){
        for(let i = 1; i < ranked.length; i++){
            if(ranked[i-1] === ranked[i] ){
                ranked.splice(i, 1);
                i--;
            }
        }
    }

    // sorting player
    // player.sort(function(a, b) {return a - b;});

    // generating the classification ranges
    for(let i = 0; i < player.length; i++){
        for(let j = ranked.length - 1; j >= 0; j--){
            if(j === (ranked.length - 1) && player[i] < ranked[j] ){
               result.push(j+2);
            } else if(j === 0 && player[i] >= ranked[j] ){
                result.push(1);
            } else if(player[i] < ranked[j - 1] && player[i] >= ranked[j]) {
                    result.push(j+1);
            }
        }
    }
    // console.log(result);
    return result;
}

exp.getRankedArr = async() => {
    const response = await getPoolCon().query('SELECT * FROM public.ranked');
    let arr = [];
    for(let i = 0; i < response.rows.length; i++)
        arr.push(response.rows[i].value);
    return arr;
}

module.exports = exp;