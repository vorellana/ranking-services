import './Login.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import authService from './../../services/auth.service'
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";

function Login (){    
    // ***** set state *****
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showValidUser, setShowValidUser] = useState(true);
    const [msgValidUser, setMsgValidUser] = useState("");
    const [showValidPassword, setShowValidPassword] = useState(true);
    const [msgValidPassword, setMsgValidPassword] = useState("");
    const [messageModal, setMessageModal ] = useState("");
    const [openSimpleModal, setOpenSimpleModal ] = useState(false);
    const [openLoaderModal, setOpenLoaderModal ] = useState(false);

    const cookies = new Cookies();

    // ***** handles *****
    const handleOpenModal = async (messageModalTemp, timeout) => {
        setMessageModal(messageModalTemp);
        setOpenSimpleModal(true);
        setTimeout(function(){setOpenSimpleModal(false);}, timeout)
    }    

    const validateUser = () => {
        if(userName.trim() === ""){
            setMsgValidUser("You must enter a user");
            setShowValidUser(false);
            return false;
        }
        setShowValidUser(true);
        return true
    }

    const validatePassword = () => {
        if(password.trim() === ""){
            setMsgValidPassword("You must enter a password");
            setShowValidPassword(false);
            return false;
        }
        setShowValidPassword(true);
        return true        
    }

    const login =  async () => {
        let valUser = validateUser();
        let valPassword = validatePassword();

        if (valUser && valPassword){
            setOpenLoaderModal(true);
            let res = await authService.signin(userName, password);
            setOpenLoaderModal(false);
            
            if (res.auth){
                let decoded = jwt_decode(res.token);
                // cookies.set('isAuthenticated', true, { path: '/' });
                cookies.set('idUser', decoded.idUser, { path: '/' });
                cookies.set('userName', decoded.userName, { path: '/' });
                cookies.set('firstName', decoded.firstName, { path: '/' });
                // cookies.set('token', res.token, { path: '/' });
                localStorage.setItem("jwt",res.token);

                window.location.href="./menu";
            }else{
                setUserName("");
                setPassword("");
                handleOpenModal(res.message, 3000)
            }
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="d-flex justify-content-center" style={{marginTop: 50}}>
                            <div className="title-mnf">Ranking Services</div>
                        </div>
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>Login</b></h5>
                                <form className="form-signin">
                                    <div className="form-group">
                                        <label>User</label>
                                        <input id="inp-user-name" type="text" className="form-control" placeholder="User" required
                                            value = {userName} onChange = { e => setUserName(e.target.value)}/>
                                        <span className="span-mnf" hidden={showValidUser} >{msgValidUser}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input id="inp-password" type="password" className="form-control" placeholder="Password" required
                                            value = {password} onChange = { e => setPassword(e.target.value)}/>
                                        <span className="span-mnf" hidden ={showValidPassword} >{msgValidPassword}</span>
                                    </div>
                                    <div className="form-group">
                                        <Button id="btn-login" variant="primary" size="lg"  style={{height: 60}} block onClick={login}><h5>Sign in</h5></Button>    
                                    </div>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={openSimpleModal} onHide={ () => setOpenSimpleModal(false) }>
                <Modal.Header closeButton><Modal.Title>Information</Modal.Title></Modal.Header>
                <Modal.Body><p>{messageModal}</p></Modal.Body>
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

export default Login
