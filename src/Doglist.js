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


class Doglist extends Component {



    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown  nav inNavbar>
                            <DropdownToggle  nav caret>
                            Dog List
                            </DropdownToggle>
                            <DropdownMenu  className ="drop" color="dark" dark direction = "right">
                                {this.props.dogs.map(
                                    (d) => (
                                        <DropdownItem >
                                            <NavItem > 
                                                <NavLink className ="back" href={`/Dogs/${d.name}`}
                                                    key={d.name}>{d.name}</NavLink>
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
                        <h1 className="text">Available Dogs</h1>
                    </Col>
                </Row>
                <Row>
                    {this.props.dogs.map(
                        (d) => (
                            <Col xs="12" sm="6" lg="4" className="text-center pet">
                                <div key={d.name}>
                                    <img src={d.src} alt={d.name} />
                                    <Link to={`/Dogs/${d.name}`}>
                                       <h4 className="text">{d.name}</h4>
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

export default Doglist;
