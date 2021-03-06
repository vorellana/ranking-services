// *** React ***
import React, { useEffect, useState } from 'react'

// *** CSS ***
import './Players.css';

// *** bootstrap ***
import Button from 'react-bootstrap/Button';

// *** services ***
import playersService from './../../services/players.service'
import gamesService from './../../services/games.service'

// ***  others ***
import { Plus } from 'react-bootstrap-icons';

function Players({handleOptionsMenu}){

    // *** useState ***
    const [idPlayer, setIdPlayer] = useState(0);
    const [score, setScore] = useState(0);
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);

    // *** call services ***
    const getPlayers = async () => {
        setPlayers([]);
        // setOpenLoaderModal(true);
        let res = await playersService.getPlayers();
        // setOpenLoaderModal(false);
        setPlayers(res);
        console.log(res);
    }

    const getGamesByPlayer = async () => {
        setGames([]);
        let res = await gamesService.getGamesByPlayer(idPlayer);
        setGames(res);
        console.log(res);
    } 

    const insertGame  = async () => {
        let res = await gamesService.insertGame(idPlayer, score);
        getGamesByPlayer(); // reload data
        setScore(0);
    }

    // *** useEffect ***
    useEffect(async () => {
        await getPlayers();

    },[]);

    useEffect(async () => {
        await getGamesByPlayer();
    },[idPlayer]);


    // *** render functions ***
    const listItemsPlayers = players.map((item) =>
        <option value={item.id_player}>{item.name}</option>                
    );

    const listItemsGames = games.map((item) =>
        <tr>
            <td>{item.index}</td>
            <td>{item.score}</td>
            <td>100</td>
        </tr>
    );   

    return(
        
        <div className="card-body">
            <h5 className="card-title text-center"><b>Players</b></h5>
            <div className="form-group">
                <form>
                    <div class="form-group row">
                        <label class="col-lg-2 col-form-label">Name:</label>
                        <div class="col-lg-10">
                            <select className="form-control"  value = {idPlayer} onChange = {e => setIdPlayer(e.target.value)}>
                                <option hidden selected value={0}>(Select a player)</option>
                                {listItemsPlayers}
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-lg-2 col-form-label">New Score:</label>
                        <div class="col-lg-10">
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" aria-describedby="basic-addon2"
                                    value = {score} onChange = { e => setScore(e.target.value)}/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" class="btn btn-success" onClick = {insertGame}>
                                        <bold><Plus className="" size = {20} bold = {true}/>Add</bold>
                                    </button>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </form>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#Game</th>
                                <th scope="col">Score</th>
                                <th scope="col">Ranked</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItemsGames}
                        </tbody>
                    </table>
                </div>

                <Button variant="danger" size="lg" block onClick = {() => handleOptionsMenu('M')}>Volver</Button>
            </div>
        </div>
    )
}

export default Players;



{/* <div class="table-responsive">
<table class="table table-bordered">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Game</th>
        <th scope="col">Score</th>
        <th scope="col">Ranked</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob aaaaaaaa</td>
        <td>Thornton bbbbbb</td>
        <td>@fat ccc</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
</table>
</div> */}