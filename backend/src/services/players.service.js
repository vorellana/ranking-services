const exp = {};

const { getPoolCon } = require('../utils/connection-db');

exp.getPlayers = async(req, res) => {
    // await res.json({ username: 'Flavio' })
    // let ranked = [100,90,90,80];
    // let ranked = [90,90,100,80];
    let ranked = [90,50,10,100,70,50,70,30,10,20,10,40,80];
    // let player = [70,80,105];

    // let player = [70,10,60,80,105];
    // let player = [7,70,10,60,80,105];
    let player = [7,70,10,60,80,89];

    // await res.json(rankingBoard(ranked, player))
    const response = await getPoolCon().query('SELECT * FROM player');
    console.log(response.rows);
    res.json(response.rows);
}

exp.getPlayerById = async(req, res) => {
    const id = parseInt(req.params.id);
    const response = await getPoolCon().query('SELECT * FROM player WHERE id_player = $1',[id]);
    res.json(response.rows);
}

exp.createPlayer = async(req, res) => {
    const { name, nickname } = req.body;
    const strQuery = 'INSERT INTO public.player(name, nickname) VALUES ($1, $2)';
    const response = await getPoolCon().query(strQuery,[name, nickname]);
    console.log(response);
    res.json({
        message: "User Added Succesfully", 
        body: {user:{ name, nickname }} 
    })
};

exp.updatePlayer = async(req, res) => {
    const id = parseInt(req.params.id);
    const { name, nickname } = req.body;
    const strQuery = 'UPDATE public.player SET name = $1, nickname = $2 WHERE id_player = $3';
    const response = await getPoolCon().query(strQuery,[name, nickname, id]);    
    res.json({
        message: "Player Updated Succesfully", 
        body: {user:{ name, nickname }} 
    })
}

exp.deletePlayer = async(req, res) => {
    const id = parseInt(req.params.id);
    const strQuery = 'DELETE FROM public.player WHERE id_player = $1';
    const response = await getPoolCon().query(strQuery,[id]);    
    res.json({
        message: `Player ${id} Deleted Succesfully`
    })
}


const rankingBoard = (ranked, player) => {
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
    player.sort(function(a, b) {return a - b;});

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

module.exports = exp;