import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navBarStyle.css'
import { Link } from 'react-router-dom'
function NavBar({ title, createdBy }) {
     const logOutHandler = () => {
          localStorage.removeItem("UserID");
          localStorage.setItem("user", false)
          localStorage.removeItem("User");
          window.location.reload(false)
     }
     const userName = JSON.parse(localStorage.getItem("User"))


     return (
          <Navbar expand="lg" variant="light" bg="light">
               <Container>
                    <Navbar.Brand href="#">


                         <h3><b>{title}</b></h3>
                    </Navbar.Brand>
                    {
                         window.location.href.split('/')[3] === "bid" &&
                         <>
                              <p className="created_by"><b>Created by:</b> {createdBy}</p>
                              <div>
                                   <Link to='/home'>
                                        <button type="button" className="btn btn-primary home_button">Home</button>
                                   </Link>
                                   <button type="button" className="btn btn-danger" onClick={() => logOutHandler()}>Log out</button>

                              </div>
                         </>
                    }


                    {
                         window.location.href.split('/')[3] === "home" &&
                         <span className='Nav_Right_Side'>
                              <p className='user_Name'>Hi {userName.name}!</p>
                              <button type="button" className="btn btn-danger" onClick={() => logOutHandler()}>Log out</button>
                         </span>
                    }
                    {
                         window.location.href.split('/')[3] === "newAuction" &&
                         <>
                              <div>
                                   <Link to='/home'>
                                        <button type="button" className="btn btn-primary home_button">Home</button>
                                   </Link>
                                   <button type="button" className="btn btn-danger" onClick={() => logOutHandler()}>Log out</button>
                              </div>
                         </>
                    }

               </Container>
          </Navbar>
     );
}

export default NavBar;