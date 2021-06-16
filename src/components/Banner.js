import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Banner.css';
import {Row, Col, TabContainer, TabContent, TabPane, Nav} from "react-bootstrap";

export default class Banner extends Component {
    render() {
        return (
            <TabContainer defaultActiveKey="portfolio">
                <div>
                    <Row className="black-bg m-0">
                        <Col md={9}>
                            <h1 className="text-bold text-white text-start ml-5 mt-5">
                                Christian Bolos
                            </h1>
                            <h2 className="text-start text-grey ml-5 mb-5">
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
                </div>
                <div className="grey-bg flex-1">
                    <TabContent>
                        <TabPane eventKey="portfolio">
                            s
                        </TabPane>
                        <TabPane eventKey="contact">
                            d
                        </TabPane>
                    </TabContent>
                </div>
            </TabContainer>
        );
    }
}