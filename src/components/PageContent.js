import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PageContent.css';
import {TabContent, TabPane} from "react-bootstrap";
import ContactTab from './ContactTab';

export default class PageContent extends Component {
    render() {
        return (
            <div className="grey-bg flex-1">
                <TabContent>
                    <TabPane eventKey="portfolio">
                        s
                    </TabPane>
                    <TabPane eventKey="contact">
                        <ContactTab/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}