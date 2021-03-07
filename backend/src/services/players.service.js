const exp = {};

const { getPoolCon } = require('../utils/connection-db');

exp.getPlayers = async(req, res) => {
    const response = await getPoolCon().query('SELECT * FROM public.player');
    console.log(response.rows);
    res.json(response.rows);
}

exp.getPlayerById = async(req, res) => {
    const id = parseInt(req.params.id);
    const response = await getPoolCon().query('SELECT * FROM public.player WHERE id_player = $1',[id]);
    res.json(response.rows);
}

exp.createPlayer = async(req, res) => {
    try {
        const { name, nickname } = req.body;
        const strQuery = 'INSERT INTO public.player(name, nickname) VALUES ($1, $2)';
        const response = await getPoolCon().query(strQuery,[name, nickname]);
        console.log(response);
        res.json({
            success: true,
            message: "User Added Succesfully", 
            body: {user:{ name, nickname }} 
        })        
    } catch (error) {
        res.json({success: false, error});        
    }
};

exp.updatePlayer = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, nickname } = req.body;
        const strQuery = 'UPDATE public.player SET name = $1, nickname = $2 WHERE id_player = $3';
        const response = await getPoolCon().query(strQuery,[name, nickname, id]);    
        res.json({
            success: true,
            message: "Player Updated Succesfully", 
            body: {user:{ name, nickname }} 
        })
    } catch (error) {
        res.json({success: false, error});
    }
}

exp.deletePlayer = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const strQuery = 'DELETE FROM public.player WHERE id_player = $1';
        const response = await getPoolCon().query(strQuery,[id]);    
        res.json({
            success: true,
            message: `Player ${id} Deleted Succesfully`
        })        
    } catch (error) {
        res.json({success: false, error});
    }
}

module.exports = exp;