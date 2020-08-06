import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return ( 
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Foodie-Friendzy   </NavbarBrand>
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