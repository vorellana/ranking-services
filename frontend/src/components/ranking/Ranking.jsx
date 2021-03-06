import Button from 'react-bootstrap/Button';

function Players({handleOptionsMenu}){

    return(
        <div className="card-body">
            <h5 className="card-title text-center"><b>Ranking</b></h5>
            <div className="form-group">
                <Button variant="warning" size="lg" block onClick = {() => handleOptionsMenu('M')}>Volver</Button>
            </div>
        </div>
    )

}

export default Players;