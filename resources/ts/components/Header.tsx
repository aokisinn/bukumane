import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="md" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>ブクマネ</Navbar.Brand>
            {/* TODO アカウント 名表示 */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="mr-auto">
                    <Nav.Link href="#home" active>
                        Home
                    </Nav.Link>
                    <Nav.Link href="#features">Link</Nav.Link>
                    <Nav.Link href="#pricing" disabled>
                        Disabled
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#another">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#something">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#separated">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
