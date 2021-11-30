import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '.././containers/style.css';

function NavBar() {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container className='py-4 text-primary'>
                    <Navbar.Brand href="#home">
                        <img style={{ width: '200px', height: '80px' }}
                            src='https://img.freepik.com/free-photo/top-view-raw-fish-tomatoes-radish-parsley-pomegranate-small-bowl-lemon-kitchen-table_179666-46500.jpg?size=338&ext=jpg'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto my-2 my-lg-0"></Nav>
                        <Nav className="ml-auto text-primary">
                            <Nav.Link href="#home">Category</Nav.Link>
                            <Nav.Link href="#link">FAQs</Nav.Link>
                            <Nav.Link href="#link">My Cart</Nav.Link>
                            <Button style={{ width: '150px' }}>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
