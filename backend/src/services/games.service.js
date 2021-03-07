const exp = {};

const { getPoolCon } = require('../utils/connection-db');
const { rankingBoard, getRankedArr } = require('../utils/ranking-functions');

exp.getGames = async(req, res) => {
    const response = await getPoolCon().query('SELECT * FROM public.game');
    console.log(response.rows);
    res.json(response.rows);
}

exp.getGamesByPlayer = async(req, res) => {
    const idPlayer = parseInt(req.params.idPlayer);
    const response = await getPoolCon().query('SELECT * FROM public.game WHERE id_player = $1 ORDER BY index DESC', [idPlayer]);
    console.log(response.rows);

    let ranked = await getRankedArr();
    
    for(let i = 0; i < response.rows.length; i++){
        let player = [response.rows[i].score]
        let result = rankingBoard(ranked, player);
        response.rows[i].ranked = result[0];
    }

    res.json(response.rows);
}

exp.createGame = async(req, res) => {
    try {
        const { idPlayer, score } = req.body;
        const index = await generateIndex(idPlayer);
        const strQuery = 'INSERT INTO public.game(index, id_player, score, created) VALUES ($1, $2, $3, NOW())';
        const response = await getPoolCon().query(strQuery,[(index), idPlayer, score]);
        console.log(response);
        res.json({
            success: true,
            message: "Game Added Succesfully",
            body: {game:{ index, idPlayer, score }} 
        });
    } catch (error) {
        res.json({success: false, error});
    }
};

exp.updateGame = async(req, res) => {
    try {
        const idPlayer = parseInt(req.params.idPlayer);
        const { index, score } = req.body;
        const strQuery = 'UPDATE public.game SET score = $1 WHERE id_player = $2 AND index=$3';
        const response = await getPoolCon().query(strQuery,[score, idPlayer, index]);    
        res.json({
            success: true,
            message: "Game Updated Succesfully", 
            body: {game:{ idPlayer, index, score }} 
        })
    } catch (error) {
        res.json({success: false, error});
    }
}

exp.deleteGame = async(req, res) => {
    try {
        const idPlayer = parseInt(req.params.idPlayer);
        const index = parseInt(req.params.index);
        const strQuery = 'DELETE FROM public.game WHERE id_player = $1 and index = $2';
        const response = await getPoolCon().query(strQuery,[idPlayer, index]);
        res.json({
            success: true,
            message: `Game of Player ${idPlayer} of index ${index} Deleted Succesfully`
        })        
    } catch (error) {
        res.json({success: false, error});
    }
}

generateIndex = async(idPlayer) => {
    const response = await getPoolCon().query('SELECT COALESCE(MAX(index),0) as max_index FROM public.game WHERE id_player=$1', [idPlayer]);
    return response.rows[0].max_index + 1;
}

module.exports = exp;