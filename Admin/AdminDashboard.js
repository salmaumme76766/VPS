import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";
import { Link,Outlet, useNavigate } from "react-router-dom";
import {AiOutlineLogout} from "react-icons/ai";
import Error from "../Component/Error";

export default function AdminDashboard(){
    const navigate = useNavigate()
    const admin =sessionStorage.getItem("admin")

    function handleLogout(e) {
        e.preventDefault();
        sessionStorage.clear();
        navigate("/")
    }
   
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="shadow">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/AdminDashboard/manageproducts"}>
                        Virtual Plan Store
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/AdminDashboard/manageproducts"}>
                          Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/manageusers"}>
                          Manage Users
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/manageproducts"}>
                          Manage Products
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/allorders"}>
                          Manage Order
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <AiOutlineLogout 
                        onClick={handleLogout}
                        color="blue"
                        size="30"
                        className="me-2"
                        style={{ cursor: "pointer" }}
                        ></AiOutlineLogout>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </div>
    );
}