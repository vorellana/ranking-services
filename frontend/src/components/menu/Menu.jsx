// *** CSS ***
import './Menu.css'

// *** bootstrap ***
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Menu() {
    return (

        // <div class="container">
        //     <div class="jumbotron">
        //         <h1>Bootstrap Tutorial</h1>      
        //         <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
        //     </div>
        //     <p>This is some text.</p>      
        //     <p>This is another text.</p>      
        //     <Button>Players</Button>
        //     <Button>Ranking</Button>
        // </div>

        <div>
            <div className="row">
                <div className="col">
                    <div className="float-right">
                        <DropdownButton id="dropdown-basic-button" title="Victor O." className="session-button">
                            {/* <Dropdown.Item href="#/action-1" onClick = {() => logout()} >Cerrar sesión</Dropdown.Item> */}
                            <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>            
            <div className="d-flex justify-content-center">
                <div className="title-mnf">Ranking Services</div>
            </div>            
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">

                                <div className="form-group">
                                    <Button variant="primary" size="lg" block>Players</Button>
                                    <Button variant="success" size="lg" block>Ranking</Button>
                                    
                                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                                        placeholder="¿Qúe esta pasando?" style={{marginBottom:6}} 
                                        value="nada">
                                    </textarea>
                                
                                    <Button className="float-right" size="sm">Publicar</Button>
                                    <Form.Control as="select"
                                        className="float-right custom-mfc-select" size="sm">
                                        <option value="F">Amigos</option>
                                        <option value="P">Público</option>
                                    </Form.Control> */}
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>        
  
    );
  }

export default Menu;