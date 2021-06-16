import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Banner.css';
import {Row, Col, Nav} from "react-bootstrap";

export default class Banner extends Component {
    render() {
        return (
            <Row className="black-bg m-0">
                <Col md={9}>
                    <h1 className="text-bold text-white text-start ml-5 mt-5">
                        Christian Bolos
                    </h1>
                    <h2 className="text-start h2 ml-5 mb-5">
                        VFS Graduate - Characters/Environments/Concept Art
                    </h2>
                </Col>
                <Col className="align-self-end" md={3}>
                    <Nav fill variant="tabs" className="justify-content-center mb-1">
                        <Nav.Item>
                            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row> 
        );
    }
}