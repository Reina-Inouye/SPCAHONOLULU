import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import {

    Navbar,
    NavLink,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import "./list.css";


class Catlist extends Component {



    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown  nav inNavbar>
                            <DropdownToggle  nav caret>
                            Cat List
                            </DropdownToggle>
                            <DropdownMenu  className ="drop" color="dark" dark direction = "right">
                                {this.props.cats.map(
                                    (c) => (
                                        <DropdownItem >
                                            <NavItem > 
                                                <NavLink className ="back" href={`/Cats/${c.name}`}
                                                    key={c.name}>{c.name}</NavLink>
                                            </NavItem>
                                        </DropdownItem>
                                    )
                                )}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
               
                <Row>
                    <Col>
                        <h1 className="text">Available Cats</h1>
                    </Col>
                </Row>
                <Row>
                    {this.props.cats.map(
                        (c) => (
                            <Col sm="4" className="text-center pet">
                                <div key={c.name}>
                                    <img src={c.src} alt={c.name} />
                                    <Link to={`/Cats/${c.name}`}>
                                       <h4 className="text">{c.name}</h4>
                                    </Link>


                                </div>
                            </Col>
                        )
                    )}
                </Row>
            
            </div>

        );
    }
}

export default Catlist;
