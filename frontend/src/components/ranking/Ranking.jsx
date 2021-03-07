// *** React ***
import React, { useEffect, useState } from 'react'

// *** bootstrap ***
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

// *** services ***
import rankingService from './../../services/ranking.service'

// ***  others ***
import { Reply } from 'react-bootstrap-icons';

function Players({handleOptionsMenu}){

    // *** useState ***
    const [ranking, setRanking] = useState([]);
    const [openLoaderModal, setOpenLoaderModal ] = useState(false);

    // *** call services***
    const getRanking = async () => {
        setRanking([]);
        setOpenLoaderModal(true);
        let res = await rankingService.getRanking();
        setOpenLoaderModal(false);
        setRanking(res);
        console.log(res);
    }

    // *** useEffect ***
    useEffect(async () => {
        await getRanking();
    },[]);    

    // *** render functions ***    
    const listItemsRanking = ranking.map((item) =>
        <tr>
            <th scope="row">{item.row_number}</th>
            <td>{item.ranked}</td>
            <td>{item.name}</td>
            <td>{item.total_score}</td>
            <td>{item.number_games}</td>
            <td>{item.average_score}</td>
        </tr>
    );    

    return(

        <div className="card-body">
            <h5 className="card-title text-center"><b>Ranking</b></h5>
            <div className="form-group">

                {/* <label>Colocar la tabla de clasificación (ranked) en alguna lado</label> */}

                {/* datatable */}
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                {/* <th scope="col">Ranking</th> */}
                                <th scope="col">#</th>
                                <th scope="col">Ranked</th>
                                <th scope="col">Player</th>
                                <th scope="col">Total</th>
                                <th scope="col">#Games</th>
                                <th scope="col">Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItemsRanking}

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

export default Players;