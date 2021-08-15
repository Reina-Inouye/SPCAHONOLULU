import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, ListGroupItem, ListGroup, Container, Row, Col
} from 'reactstrap';
import "./Petdetails.css";


class Petdetailscats extends Component {

    render() {
        let petName = this.props.match.params.name;
       
        let pet = this.props.pets.filter(pet => pet.name.toLowerCase() === petName.toLowerCase())[0]
        
        return (
            <Container>
                <Row>
                    <Col xs={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                        <Card className="mt-5">
                            <CardImg src={pet.src} alt={pet.name}/>
                            <CardBody>
                                <CardTitle tag="h5"> {pet.name}</CardTitle>
                                <CardText tag="h6">
                                    {pet.age} years old <br /><br />
                                    <ListGroup>
                                        {pet.facts.map(i => <ListGroupItem>{i}</ListGroupItem>)}
                                    </ListGroup>
                                </CardText>
                                <Button color="primary" href="/Cats">
                                    Go Back
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Petdetailscats;
