// *** React ***
import React, { useEffect, useState } from 'react'

// *** CSS ***
import './Players.css';

// *** bootstrap ***
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

// *** services ***
import playersService from './../../services/players.service'
import gamesService from './../../services/games.service'

// ***  others ***
import { Plus } from 'react-bootstrap-icons';
import { Reply } from 'react-bootstrap-icons';

function Players({handleOptionsMenu}){

    // *** useState ***
    const [idPlayer, setIdPlayer] = useState(0);
    const [score, setScore] = useState(0);
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);
    const [showValidPlayer, setShowValidPlayer] = useState(true);
    const [showValidScore, setShowValidScore] = useState(true);
    const [openLoaderModal, setOpenLoaderModal ] = useState(false);
    const [openSimpleModal, setOpenSimpleModal ] = useState(false);

    // *** call services ***
    const getPlayers = async () => {
        setPlayers([]);
        setOpenLoaderModal(true);
        //let res = await playersService.getPlayers();
        let res = await playersService.getPlayers().catch(function(error){
            if(error.response){
                console.log(error.response)
            }
        });
        setOpenLoaderModal(false);
        setPlayers(res);
        console.log(res);
    }

    const getGamesByPlayer = async () => {
        setGames([]);
        setOpenLoaderModal(true);
        let res = await gamesService.getGamesByPlayer(idPlayer);
        setOpenLoaderModal(false);
        setGames(res);
        console.log(res);
    }

    const insertGame  = async () => {

        if(idPlayer === 0){
            setShowValidPlayer(false);
            return;
        }
        if(score === ''){
            setShowValidScore(false);
            return;
        }
        setShowValidPlayer(true);
        setShowValidScore(true);
        setOpenLoaderModal(true);
        let res = await gamesService.insertGame(idPlayer, score);
        setOpenLoaderModal(false);
        handleOpenModal(2000);
        getGamesByPlayer(); // reload data
        setScore(0);
    }

    // *** useEffect ***
    useEffect(async () => {
        await getPlayers();
    },[]);

    useEffect(async () => {
        setShowValidPlayer(true);
        await getGamesByPlayer();
    },[idPlayer]);


    // ***** handlers *****
    const handleOpenModal = async (timeout) => {
        setOpenSimpleModal(true);
        setTimeout(function(){setOpenSimpleModal(false);}, timeout)
    }

    // *** render functions ***
    const listItemsPlayers = players.map((item) =>
        <option value={item.id_player}>{item.name}</option>
    );

    const listItemsGames = games.map((item) =>
        <tr>
            <td>{item.index}</td>
            <td>{item.score}</td>
            <td>{item.ranked}</td>
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
                            <span className="span-mnf" hidden={showValidPlayer}>You must select a player</span>
                        </div>
                    </div>
                    <div class="form-group row mb-4">
                        <label class="col-lg-2 col-form-label">New Score:</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <input type="number" class="form-control" aria-describedby="basic-addon2"
                                    value = {score} onChange = { e => setScore(e.target.value)}/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" class="btn btn-success" onClick = {insertGame}>
                                        <Plus className="" size = {20} bold = {true} style={{paddingBottom:"3px",fontWeight:"bold"}}/>Add
                                    </button>
                                </div>
                            </div>
                            <span className="span-mnf" hidden={showValidScore}>You must enter a value</span>
                        </div>                    
                    </div>
                </form>
                {/* datatable */}
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
                <hr></hr>
                <div class="form-group row">
                    <div class="col-lg-12">
                        <Button variant="secondary" size="lg" block onClick = {() => handleOptionsMenu('M')}>
                            <Reply className="" size = {30} bold = {true} style={{paddingBottom:"8px"}} />Volver
                        </Button>
                    </div>
                </div>
            </div>
            {/* modals */}
            <Modal show={openSimpleModal} onHide={ () => setOpenSimpleModal(false) }>
                <Modal.Header closeButton><Modal.Title>Information</Modal.Title></Modal.Header>
                <Modal.Body><p>Score successfully added</p></Modal.Body>
            </Modal>            

            <Modal show={openLoaderModal} onHide={ () => setOpenLoaderModal(false) } className="modal-dialog-centered" >
                <Modal.Body>
                        <div className="d-flex justify-content-center" style={{marginTop: 50}}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" style={{marginTop: 10}}>
                            <p>Checking...</p>
                        </div>                            
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Players;