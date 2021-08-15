import React, { useState } from 'react';
// import { NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    Nav,
    NavItem,  
} from 'reactstrap';

const Navigate = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = {
        fontWeight: "bold",
        color: "mediumorchid"
    };
    const toggle = () => setIsOpen(!isOpen);

    return (
       
            <Navbar color="dark" dark expand="md" fixed="top">
                <NavbarBrand href="/">Honolulu SPCA</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/"
                                activestyle={activeStyle}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Dogs"
                                activestyle={activeStyle}>Dogs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Cats"
                                activestyle={activeStyle}>Cats</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Adopt"
                                activestyle={activeStyle}>Adopt</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact"
                                activestyle={activeStyle}>Contact</NavLink>
                        </NavItem>
                       
                        {/* {props.dogs.map(
                            (d) => (
                                <NavItem>
                                    <NavLink href={`/Dogs/${d.name}`}
                                        activeStyle={activeStyle} key={d.name}>{d.name}</NavLink>
                                </NavItem>
                            )
                        )}
   */}
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Navigate;
