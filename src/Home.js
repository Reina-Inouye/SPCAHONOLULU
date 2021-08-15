import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./list.css"


class home extends Component {
    render() {
        return (
            <div>
              <Container>
                <Row>
                    <Col>
                        <h1 className="text">Welcome to the SPCA</h1>
                    </Col>
                </Row>
                <Row>
                            <Col sm="6" className="text-center pet">
                                    <img src={this.props.dogs[0].src} alt={this.props.dogs[0].name} />
                                    <Link to="/Dogs">
                                       <h4 className="text">Dogs</h4>
                                    </Link>
                            </Col>
                            <Col sm="6" className="text-center pet">
                                    <img src={this.props.cats[0].src} alt={this.props.cats[0].name} />
                                    <Link to="/Cats">
                                       <h4 className="text">Cats</h4>
                                    </Link>
                            </Col>
                   
                </Row>
            </Container>  
            </div>
        );
    }
}

export default home;
