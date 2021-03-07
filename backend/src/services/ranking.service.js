const exp = {};

const { getPoolCon } = require('../utils/connection-db');
const { rankingBoard, getRankedArr } = require('../utils/ranking-functions');

exp.getRanking = async(req, res) => {
    let strQuery = 'SELECT ROW_NUMBER () OVER (ORDER BY average_score DESC, name ASC) row_number, * FROM public.ranking ORDER BY average_score DESC, name ASC';
    const response = await getPoolCon().query(strQuery);
    console.log(response.rows);

    let ranked = await getRankedArr();

    for(let i = 0; i < response.rows.length; i++){
        let player = [response.rows[i].average_score]
        let result = rankingBoard(ranked, player);
        response.rows[i].ranked = result[0];
    }

    // test
    // let ranked1 = [100,90,90,80];
    // let player1 = [70,80,105];
    // let res1 = rankingBoard(ranked1,player1);
    // console.log('listooo!!!');
    // console.log(res1);
    // console.log('listooo!!! fin..');

    res.json(response.rows);
}

exp.getRankingBoard = async(req, res) => {
    const { rankedText, playerText } = req.body;
    const ranked = rankedText.split(" ").map(Number);
    const player = playerText.split(" ").map(Number);
    let result = rankingBoard(ranked, player);
    res.json(result);
}


module.exports = exp;