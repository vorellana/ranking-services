// *** react ***
import React, { useState } from 'react';

// *** components ***
import Players from './../players/Players';
import Ranking from './../ranking/Ranking';
import RankingBoard from '../ranking-board/RankingBoard';

// *** CSS ***
import './Menu.css'

// *** bootstrap ***
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// *** others ***
import Cookies from 'universal-cookie';

function Menu() {

    // ***** consts ******
    const cookies = new Cookies();    
    const [firstName, setFirstName ] = useState(cookies.get('firstName'));

    const logout = async () => {
        cookies.remove('isAuthenticated', {path: "/"});
        cookies.remove('idUser', {path: "/"});
        cookies.remove('userName', {path: "/"});
        cookies.remove('firstName', {path: "/"});
        cookies.remove('token', {path: "/"});
        window.location.href=".";
    }

    return (
        <div className="col-lg-12">
            <div className="row">
                <div className="col">
                    <div className=" float-right">
                        <DropdownButton id="dropdown-basic-button" title={firstName} className="session-button">
                            <Dropdown.Item href="#/action-1" onClick = {() => logout()}>Log out</Dropdown.Item>
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

    const [optionsMenu, setOptionsMenu ] = useState('M'); // M: Menu, P: Player, R: Ranking, B: Ranked Board

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
                        <Button variant="dark" size="lg" block onClick = {() => setOptionsMenu('B')} >Test: RankingBoard()</Button>
                    </div>
                </div>
            )
        case 'P':
            return (
                <div><Players handleOptionsMenu = {handleOptionsMenu}></Players></div>
            )
        case 'R':
            return (
                <div><Ranking handleOptionsMenu = {handleOptionsMenu}></Ranking></div>
            )
        case 'B':
            return (
                <div><RankingBoard handleOptionsMenu = {handleOptionsMenu}></RankingBoard></div>
            )            
        default:
          break;
      }
}

export default Menu;