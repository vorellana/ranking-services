// *** React ***
import React, { useEffect, useState } from 'react'

// *** bootstrap ***
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

// *** services ***
import rankingService from '../../services/ranking.service'

// ***  others ***
import { Reply } from 'react-bootstrap-icons';
import { PlayCircle } from 'react-bootstrap-icons';

function RankingBoard({handleOptionsMenu}){

    // *** useState ***
    const [rankedText, setRankedText] = useState("100 90 90 80");
    const [playerText, setPlayerText] = useState("70 80 105");
    const [resultText, setResultText] = useState("");
    const [openLoaderModal, setOpenLoaderModal ] = useState(false);

    // *** call services ***
    const getRankingBoard = async () => {
        setResultText("");
        setOpenLoaderModal(true);
        let res = await rankingService.getRankingBoard(rankedText, playerText);
        setOpenLoaderModal(false);
        setResultText( '[' + res.join(',') + ']') ;
        console.log(res);
    }
    
    return(
        
        <div className="card-body">
            <h5 className="card-title text-center"><b>Test: RankingBoard()</b></h5>
            <div className="form-group">
                <form role="form">
                    <div class="form-group row">
                        <label class="col-lg-2 col-form-label">Ranked:</label>
                        <div class="col-lg-10">
                            <input type="text" class="form-control" value = {rankedText} onChange = { e => setRankedText(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-2 col-form-label">Player:</label>
                        <div class="col-lg-10">
                            <input type="text" class="form-control" value = {playerText} onChange = { e => setPlayerText(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-2 col-form-label"></label>
                        <label class="col-lg-10 col-form-label">
                            <Button variant="primary" size="lg" block onClick = {getRankingBoard}>
                                <PlayCircle className="" size = {30} bold = {true} style={{paddingBottom:"6px"}} />
                                Execute</Button>
                        </label>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-2 col-form-label">Result:</label>
                        <div class="col-lg-10">
                            <input type="text" readOnly class="form-control" value = {resultText} onChange = { e => setResultText(e.target.value)}/>
                        </div>
                    </div>
                </form>
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
            <Modal show={openLoaderModal} onHide={ () => setOpenLoaderModal(false) } className="modal-dialog-centered" >
                <Modal.Body>
                        <div className="d-flex justify-content-center" style={{marginTop: 50}}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" style={{marginTop: 10}}>
                            <p>Procesando...</p>
                        </div>                            
                </Modal.Body>
            </Modal>            
        </div>
    )
}

export default RankingBoard;