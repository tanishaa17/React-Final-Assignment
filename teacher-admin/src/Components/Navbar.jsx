import React from 'react'
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { textAlign } from '@mui/system';

export const Navbar = () => {
    return (
        <>
            <ReactBootStrap.Navbar bg="success" variant="primary">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand style={{ textDecoration: 'none', color: "white", float: "right" }} >Teachers </ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="me-auto">
                        {/* <div className={Styles.headerbtn}> */}

                        <ReactBootStrap.Nav.Link><Link style={{ textDecoration: 'none', color: "white" }} to="/register"> Register </Link></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link><Link style={{ textDecoration: 'none', color: "white" }} to="/login"> Login </Link></ReactBootStrap.Nav.Link>

                        {/* </div> */}
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>

        </>
    )
}
