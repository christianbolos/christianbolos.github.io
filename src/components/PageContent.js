import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PageContent.css';
import {TabContainer, TabContent, TabPane} from "react-bootstrap";
import GalleryNav from './GalleryNav';
import Gallery from './Gallery';
import ContactTab from './ContactTab';

export default class PageContent extends Component {
    render() {
        return (
            <div className="grey-bg flex-1">
                <TabContent>
                    <TabPane eventKey="portfolio">
                        <TabContainer defaultActiveKey="showcase">
                            <GalleryNav/>
                            <Gallery/>
                        </TabContainer>
                    </TabPane>
                    <TabPane eventKey="contact">
                        <ContactTab/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}