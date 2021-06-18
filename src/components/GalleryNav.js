import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/GalleryNav.css';
import {Nav} from "react-bootstrap";

export default class GalleryNav extends Component {
    render() {
        return (
            <Nav variant="tabs" className="justify-content-center my-4">
                <Nav.Item>
                    <Nav.Link className="gallery-nav" eventKey="showcase">Showcase</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="gallery-nav" eventKey="characters">Characters</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="gallery-nav" eventKey="environments">Environments</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="gallery-nav" eventKey="concept-art">Concept Art</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}