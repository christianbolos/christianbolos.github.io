import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/homepage/TopNav.css';
import {Row, Col, TabContainer, TabContent, TabPane, Nav} from "react-bootstrap";

export default class TopNav extends Component {
    render() {
        return (
            <div id="top-nav">
                <TabContainer defaultActiveKey="portfolio">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Nav fill variant="tabs" className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="contact">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabContent>
                                <TabPane eventKey="portfolio">
                                    s
                                </TabPane>
                                <TabPane eventKey="contact">
                                    d
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </div>
        );
    }
}