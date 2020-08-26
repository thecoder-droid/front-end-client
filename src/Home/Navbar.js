import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import logo2 from "../assets/ff-wide.png"

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    

    return ( 
        <Navbar fixed="top" light expand="md" className="App">
            <NavbarBrand href="/"><img src={logo2} className="logo2" alt="Food"/></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar/>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                </NavItem>
            </Nav>
        </Navbar>
     );
}
 
export default NavBar;