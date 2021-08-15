import React, { Component } from 'react';



import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';


class Adopt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            birthdayMonth: '',
            comments: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return(
        <div className="row row-content">
                    <div className="text-center col-md-8 offset-md-2">
                        <h3 className="mt-3">Adopt a Pet</h3>
                       
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="fullName" md={2}></Label>
                                <Col md={8}>
                                    <Input type="text" id="fullName" name="fullName"
                                        placeholder="Full Name"
                                        value={this.state.fullName}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}></Label>
                                <Col md={8}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}></Label>
                                <Col md={8}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 4, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                                <p> I would like to adopt a pet </p>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Cat</option>
                                        <option>Dog</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="comments" md={2}></Label>
                                <Col md={8}>
                                    <Input type="textarea" id="comments" name="comments"
                                        rows="6"
                                        placeholder="Name of cat or dog"
                                        value={this.state.comments}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col className="m-auto" sm={2}>
                                    <Button type="submit" color="dark">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
        );
    }
}

export default Adopt;
