import React, { useEffect, useState } from 'react';

import Players from './../players/Players';
import Ranking from './../ranking/Ranking';

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
        <div className="col-lg-12">
            <div className="row">
                <div className="col">
                    <div className=" float-right">
                        <DropdownButton id="dropdown-basic-button" title="Victor O." className="session-button">
                            <Dropdown.Item href="#/action-1" >Cerrar sesión</Dropdown.Item>
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
                            <HandleMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}

function HandleMenu(){

    const [optionsMenu, setOptionsMenu ] = useState('M'); // M: Menu, P: Player, R: Ranking

    const handleOptionsMenu = (opc) => {
        setOptionsMenu(opc);
    }

    switch (optionsMenu) {
        case 'M':
            return (

                <div className="card-body">
                    <div className="form-group">
                        <Button variant="primary" size="lg" block onClick = {() => setOptionsMenu('P')}>Players</Button>
                        <Button variant="success" size="lg" block onClick = {() => setOptionsMenu('R')}>Ranking</Button>
                    </div>
                </div>
            )
        case 'P':
            return (
                <div>
                    <Players
                        handleOptionsMenu = {handleOptionsMenu}
                    ></Players>
                </div>
            )
        case 'R':
            return (
                <div>
                    <Ranking
                        handleOptionsMenu = {handleOptionsMenu}
                    ></Ranking>
                </div>
            )            
        default:
          break;
      }
}

export default Menu;